import React, { useState, useEffect } from 'react';
import Video from './Video';
import Style from './style.module.css'

function App() {

  const [content, setContent] = useState([]);

  //Runs the function
  useEffect(() => {
    fetchData();
}, []);

  //Fetch data 
  const fetchData = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/mohammedhammoud/cf7aca4c87462cd061d4f2b1184392a8/raw/ea14389e293b478bdbace627d776ba6f7d735f14/teliatestdata.json')
      const data = await response.json();
      console.log(data)
      setContent(data)
    } catch (error) {
      console.log(error)
    }
  }

  //Rendering the data 
  return (
    <div className={Style.app}>
     {
       content && content.map( info => {
         return <Video key={info.id} info={info} />
       })
     }
    </div>
  );
}

export default App;
