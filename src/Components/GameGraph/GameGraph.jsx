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
        return platforms
    }

    const getSalesPlatformData = () => {
        let resultArrays = gameArray.map(game => {
            return [game.platform,game.globalsales]
        })
        let data = [
            ['Platform','Sales'],
            ...resultArrays
        ]
        return data
    }

    const platformOptions = {
    
        title: "Sales By Platform"
    }


    return ( 
        <div className="game-container">
            <div className="game-details">
                <p className="detail">Title : {game.name}</p>
                <p className="detail">Platforms : {getPlatforms()}</p>
                <p className="detail">Genre : {game.genre}</p>
                <p className="detail">Publisher : {game.publisher}</p>
            </div>
            <Chart 
                chartType="PieChart"
                data = {getSalesPlatformData()}
                options ={platformOptions}
            />

        </div>
     );
}
 
export default GameGraph;