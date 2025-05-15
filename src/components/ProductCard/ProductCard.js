import { FaStar, FaRegStar } from "react-icons/fa";
import { FiEdit,FiTrash2 } from "react-icons/fi";
import "./ProductCard.css";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { deleteProductsAsync, editProductAsync } from "../../redux/productSlice";
import { useState } from "react";
import EditProductForm from "./EditProductForm";

const ProductCard = ({product}) => {
  // console.log(product.title);
  const dispatch = useDispatch();
  const rating = product.rating; // out of 5
  const [isEditing,setIsEditing] = useState(false);


  return (
    <div className="product-card bg-gray-200 p-4 rounded-md max-w-4xl mx-auto flex gap-6 items-center">
      {isEditing ? (
        // Edit Form
        <EditProductForm
          product={product}
          onCancel={() => setIsEditing(false)}
          onSave={(updatedProduct) => {
            dispatch(editProductAsync(updatedProduct));
            setIsEditing(false);
          }}
        />
      ) : (
        <>
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
            <p className="text-gray-700 product-price">Rs {product.price}</p>
            <div className="flex mt-1">
              {[...Array(5)].map((_, index) =>
                index < rating ? (
                  <FaStar key={index} className="text-yellow-400" />
                ) : (
                  <FaRegStar key={index} className="text-gray-400" />
                )
              )}
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 text-sm text-gray-800 leading-relaxed product-description">
            {product.description}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 product-actions">
            <button className="product-edit-button" onClick={() => setIsEditing(true)}><FiEdit className="text-red-500 text-xl"/></button>
            <button className="product-edit-button" onClick={() => dispatch(deleteProductsAsync(product))}><FiTrash2 className="text-red-500 text-xl"/></button>
            <button type="button" className="btn btn-primary" onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
