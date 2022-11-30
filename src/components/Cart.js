import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import currencyFormatter from 'currency-formatter';
import { BsDash, BsPlus, BsReverseBackspaceReverse } from "react-icons/bs";

const Cart = () => {
  const { products, totalQuantities, totalPrice } = useSelector(state => state.CartReducer);
  const dispatch = useDispatch();
  // console.log(products);
  return (
    <React.Fragment>
      <div className='cart'>
        <div className='container'>
          <h3>Your Cart</h3>
          {
            products.length > 0 ? <>
              <div className='row'>
                <div className='col-9'>
                  <div className='cart__heading'>
                    <div className='row'>
                      <div className='col-2'>Picture</div>
                      <div className='col-2'>Name</div>
                      <div className='col-2'>Price</div>
                      <div className='col-2'>Inc/Dec</div>
                      <div className='col-2'>Total Price</div>
                      <div className='col-2'>Remove</div>
                    </div>
                  </div>
                  {
                    products.map((pro) => {
                      return (
                        <div className='row new_vertical' key={pro.id}>
                          <div className='col-2'>
                            <div className='cart__image'>
                              <img src={`/images/${pro.image}`} alt="image" />
                            </div>
                          </div>
                          <div className='col-2'>
                            <div className='cart__name'>
                              {pro.name}
                            </div>
                          </div>
                          <div className='col-2'>
                            <div className='cart__price'>
                              {currencyFormatter.format(pro.discountPrice, {
                                code: "USD"
                              })}
                            </div>
                          </div>
                          <div className='col-2'>
                            <div className='details_info'>
                              <div className='details__incdec'>
                                <span className='dec' onClick={() => dispatch({
                                  type: "DEC", payload: pro.id
                                })}><BsDash /></span>
                                <span className='quantity'>{pro.quantity}</span>
                                <span className='inc' onClick={() => dispatch({
                                  type: "INC", payload:
                                    pro.id
                                })}><BsPlus /></span>
                              </div>
                            </div>
                          </div>
                          <div className='col-2'>
                            <div className='cart__total'>
                              {currencyFormatter.format(pro.discountPrice * pro.quantity, {
                                code: "USD"
                              })}
                            </div>
                          </div>
                          <div className='col-2'>
                            <div className='cart__remove' onClick={() => dispatch({
                              type: 'REMOVE', payload: pro.id
                            })}>
                              <BsReverseBackspaceReverse />
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
                <div className='col-3'>
                  <div className='summary'>
                    <div className='summary__heading'>
                      Summary
                    </div>
                    <div className='summary__details'>
                      <div className='row mb-100'>
                        <div className='col-6'>
                          Total Items:
                        </div>
                        <div className='col-6'>
                          <div>{totalQuantities}</div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-6'>
                          Total Price:
                        </div>
                        <div className='col-6'>
                          <div>{currencyFormatter.format(totalPrice, {
                            code: "USD"
                          })}</div>
                        </div>
                      </div>
                      <button type='button' className='checkout'>Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </> : "Your cart is empty"
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Cart;