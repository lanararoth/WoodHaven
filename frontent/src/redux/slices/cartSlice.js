import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {

    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0


}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;

            const currentCart = current(state).cartItems

            const existingItem = currentCart.find(
                (item) => item.id === newItem.id
            );


            state.totalQuantity++

            // console.log(existingItem, newItem);

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }

            else {
                const newQuantityUpdatedCart = currentCart.map((el) => {
                    if (existingItem.id === el.id)
                        return (
                            {
                                ...el,
                                quantity: el.quantity + 1,
                                totalPrice : Number(el.totalPrice) + Number(newItem.price)
                            }
                        )
                    else return el
                })

                state.cartItems = newQuantityUpdatedCart
                // existingItem.quantity++
                // existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }


            const updatedCart = current(state).cartItems


            state.totalAmount = updatedCart.reduce((total, item) => {
                // console.log("ta", item);

                return total + (Number(item.price) * Number(item.quantity))
            }, 0
            );

            // console.log(state.totalAmount);
            console.log("state", current(state))


        },
        deleteItem: (state, action) => {
            const id = action.payload;
            const existingItemIndex = state.cartItems.findIndex(item => item.id === id);
        
            if (existingItemIndex !== -1) {
                const existingItem = state.cartItems[existingItemIndex];
                const updatedCartItems = [...state.cartItems.slice(0, existingItemIndex), ...state.cartItems.slice(existingItemIndex + 1)];
                
                return {
                    ...state,
                    cartItems: updatedCartItems,
                    totalQuantity: state.totalQuantity - existingItem.quantity,
                    totalAmount: updatedCartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)
                };
            }
        
            return state;
        }

    },

});


export const cartActions = cartSlice.actions;

export default cartSlice.reducer;