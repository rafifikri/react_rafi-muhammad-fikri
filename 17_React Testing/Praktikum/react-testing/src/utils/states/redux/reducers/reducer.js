import { createSlice } from "@reduxjs/toolkit";

function getItems() {
  const getItem = localStorage.getItem("products");

  if (getItem) {
    const parseProducts = JSON.parse(getItem);
    return parseProducts;
  }

  return [];
}

const initialState = {
  isLoggedIn: false,
  token: "",
  theme: localStorage.getItem("theme") ?? "light",
  products: getItems(),
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
    setEditingProduct: (state, action) => {
      // TODO: Pindahkan fungsi edit ke sini
      state.editingProduct = action.payload;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    deleteProducts: (state, action) => {
      // TODO: Pindahkan fungsi delete ke sini
      const productIdToDelete = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productIdToDelete
      );
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    changeTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
    handleAuth: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const {
  setProducts,
  changeTheme,
  handleAuth,
  handleLogout,
  setEditingProduct,
  deleteProducts,
} = sliceState.actions;
export default reducer;
