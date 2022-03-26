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
    <div style={{ margin: "auto", width: "85%", textAlign: "left"}}>

        {
        allTheTabs.map((item, index) => (
            <div className={`tab ${ tabStyle(index) }`} onClick={(e) => setActiveTab(index) }>
            { item.label }
            </div>
        ))
        }
    </div>
    )
}

export default Tabs;