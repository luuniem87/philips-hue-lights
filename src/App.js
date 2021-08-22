import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

const App = (props) => {
  const [lightsData, setLightsData] = useState([]);

  const IP = process.env.REACT_APP_IP;
  const USERNAME = process.env.REACT_APP_USERNAME;

  const fetchMovieHandler = useCallback(async () => {
    const response = await fetch(`http://${IP}/api/${USERNAME}/lights/`);
    const data = await response.json();
    setLightsData([data]);
    console.log(data);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
    console.log("fetched item");
  }, [fetchMovieHandler]);

  return (
    <div className="App">
      <h1>Philips Hue Lights</h1>
      {lightsData.map((light) => (
        <ul>
          <li>
            {light[4].name} is {light[4].state.bri}
          </li>
          <li>{light[5].name}</li>
          <li>{light[8].name}</li>
        </ul>
      ))}
    </div>
  );
};

export default App;
