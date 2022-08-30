export const ADD_TO_CART = "cart/add-to-cart";
export const INCREMENT = "cart/increment";
export const DECREMENT = "cart/decrement";

const initialState = {
  products: [
    { id: 1, title: "Asus Vivobook X515MA", price: 15000, qty: 20 },
    { id: 2, title: "Dell E1916HV 18.5 Inch ", price: 3000, qty: 15 },
    { id: 3, title: "Canon Eos 4000D 18MP ", price: 10500, qty: 12 },
  ],
  carts: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const selectedProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.carts.find((product) =>
        product.id === action.payload.id ? true : false
      );
      return {
        ...state,
        products: [...state.products].map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              qty: product.qty - 1,
            };
          } else {
            return {
              ...product,
            };
          }
        }),
        carts: inCart
          ? [...state.carts].map((product) => {
              if (product.id === action.payload.id) {
                return {
                  ...product,
                  qty: product.qty + 1,
                  price: product.price,
                };
              } else {
                return {
                  ...product,
                };
              }
            })
          : [...state.carts, { ...selectedProduct, qty: 1 }],
      };
    case INCREMENT:
      return {
        ...state,
        products: [...state.products].map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              qty: product.qty - 1,
            };
          } else {
            return {
              ...product,
            };
          }
        }),

        carts: [...state.carts].map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              qty: product.qty + 1,
            };
          } else {
            return {
              ...product,
            };
          }
        }),
      };
    case DECREMENT:
      return {
        ...state,
        products: [...state.products].map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              qty: product.qty + 1,
            };
          } else {
            return {
              ...product,
            };
          }
        }),

        carts: [...state.carts].map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              qty: product.qty - 1,
            };
          } else {
            return {
              ...product,
            };
          }
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;
