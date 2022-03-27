import React from 'react';
// import Tabs from './components/Tabs';

const Results = (props) => {
    const { allTheTabs, currentTab, index } = props;


    const resultsBgnd = (index) => {
        if ( currentTab === 0 ) {
                return "applesBgnd";
            } else if (currentTab === 1 ) {
                return "orangesBgnd"
            } else if (currentTab === 2 ) {
                return "bananasBgnd"
            } else {
                return "noBgnd";
            }
        }
    

    return (
        <div className={`tabs_blurb ${ resultsBgnd(index)}`}>
            <h2 style={{textShadow: "2px 2px 3px white"}}>{ allTheTabs[currentTab].blurb }</h2>
        </div>
    )
}

export default Results;