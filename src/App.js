import React, {useState, useEffect} from 'react';
import AddCounter from "./components/AddCounter";
import CounterList from "./components/CounterList"
import Header from "./components/Header"

function App() {
  const uuidv4 = require('uuid/v4');

  //set of counters to show on the webpage
  const [counters, setCounters] =useState([]);
  var counts = localStorage.getItem("counters");
  useEffect(() => {
    if(counts !== null) {
      setCounters(JSON.parse(counts))
    }
  }, [counts]);


  const addCounter = (event, date) => {
    var currentDate = new Date()
    var counterDate = new Date(date)
    var timeLeft = Math.ceil((counterDate.getTime() - currentDate.getTime()) / (1000*3600*24));
    
    var updated = counters.concat({key:uuidv4(), Event: event, Date:date, Left:timeLeft });
    setCounters(updated, localStorage.setItem("counters", JSON.stringify(updated)))
  }
  
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <AddCounter addCounter={addCounter}/>
        
        <CounterList counters={counters}/>
      </div>
    </div>
  );
}

export default App;
