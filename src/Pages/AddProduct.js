import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAsync } from "../redux/productSlice";
import "./AddProduct.css";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        description: "",
        rating: "",
        thumbnail: "",
        category: "",
        brand: "",
        price: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addProductAsync(form));
        navigate("/");
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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                required
            />
            <div className="star-rating">
                Rating:
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        style={{
                            cursor: "pointer",
                            color: star <= Number(form.rating) ? "#ffc107" : "#e4e5e9",
                            fontSize: "1.5rem"
                        }}
                        onClick={() =>
                            setForm({ ...form, rating: String(star) })
                        }
                        data-testid={`star-${star}`}
                        role="button"
                        aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                                setForm({ ...form, rating: String(star) });
                            }
                        }}
                    >
                        ★
                    </span>
                ))}
            </div>
            <input
                type="hidden"
                name="rating"
                value={form.rating}
                readOnly
            />
            <input
                name="thumbnail"
                type="url"
                placeholder="Thumbnail URL"
                value={form.thumbnail}
                onChange={handleChange}
                required
            />
            <input
                name="category"
                placeholder="Category"
                value={form.category}
                onChange={handleChange}
                required
            />
            <input
                name="brand"
                type="text"
                placeholder="Brand"
                value={form.brand}
                onChange={handleChange}
                required
            />
            <input
                name="price"
                placeholder="Price"
                type="number"
                value={form.price}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;