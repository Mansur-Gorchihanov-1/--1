import React from 'react';

function Buttons(props) {
    return (
        <div className="buttons">
           <div className="button" onClick={()=>props.setState(props.state+1)}>Увеличить</div>
            <div className="button2" onClick={()=>props.setState(props.state-1)}>Уменьшить</div>
            <div className="button3" onClick={()=>props.setState(0)}>Сбросить</div>
        </div>
    );
}

export default Buttons;