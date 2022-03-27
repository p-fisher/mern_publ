import React from 'react';

const Tabs = (props) => {
    const { allTheTabs, currentTab, setCurrentTab } = props;

// const tabStyle = (index) => {
//     if ( index === currentTab ) {
//         return "activeTab";
//         } else {
//         return "inactiveTab";
//         }
//     }


const tabStyle = (index) => {
    if ( index === currentTab && index === 0 ) {
            return "activeApple";
        } else if (index === currentTab && index === 1 ) {
            return "activeOrange"
        } else if (index === currentTab && index === 2 ) {
            return "activeBanana"
        } else {
            return "inactiveTab";
        }
    }


    // it could be active and index 0 (tabStyle activeApple)
       // index === currentTab && index === 0
    // it could be active and index 1 (tabStyle activeOrange)
        // index === currentTab && index === 1
    // it could be active and index 2 (tabStyle activeBanana)
        // index === currentTab && index === 2
    //it could be inactive (tabStyle inactiveTab)
    

const setActiveTab = (index) => {
    setCurrentTab(index);
}
return (
    // <div style={{ margin: "30px auto 0 auto", width: "75%", textAlign: "left", backgroundColor: "rgb(206,242,236)", border: "2px solid black"}}>
    <div className="tab_container">
        {
        allTheTabs.map((item, index) => (
            <div key={index} className={`tab ${ tabStyle(index) }`} onClick={(e) => setActiveTab(index) }>
            { item.text }
            </div>
        ))
        }
    </div>
    )
}

export default Tabs;