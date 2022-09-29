import React, { useEffect, useState } from 'react';
import logo from '../../images/logo.png';
import Blog from '../Blogs/Blog';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import Personal from '../Personal/Personal';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);
    const [cartTime, setCartTime] = useState(0)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data));
    }, [])

    const handleClick = (time) => {
        const newTotalTime = cartTime + time;
        setCartTime(newTotalTime);
    };

    return (
        <div className="App-body">
            <div className='exercise-body-container'>
                <Header></Header>
                <h3>Select today&apos;s exercise</h3>

                <div className="exercise-container">
                    {
                        exercises.map(exercise =>
                            <Exercise
                                key={exercise.id}
                                exercise={exercise}
                                handleClick={handleClick}
                            ></Exercise>)
                    }
                </div>
                <Blog></Blog>

            </div>
            <div>
                <Personal
                    cartTime={cartTime}
                />
            </div>
        </div>
    );
};

export default Exercises;