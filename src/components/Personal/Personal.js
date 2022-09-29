import React, { useState } from 'react';
import logo from '../../images/person.jpg'
import './Personal.css'
import { toast } from 'react-toastify';

const Personal = (props) => {
    const { cartTime } = props;
    const [brekTime, setBreakTime] = useState(0)

    const handleBreakTime = (time) => {
        setBreakTime(time);
    };
    const notify = () => toast("Mission Completed");

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
                    <button className='break-time' onClick={() => { handleBreakTime(10) }}>10s</button>
                    <button className='break-time' onClick={() => { handleBreakTime(20) }}>20s</button>
                    <button className='break-time' onClick={() => { handleBreakTime(30) }}>30s</button>
                    <button className='break-time' onClick={() => { handleBreakTime(40) }}>40s</button>

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
                    <p>Break time: {brekTime}seconds</p>
                </div>
            </div>
            <div >
                <button className="activity-completed-button"
                    onClick={notify}
                >
                    <p className='activity-btn-txt'>Activity Completed</p>
                </button>
            </div>

        </div>

    );
};

export default Personal;