import React, { useEffect,useState } from "react";
import {Chart} from "react-google-charts";
import "./GameGraph.css";

const GameGraph = ({game,data}) => {
    const [gameArray, setGameArray] = useState([]);

    useEffect(()=> {
        getGameData();
    },[game])
    
    const getGameData = () => {
        let gameData = data.filter(g => g.name === game.name);
        setGameArray(gameData);
    }

    const getPlatforms = () => {
        let platforms = "";
        gameArray.forEach(game => platforms += ` ${game.platform} `)
        return platforms;
    }

    const getSalesPlatformData = () => {
        let resultArrays = gameArray.map(game => {
            return [game.platform,game.globalsales]
        })
        let data = [
            ['Platform','Sales'],
            ...resultArrays
        ]
        return data;
    }

    const getSalesRegionData = () => {
        let nasales = 0;
        let eusales = 0;
        let jsales = 0;
        let osales = 0;

        gameArray.forEach(game => {
            nasales+=game.northamericasales; 
            eusales+=game.europesales; 
            jsales+=game.japansales;
            osales+=game.othersales;    
        })



        let data = [
            ['Region','Sales'],
            ['NorthAmerica Sales',nasales],
            ['Europe Sales',eusales],
            ['Japan Sales',jsales],
            ['Other Sales',osales],
        ]

        return data;
    }



    const platformOptions = {
    
        title: "Sales By Platform (millions sold)",
        fontsize: "25px"
    }


    return ( 
        <>
        <h2 className="detail">{game.name}</h2>
        <div className="game-container">
            <div className="game-details">
                <p className="detail">Platforms : {getPlatforms()}</p>
                <p className="detail">Genre : {game.genre}</p>
                <p className="detail">Publisher : {game.publisher}</p>
            </div>
            <Chart 
                chartType="PieChart"
                data = {getSalesPlatformData()}
                options ={platformOptions}
                />
            <Chart
                chartType="PieChart"
                data = {getSalesRegionData()}
                options = {{title:"Sales by Region (millions sold)"}}
                />

        </div>
        </>
     );
}
 
export default GameGraph;