//
import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Results from './components/Results';

function App() {
  const tabArray = [
        { text: "Tab_1", blurb: "This is tab 1 content." },
        { text: "Tab_2", blurb: "This is tab 2 content." },
        { text: "Tab_3", blurb: "This is tab 3 content." },
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