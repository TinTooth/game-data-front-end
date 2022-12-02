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

    const getPlatformsString = () => {
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

    const  getOptions = (title) => {
        return {
            title: title,
            backgroundColor: "transparent",
            colors:["#4e0d0d","#8f1f1f","#292626","#807979","#ab6320","#f08b2e"],
            fontSize: 15,
            height: "100%",
        }
    }


    return ( 
        <>
        <div className="title1 zen">{game.name}</div>
        <div className="game-container">
                <div className="game-detail">
                <p className="detail">Platforms : {getPlatformsString()}</p>
                <p className="detail">Genre : {game.genre}</p>
                <p className="detail">Publisher : {game.publisher}</p>
                <p className="detail">Total Sales : {game.globalsales} mil</p>
                </div>
            <Chart 
                chartType="PieChart"
                data = {getSalesPlatformData()}
                options ={getOptions("Sales by Platform (millions sold)")}
                />
            <Chart
                chartType="PieChart"
                data = {getSalesRegionData()}
                options = {getOptions("Sales by Region (millions sold)")}
                />
        </div>
        </>
     );
}
 
export default GameGraph;