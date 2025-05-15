import { FaStar, FaRegStar } from "react-icons/fa";
import "./ProductCard.css";
// import { useDispatch } from "react-redux";
import { useState } from "react";

const EditProductForm = ({product,onSave,onChange,onCancel}) => {
  // const dispatch = useDispatch();
  const rating = product.rating; // out of 5  

  const [form, setForm] = useState({
          title: product.title,
          description: product.description,
          rating: product.rating,
          thumbnail: product.thumbnail,
          category: product.category,
          brand: product.brand,
          price: product.price,
          id: product.id
      },[]);
    console.log("form",form);

  const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Merge form values with original product (to keep unchanged fields)
    const updatedProduct = {
      ...product,
      ...form,
    };

    // Call onSave prop with updated product
    if (typeof onSave === "function") {
      onSave(updatedProduct);
      // console.log("updatedProduct",updatedProduct);
    }

    // Optionally reset form if needed
    setForm({
      title: "",
      description: "",
      rating: "",
      thumbnail: "",
      category: "",
      brand: "",
      price: ""
    });
  };

  return (
    <div>
      <>
          {/* Product Image */}
          <form className="edit-product-form" onSubmit={handleSubmit}>
          <div className="flex mt-1">
            <img
              src={form.thumbnail}
              alt={product.title}
              className="w-32 h-32 object-contain"
            />
            <input 
              type="url" 
              name="thumbnail"
              placeholder="Thumbnail URL" 
              value={form.thumbnail}
              onChange={handleChange}/>
          </div>

          {/* Product Details */}
          <div className="flex-1 product-details">
            <h2 className="text-xl font-semibold product-title">
              <input 
                type="text"
                name="title"
                placeholder="Product Title"
                value={form.title}
                onChange={handleChange}/>
            </h2>

            <p className="text-gray-700 edit-product-price">
              {/* <div>Rs.</div> */}
              <input 
                type="number" 
                name="price"
                placeholder="Product Price"
                value={form.price}
                onChange={handleChange}/>
            </p>

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
            <textarea rows={5} cols={40} placeholder="Product Description" value={form.description} name="description" onChange={handleChange}/>
          </div>

          {/* Actions */}
          <div className="flex-column items-center product-actions">
            {/* <FiEdit className="text-orange-500 text-xl cursor-pointer" onClick={() => setIsEditing(true)} /> */}
            {/* <FiTrash2 className="text-red-500 text-xl" onClick={() => dispatch(deleteProductsAsync(product))} /> */}
            <button type="submit" className="btn btn-primary">Update Product</button>
            <button type="button" className="btn btn-tertiary" onClick={onCancel}>Cancel</button>
          </div>
          </form>
        </>
    </div>
  );
};

export default EditProductForm;



