import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    selectedProduct: null,
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // Add a new product
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        // Edit an existing product
        editProduct: (state, action) => {
            const { id, updatedProduct } = action.payload;
            const index = state.products.findIndex(product => product.id === id);
            if (index !== -1) {
                state.products[index] = { ...state.products[index], ...updatedProduct };
            }
        },
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
        },
        // Set all products (e.g., after fetching from API)
        setProducts: (state, action) => {
            state.products = action.payload;
        },
    },
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
} = productSlice.actions;

const productReducer = productSlice.reducer;

export default productReducer;