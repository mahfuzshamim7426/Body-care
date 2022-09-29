import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    const { handleClick, exercise } = props;
    const { name, time, img, age } = exercise;

    return (
        <div className='exercise'>
            <img className='exercise-img' src={img} alt="" />
            <div className="exercise-content">
                <p>Name: {name}</p>
                <p>For Age: {age}</p>
                <p>Time required: {time}s</p>
            </div>
            <button onClick={() => handleClick(time)} className='btn-exercise'>
                <p className='btn-text'>Add to list</p>
            </button>
        </div>
    );
};

export default Exercise;