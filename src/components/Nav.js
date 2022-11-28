import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillBagFill } from "react-icons/bs";

const Nav = () => {
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
                                    <span>4</span>
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