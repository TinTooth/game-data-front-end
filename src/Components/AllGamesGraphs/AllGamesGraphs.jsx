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

    const GlobalSalesOptions = {
        width:"95%",
        height:"250px",
        title: "Global Sales in Millions since 2013",
        hAxis: {
            title: "Platform"
        },
        vAxis: {
            title: "Total Sales"
        },
        colors:["#4E0D0D"],
    }

        
    return (  
        <Chart
            chartType="ColumnChart"
            options = {GlobalSalesOptions}
            data={generateGlobalSalesData()}
        />

        
    );
}
 
export default AllGamesGraphs;