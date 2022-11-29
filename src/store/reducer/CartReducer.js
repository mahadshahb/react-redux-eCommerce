const initialState = {
    produts: [],
    totalPrice: 0,
    totalQuantities: 0,
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // console.log(action.payload.product.id);
            const { product, quantity } = action.payload;
            // console.log(product.id, quantity);
            const check = state.produts.find(pr => pr.id === product.id);
            if (check) {
                return state;
            }
            else {
                const Tprice = state.totalPrice + product.discountPrice * quantity;
                // console.log(Tprice);
                const Tquantities = state.totalQuantities + quantity;
                product.quantity = quantity;
                return {
                    ...state, produts: [...state.produts, product], totalPrice: Tprice,
                    totalQuantities: Tquantities
                }
            }
        default: return state
    }
}
export default CartReducer;