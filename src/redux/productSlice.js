import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const fetchProductsAsync = createAsyncThunk("products/fetch",()=>{
    return axios.get("https://my-json-server.typicode.com/anuragrajuv/ecommerceRedux/products");
})

export const deleteProductsAsync = createAsyncThunk("product/delete", async (payload) => {
    await axios.delete(`https://my-json-server.typicode.com/anuragrajuv/ecommerceRedux/products/${payload.id}`);
    return payload.id; // Return the id so the reducer can use it
});

export const editProductAsync = createAsyncThunk("product/edit",async(payload)=>{
    await axios.patch(`https://my-json-server.typicode.com/anuragrajuv/ecommerceRedux/products/${payload.id}`, payload);
    return payload
})

export const addProductAsync = createAsyncThunk("product/addProduct",(payload)=>{
    axios.post('https://my-json-server.typicode.com/anuragrajuv/ecommerceRedux/products', {
    id: new Date(),
    title: payload.title,
    description: payload.description,
    rating: payload.rating,
    thumbnail: payload.thumbnail,
    category: payload.category,
    brand: payload.brand,
    price: payload.price,
    dateCreated: new Date().toDateString()
  })
  return payload;
})

const initialState = {
    products: [],
    selectedProduct: null,
    loading: false,
    error: null
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortByPrice:(state,action)=>{
            const order = action.payload; // 'asc' or 'desc'
            state.products.sort((a, b) => {
                if (order === 'asc') {
                    return a.price - b.price;
                } else {
                    return b.price - a.price;
                }
            });
        },
        // Add a new product
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        // Edit an existing product
        // editProduct: (state, action) => {
        //     const { id, updatedProduct } = action.payload;
        //     const index = state.products.findIndex(product => product.id === id);
        //     if (index !== -1) {
        //         state.products[index] = { ...state.products[index], ...updatedProduct };
        //     }
        // },
        // Delete a product
        deleteProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        // Select a product (for viewing or editing)
        selectProduct: (state, action) => {
            state.selectedProduct = state.products.find(product => product.id === action.payload) || null;
        },
        // Deselect product
        clearSelectedProduct: (state) => {
            state.selectedProduct = null;
        },
        // Set loading state
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        // Set error state
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProductsAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchProductsAsync.fulfilled,(state,action)=>{
            state.products = [...action.payload.data];
            state.loading = false;
        })
        .addCase(deleteProductsAsync.fulfilled, (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload);
            toast.success("Product Deleted!");
            state.loading = false;
        })
        .addCase(addProductAsync.fulfilled,(state,action)=>{
            state.products.unshift(action.payload)
            toast.success("New Product Added");
            state.loading = false;
        })
        .addCase(editProductAsync.fulfilled,(state,action)=>{
            const updatedProduct = action.payload;
            console.log(updatedProduct);
            const index = state.products.findIndex(product => product.id === updatedProduct.id);
            if (index !== -1) {
                state.products[index] = { ...state.products[index], ...updatedProduct };
            }        
            state.loading = false;
        })
        .addCase(fetchProductsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(deleteProductsAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(deleteProductsAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(addProductAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addProductAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addCase(editProductAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(editProductAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const {
    addProduct,
    editProduct,
    deleteProduct,
    selectProduct,
    clearSelectedProduct,
    setLoading,
    setError,
    setProducts,
    sortByPrice,
} = productSlice.actions;

const productReducer = productSlice.reducer;
export const productSelector = state=>state.product;
export const loadingSelector = state=>state.product.loading;
export default productReducer;