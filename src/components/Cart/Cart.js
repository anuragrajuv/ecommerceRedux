import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, cartSelector, cartTotalSelector, clearCart, decreaseQuantity, removeFromCart, setCart } from "../../redux/cartSlice";
import { FiTrash2 } from "react-icons/fi";
import "./Cart.css"
import { FaMinus, FaPlus } from "react-icons/fa";

const Cart = () =>{
    const cartItems = useSelector(cartSelector);
    const cartTotal = useSelector(cartTotalSelector);
    const dispatch = useDispatch(); 

    React.useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    React.useEffect(() => {
        const storedCart = localStorage.getItem("cartItems");
        if (storedCart) {
            const items = JSON.parse(storedCart);
            dispatch(setCart(items));
        }
    }, [dispatch]);

    if (cartItems.length === 0) {
        return (
            <>
                <h2>Your Cart Is Empty!!</h2>
            </>
        );
    }else{
        return (
            <main>
                <div className="cart-title">
                <h1>Cart</h1>
                <button className="btn btn-primary" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
                </div>
                <ul>
                    {cartItems.map(product => (
                            <div className="cart-product-card">
                                <div className="product-card bg-gray-200 p-4 rounded-md max-w-4xl mx-auto flex gap-6 items-center">
                                      {/* Product Image */}
                                      <div className="flex-shrink-0">
                                        <img
                                          src={product.thumbnail}
                                          alt={product.title}
                                          className="w-32 h-32 object-contain"
                                        />
                                      </div>
                                
                                      {/* Product Details */}
                                      <div className="flex-1 product-details">
                                        <h2 className="text-xl font-semibold product-title">{product.title}</h2>
                                        <p className="text-gray-700 product-price"><b>Rs.{product.price}</b></p>
                                      </div>
                                      {/* Quantity */}
                                        <div className="quantity">
                                            Qty:
                                            <FaMinus onClick={()=>dispatch(decreaseQuantity(product))}/>
                                            <b>{product.quantity}</b>
                                            <FaPlus onClick={()=>dispatch(addToCart(product))}/>

                                        </div>

                                    {/* Item Total */}
                                    <div className="item-total">
                                        Item Total: <b>Rs.{(product.quantity*product.price).toFixed(2)}</b>
                                    </div>
                                      {/* Actions */}
                                      <div className="flex items-center gap-3 product-actions">
                                        <FiTrash2 className="text-red-500 text-xl cursor-pointer" onClick={()=>dispatch(removeFromCart(product))} />
                                      </div>
                                    </div>
                            </div>
                    ))}
                </ul>
                <div className="cart-total">
                    <h4>Total:</h4>
                    <h4>Rs.{cartTotal}</h4>
                </div>
                {/* <button className="btn btn-primary">Proceed To Checkout</button> */}
            </main>
        )
    }

}

export default Cart;