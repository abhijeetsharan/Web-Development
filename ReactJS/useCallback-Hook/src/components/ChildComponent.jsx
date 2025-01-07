import React from 'react'

const ChildComponent = React.memo(
    (props) => {
        console.log('ChildComponent rendered');
        
      return (
        <div>
          <button onClick={props.increment}>
            {props.buttonName}
          </button>
        </div>
      )
    }
);

export default ChildComponent
