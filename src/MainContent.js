import React, {useState} from 'react';
import Number from "./Number.";
import Buttons from "./Buttons";

function MainContent() {
    const [state, setState] = useState(0)
    return (

        <div className="mainContent">
            <Number state={state}/>
            <Buttons state={state} setState={setState}/>
        </div>
    );
}

export default MainContent;