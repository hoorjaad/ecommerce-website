// src/redux/reducer/handleCart.js
const initialState = [];

const handleCart = (state = initialState, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      // Check if product already exists in the cart
      const exist = state.find((item) => item.id === product.id);
      if (exist) {
        // Increment quantity if item already exists
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        // Add new item with quantity of 1
        return [...state, { ...product, qty: 1 }];
      }

    case "DELITEM":
      // Check if product exists in the cart
      const exist1 = state.find((item) => item.id === product.id);
      if (exist1.qty === 1) {
        // Remove item if quantity is 1
        return state.filter((item) => item.id !== product.id);
      } else {
        // Decrease quantity if more than 1
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty - 1 } : item
        );
      }

    default:
      return state;
  }
};

export default handleCart;
