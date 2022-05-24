import React   from 'react';

const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow'>
<img src={`https://robohash.org/set=set3${props.id}?200*200`} alt='robots' />
<div>
    <h2>{props.name}</h2>
    <p>{props.email}</p>
</div>
        </div>
     )
}

export default Card

 