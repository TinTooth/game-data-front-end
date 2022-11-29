import axios from 'axios';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { useState, useEffect,useRef } from 'react';
import SearchContainer from './Components/SearchContainer/SearchContainer';
import GraphContainer from './Components/GraphContainer/GraphContainer';

function App() {
  const [data, setData] = useState();
  const [game, setGame] = useState(null);
  const graphRef = useRef();

  useEffect (()=> {
    getData();
  },[])

  async function getData(){
    const response = await axios.get("http://localhost:8080/all/");
    setData(response.data);
  }

  return (
    <div className="App">
     <Header/>
     <GraphContainer game = {game} data = {data} graphRef = {graphRef}/>
     <SearchContainer data={data} setGame ={setGame} graphRef = {graphRef}/>
    </div>
  );
}

export default App;
