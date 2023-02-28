import React, { useEffect, useState } from 'react'
import BlogResultsPopular from './components/BlogResultsPopular'
import BlogResultsDate from './components/BlogResultsDate'
import FilterButton from './components/FilterButton'
import Navbar from './components/Navbar';
import Body from './components/Body';
import './App.css';

function App(props) {

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    console.log("The is clicked inside of the useEffect", isClicked)
  },[isClicked])


  return (
    <div className="App">
      <Navbar />
      <Body />
      <div>
          <FilterButton isClicked={isClicked} setIsClicked={setIsClicked}/>
        </div>
        { isClicked ? <BlogResultsPopular /> : <BlogResultsDate />}
    </div>
  );
}

export default App;
