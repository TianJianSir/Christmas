import React from 'react';
import notFound from '../../images/4.jpg';
import { Link } from 'react-router-dom';
import './style.scss';

const NotFound = () => {
    return (
        <div className='not_found'>
            <div className='img_container'>
                <img src={notFound}/>
            </div>

            <p>很抱歉，页面丢失了</p>

            <div className='btn_container'>
                <Link to='/'>
                    <button>回首页</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
