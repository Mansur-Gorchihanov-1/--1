import React, {useState} from 'react';

function Number(props) {

    return (
        <div className="number">
          <span>{props.state}</span>
        </div>
    );
}

export default Number;