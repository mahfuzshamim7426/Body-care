import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { name, time, img } = props.exercise;
    return (
        <div className='exercise'>
            <img className='exercise-img' src={img} alt="" />
            <p>Name: {name}</p>
            <p>Time required: {time}</p>
            <button className='btn-exercise'>
                <p >Add to list</p>
            </button>
        </div>
    );
};

export default Exercise;