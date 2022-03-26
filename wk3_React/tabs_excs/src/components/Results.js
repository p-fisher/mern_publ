import React from 'react';

const Results = (props) => {
    const { allTheTabs, currentTab } = props;

    return (
        <div className="tabs_blurb">
            { allTheTabs[currentTab].blurb }
        </div>
    )
}

export default Results;