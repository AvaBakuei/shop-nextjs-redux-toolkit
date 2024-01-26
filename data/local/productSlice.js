import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENDPOINTS } from "@/lib/apiConstants";

const baseURL = "https://dummyjson.com";

export const getAllProducts = createAsyncThunk("products/list", async (data) => {
    try {
        const url = baseURL + ENDPOINTS.GET_ALL_PRODUCTS;
        const response = await fetch(url);
        return response.json();
    } catch(e) {
        return e.response;
    }
})

export const getAllCategories = createAsyncThunk("categories", async(data) => {
    try {
        const url = baseURL + ENDPOINTS.GET_PRODUCTS_CATEGORIES;
        const response = await fetch(url);
        return response.json();
    } catch(e) {
        return e.response;
    }
})

export const getProductsOfCategory = createAsyncThunk("category", async(category) => {
    try {
        const url = baseURL + ENDPOINTS.GET_PRODUCTS_OF_CATEGORY(category);
        const response = await fetch(url);
        return response.json();
    } catch(e) {
        return e.response;
    }
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: null,
        loading: false,
        error: null,
        categoriesList: null,
        productsOfCategory: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        // Get Products List
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.productList = action.payload.products;
        });
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })

        // Get Categories List
        builder.addCase(getAllCategories.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categoriesList = action.payload;
        });
        builder.addCase(getAllCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        })

        // Get Products List Of Category
        builder.addCase(getProductsOfCategory.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getProductsOfCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.productsOfCategory = action.payload;
        });
        builder.addCase(getProductsOfCategory.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error;
        });
    }

})

export default productSlice.reducer;