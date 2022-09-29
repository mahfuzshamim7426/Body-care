import React from 'react';
import logo from '../../images/person.jpg'
import './Personal.css'

const Personal = (props) => {
    const { cartTime } = props;
    console.log('cartTime from Personal', cartTime)
    return (
        <div className='personal-cart-info'>
            <div className='person-info'>
                <img className="person-image" src={logo} alt="" />
                <h3>Rashed Khan</h3>
            </div>
            <div className='personal-information'>
                <div className="weigh">
                    <div>
                        <p><small className='measure-number'>75</small>  <small className='kg-yrs'>kg</small></p>
                    </div>
                    <div>
                        <p>Weight</p>
                    </div>
                </div>
                <div className="height">
                    <div>
                        <p><small className='measure-number'>6.5</small></p>
                    </div>
                    <div>
                        <p>Height</p>
                    </div>
                </div>
                <div className="age">
                    <div>
                        <p><small className='measure-number'>28</small>  <small className='kg-yrs'>yrs</small></p>
                    </div>
                    <div>
                        <p>Age</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Add A Break</h3>
                <div className='break-time-container'>
                    <p className='break-time'><small className='break-time-count'>10s</small> </p>
                    <p className='break-time'><small>20</small>s </p>
                    <p className='break-time'><small>30</small>s </p>
                    <p className='break-time'><small>40</small>s </p>
                </div>
            </div>
            <div>
                <h3>Exercise Details</h3>
                <div className='exercise-time-container'>
                    <p>Exercise time: {cartTime} seconds</p>
                </div>
            </div>
            <div>
                <div className='exercise-time-container'>
                    <p>Break time: { }seconds</p>
                </div>
            </div>
            <div >
                <button className="activity-completed-button">
                    <p className='activity-btn-txt'>Activity Completed</p>
                </button>
            </div>

        </div>

    );
};

export default Personal;