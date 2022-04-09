import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [spaceData, setSpaceData] = useState([]);
  useEffect(() => {
    try {
      fetch("https://www.spaceflightnewsapi.net/api/v2/articles")
        .then((response) => response.json())
        .then((data) => setSpaceData(data));
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Space News</h1>
      </header>
      <div className="Space-News">
        {spaceData.map((val, index) => {
          return (
            <>
              <div
                key={index}
                onClick={() => {
                  window.location.href = val.url;
                }}
              >
                <h3>{val.title}</h3>
                <img src={val.imageUrl}></img>
                <p>{val.summary}</p>
                <h4>{val.publishedAt}</h4>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
