import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsFillBagFill } from "react-icons/bs";

const Nav = () => {
    const { totalQuantities } = useSelector(state => state.CartReducer);
    return (
        <React.Fragment>
            <div className='nav'>
                <div className='container'>
                    <div className='nav__container'>
                        <div className='nav__left'>
                            <Link to="/" exact>
                                <img src='/images/logo.webp' />
                            </Link>
                        </div>
                        <div className='nav__right'>
                            <Link to="/cart" exact>
                                <div className='basket'>
                                    <BsFillBagFill className='cart-icon' />
                                    <span>{totalQuantities}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Nav;