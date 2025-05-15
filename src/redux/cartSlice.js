import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    cart: [],
    total: 0
};

const calculateTotal = (cart) => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
};

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
                toast.success('Quantity Increased!');
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
                toast.success('Added to cart!');
            }
            state.total = calculateTotal(state.cart);
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
            localStorage.setItem("cartTotal", JSON.stringify(state.total));
        },
        decreaseQuantity: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
                toast.success('Quantity Decreased!');
            } else {
                state.cart = state.cart.filter(item => item.id !== action.payload.id);
                toast.warning('Removed from cart!');
            }
            state.total = calculateTotal(state.cart);
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
            localStorage.setItem("cartTotal", JSON.stringify(state.total));
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
            toast.warning('Removed from cart!');
            state.total = calculateTotal(state.cart);
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
            localStorage.setItem("cartTotal", JSON.stringify(state.total));
        },
        clearCart: () => {
            localStorage.removeItem("cartItems");
            localStorage.removeItem("cartTotal");
            toast.success('Cart Is Cleared!');
            return initialState;
        },
        setCart: (state, action) => {
            state.cart = [...action.payload];
            state.total = calculateTotal(state.cart);
            localStorage.setItem("cartItems", JSON.stringify(state.cart));
            localStorage.setItem("cartTotal", JSON.stringify(state.total));
        }
    }
});

export const { addToCart, removeFromCart, clearCart, setCart, decreaseQuantity } = CartSlice.actions;
const cartReducer = CartSlice.reducer;
export const cartSelector = state => state.cart.cart;
export const cartTotalSelector = state => state.cart.total;

export default cartReducer;
