//
import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Results from './components/Results';

function App() {
  const tabArray = [
        { text: "Apple", blurb: "This is Apple content." },
        { text: "Orange", blurb: "This is Orange content." },
        { text: "Banana", blurb: "This is Banana content." },
  ];

// SEEK HELP FOR THE NEXT TWO LINES. EXPLAIN.
const [ allTheTabs, setAllTheTabs ] = useState(tabArray);
const [ currentTab, setCurrentTab ] = useState(0); //start on first tab thus 0

    return (
        <div className="tabs_app">
            <Tabs 
            allTheTabs= { allTheTabs }
            currentTab={ currentTab }
            setCurrentTab={ setCurrentTab }
            />
            <Results allTheTabs = { allTheTabs } currentTab = { currentTab }/>
        </div>
    );
};

export default App;