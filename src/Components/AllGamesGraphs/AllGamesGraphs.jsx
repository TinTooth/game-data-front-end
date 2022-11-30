import React from "react";
import {Chart} from "react-google-charts";

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

        const allGamesGraphData = [
            ["Platform", "Sales"],
            ...platformArrays
        ]
        return allGamesGraphData;

    }

    const generateTopPublisherData = () => {
        let filteredGames = data.filter(game => game.year >= 2013);
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
            // let pcsum = 0;
            publishergames.map(game=> 
                {switch(game.platform) {
                    case "PS4": ps4sum += game.globalsales;
                    case "XOne": xonesum += game.globalsales;
                    case "WiiU": wiiusum += game.globalsales;
                    case "PS3": ps3sum += game.globalsales;
                    case "X360": x360sum += game.globalsales;
                    case "Wii": wiisum += game.globalsales;
                    // case "PC": pcsum += game.globalsales;
                }}
            )
            return [publisher,wiisum,wiisum,ps3sum,ps4sum,x360sum,xonesum]
        })
        console.log(publisherArrays);

        let sortedPublishers = publisherArrays.sort((p1,p2) =>
        ((p1[1]+p1[2]+p1[3]+p1[4]+p1[5]+p1[6])<(p2[1]+p2[2]+p2[3]+p2[4]+p2[5]+p2[6])) ? 1 :
        ((p1[1]+p1[2]+p1[3]+p1[4]+p1[5]+p1[6])>(p2[1]+p2[2]+p2[3]+p2[4]+p2[5]+p2[6])) ? -1 : 0);
        
        let topPublisherArrays = []
        for (let i = 0; i <10; i++) {
            topPublisherArrays.push(sortedPublishers[i])
        }


        const topPublishersGraphData = [
            ['Publisher','Wii','WiiU','PS3','PS4','X360','XOne'],
            ...topPublisherArrays
        ]
        console.log(topPublishersGraphData);
        return topPublishersGraphData;
       
    }

    const GlobalSalesOptions = {
        width:"95%",
        height:"250px",
        title: "Global Sales in Millions 2013-2016",
        hAxis: {
            title: "Platform"
        },
        colors:["#4E0D0D"],
    }

    const publisherOptions = {
        width:"95%",
        height:"350px",
        title: "Top Publishers Sales Distribution by Platform 2013-2016",
        isStacked: "percent",
        colors:["#4e0d0d","#8f1f1f","#292626","#807979","#ab6320","#f08b2e"],
    }

        
    return (  
        <div className="chart-container">
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
        </div>

    );
}
 
export default AllGamesGraphs;