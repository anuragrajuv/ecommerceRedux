import { useEffect, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync, productSelector, sortByPrice } from "../../redux/productSlice";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import "./ProductList.css"


const ProductList = ()=>{
    const dispatch = useDispatch();
    const products = useSelector(productSelector).products;
    const [sort,setSort] = useState("");
    const [sorted,setSorted] = useState(false);



    const handleSort = () => {
        if(sort===""){
            dispatch(sortByPrice("asc"));
            setSort("dsc");
            setSorted(true);
            return
        }
        if (sort === "asc") {
            dispatch(sortByPrice("asc"));
            setSort("dsc");
            setSorted(true);
            return
        } else {
            dispatch(sortByPrice("dsc"));
            setSort("asc");
            setSorted(true);
        }
    };

    const handleClearSort = () => {
        dispatch(fetchProductsAsync());
        setSort("");
        setSorted(false);
    };

    useEffect(()=>{
        dispatch(fetchProductsAsync());
    },[dispatch])

    return(
        <>
        <div className="sort-container">
            
            <button className="btn price-sort-button btn-primary" onClick={handleSort} title="click again to toggle high to low">
                <span>Sort By Price</span>
                {sort==="asc"?<FaSortUp/>:<FaSortDown/>}
            </button>
            {sorted?<div className="clear-sort"><FiX onClick={handleClearSort}/></div>:null}
        </div>
        <ul>
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
        </ul>
        </>
    )    
}

export default ProductList;