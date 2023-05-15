import React, { useState, useEffect } from 'react';
import HighRes from './HighRes.jpg';
import './App.css';

function App() {
  const [loadTime, setLoadTime] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    window.addEventListener('load', () => {
      const endTime = performance.now();
      setLoadTime(endTime - startTime);
    });

    setMemoryUsage((performance.memory.usedJSHeapSize) / (1024 * 1024));
  }, []);

  const images = Array.from({ length: 2000 }, (_, i) => (
    <img src={require('./HighRes.jpg')} alt="High Resolution" />
  ));

  return (
    <body>
       <header>
          <ul class="border-bottom">
            <li>
              <h1>Benchmark Panel</h1>
            </li>
            <li>
              <a href="https://localhost:7010">Server-side Tests</a>
            </li>
            <li>
              <a href="https://localhost:7010/Home/Asp">ASP.NET</a>
            </li>
            <li>
              <a href="http://localhost:4200">Angular</a>
            </li>
            <li>
              <a href="http://localhost:3001">React</a>
            </li>
          </ul>
    </header>
    <div class="load-time">
      Load time: {loadTime} ms
      Memory usage: {memoryUsage} MB
    </div>
    <div class="container">
    <div className="grid-container">{images}</div>
    </div>
    </body>
  );
}

export default App;
