import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Progress(props)
{
    return(
        <div style={{  alignItems: 'center' }} id="r1">
            <h3 style={{textAlign:"center"}}>{props.name}</h3>
      <CircularProgressbar value={props.per} text={`${props.per}%`} />
      {/* <h3>{props.message}</h3> */}
    </div>
    );
}
export default Progress;