import React from 'react';

const Tabs = (props) => {
    const { allTheTabs, currentTab, setCurrentTab } = props;

const tabStyle = (index) => {
    if ( index === currentTab ) {
        return "activeTab";
        } else {
        return "inactiveTab";
        }
    }

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