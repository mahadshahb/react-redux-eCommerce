import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import currencyFormatter from 'currency-formatter';
import { BsDash, BsPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Details = () => {
    const [count, setCount] = useState(1);
    const { id } = useParams();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.ProductReducer);
    console.log(product);
    useEffect(() => {
        dispatch({
            type: "PRODUCT", id: id
        })
    }, [id]);
    return (
        <React.Fragment>
            <div className='container mt-100'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='details_images'>
                            <img src={`/images/${product.image}`} alt="image" />
                        </div>
                    </div>
                    <div className='col-6'>
                        <Link to="/" exact>
                            <p className='custom_back'>Back Home</p>
                        </Link>
                        <div className='details_name'>
                            {product.name}
                        </div>
                        <div className='details_price'>
                            <span className='details_actual'>
                                {currencyFormatter.format(product.price, {
                                    code: 'USD'
                                })}
                            </span>
                            <span className='details_discount'>
                                {currencyFormatter.format(product.discountPrice, {
                                    code: 'USD'
                                })}
                            </span>
                        </div>
                        <div className='details_info'>
                            <div className='details__incdec'>
                                <span className='dec' onClick={() => count > 1 ? setCount(count - 1) : setCount(0)}><BsDash /></span>
                                <span className='quantity'>{count}</span>
                                <span className='inc' onClick={() => setCount(count + 1)}><BsPlus /></span>
                            </div>
                            <div className='custom_btn'>
                                <button className='btn_default'>add cart</button>
                            </div>
                        </div>
                        <div className='details_para'>
                            <h3 className='new_h3'>Details</h3>
                            {product.desc}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Details;