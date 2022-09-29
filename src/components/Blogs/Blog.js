import React from 'react';
import './Blog.css'

const Blog = () => {
    return (

        <div className='blogs'>
            <h1>
                FAQ and get quick Answers:
            </h1>
            <div>
                <h2>(1)How does React work?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                <h2>(2)What is the difference between props and state?</h2>
                <p>Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
                <h2>(3)What's the other purpose of useeffect except data load in react?</h2>
                <p>The motivation behind the introduction of useEffect Hook is to eliminate the side-effects of using class-based components. For example, tasks like updating the DOM, fetching data from API end-points, setting up subscriptions or timers, etc can be lead to unwarranted side-effectsA functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.</p>
            </div>
        </div>
    );
};

export default Blog;