import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { name, time, img } = props.exercise;
    return (
        <div className='exercise'>
            <img className='exercise-img' src={img} alt="" />
            <div className="exercise-content">
                <p>Name: {name}</p>
                <p>Time required: {time}</p>
            </div>
            <button className='btn-exercise'>
                <p className='btn-text'>Add to list</p>
            </button>
        </div>
    );
};

export default Exercise;