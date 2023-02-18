export const initialState = {
  basket: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "DELETE_FROM_BASKET":
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("produit introubable");
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
