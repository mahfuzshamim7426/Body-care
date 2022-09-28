import React from 'react';
import './Information.css'
const Information = () => {
    return (
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
    );
};

export default Information;