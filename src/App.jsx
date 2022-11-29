import axios from 'axios';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import { useState, useEffect } from 'react';
import SearchContainer from './Components/SearchContainer/SearchContainer';
import GraphContainer from './Components/GraphContainer/GraphContainer';

function App() {
  const [data, setData] = useState();
  const [game, setGame] = useState(null);

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
     <GraphContainer game = {game} data = {data}/>
     <SearchContainer data={data} setGame ={setGame}/>
     <Footer/>
    </div>
  );
}

export default App;
