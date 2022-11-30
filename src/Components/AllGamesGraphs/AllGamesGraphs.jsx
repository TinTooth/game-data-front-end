import React from "react";
import {Chart} from "react-google-charts";
import "./AllGamesGraphs.css";

const AllGamesGraphs = ({data}) => {
    const generateGlobalSalesData = () => {
        let filteredGames = data.filter(game => game.year >= 2013);
        let platforms = filteredGames.map(game => {return game.platform});
        let filteredPlatforms = [...new Set(platforms)];

        let platformArrays = filteredPlatforms.map(platform => {
            let allGames = filteredGames.filter(game => game.platform === platform);
            let sum = 0;
            allGames.map(game => sum += game.globalsales);
            return [platform,sum]
        })

        let sortedArrays = platformArrays.sort((p1,p2) => (p1[1]<p2[1]) ? 1 : (p1[1]>p2[1]) ? -1 : 0)
        const allGamesGraphData = [
            ["Platform", "Sales"],
            ...sortedArrays
        ]
        return allGamesGraphData;

    }

    const generateTopPublisherData = () => {
        let filteredGames = data.filter(game => game.year >= 2000);
        let publishers = data.map(game =>{return game.publisher});
        let uniquePublishers = [...new Set(publishers)];
        let publisherArrays = uniquePublishers.map(publisher => {
            let publishergames = filteredGames.filter(game => game.publisher == publisher);
            let ps4sum = 0;
            let xonesum = 0;
            let wiiusum = 0;
            let ps3sum = 0;
            let x360sum = 0;
            let wiisum = 0;
            publishergames.map(game=> 
                {switch(game.platform) {
                    case "PS4": ps4sum += game.globalsales; break;
                    case "XOne": xonesum += game.globalsales;break;
                    case "WiiU": wiiusum += game.globalsales;break;
                    case "PS3": ps3sum += game.globalsales;break;
                    case "X360": x360sum += game.globalsales;break;
                    case "Wii": wiisum += game.globalsales;break;
                }}
            )
            return [publisher,wiisum,wiiusum,ps3sum,ps4sum,x360sum,xonesum]
        })

        let sortedPublishers = publisherArrays.sort((p1,p2) =>
        ((p1[1]+p1[2]+p1[3]+p1[4]+p1[5]+p1[6])<(p2[1]+p2[2]+p2[3]+p2[4]+p2[5]+p2[6])) ? 1 :
        ((p1[1]+p1[2]+p1[3]+p1[4]+p1[5]+p1[6])>(p2[1]+p2[2]+p2[3]+p2[4]+p2[5]+p2[6])) ? -1 : 0);
        
        let topPublisherArrays = []
        for (let i = 0; i <10; i++) {
            topPublisherArrays.push(sortedPublishers[i])
        }

        let topPublishersGraphData = [
            ['Publisher','Wii','WiiU','PS3','PS4','X360','XOne'],
            ...topPublisherArrays
        ]
        return topPublishersGraphData;
       
    }

    const GlobalSalesOptions = {
        width:"95%",
        height:"250px",
        title: "Global Game Sales in Millions 2013-2016 by Platform",
        colors:["#4E0D0D"],
        backgroundColor: "transparent",
    }

    const publisherOptions = {
        width:"95%",
        height:"350px",
        title: "Top 10 Publishers Sales Distribution by Consoles 2005-2016",
        isStacked: "true",
        colors:["#4e0d0d","#8f1f1f","#292626","#807979","#ab6320","#f08b2e"],
        backgroundColor: "transparent",
        
    }

        
    return (  
        <>
            <Chart
                chartType="ColumnChart"
                options = {GlobalSalesOptions}
                data={generateGlobalSalesData()}
                />

            <Chart
                chartType="ColumnChart"
                options = {publisherOptions}
                data = {generateTopPublisherData()}
                />
        </>

    );
}
 
export default AllGamesGraphs;