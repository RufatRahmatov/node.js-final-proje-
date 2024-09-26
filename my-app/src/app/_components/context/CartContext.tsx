import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface Product {
  _id: string;
  name: string;
  price: number;
  discount?: number;
  image: string;
  hoverImage?: string;
  status?: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

interface CartAction {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART";
  payload: Product;
}

const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<CartAction>;
    }
  | undefined
>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingIndex = state.cart.findIndex(
        (item) => item.product._id === action.payload._id
      );
      if (existingIndex >= 0) {
        const updatedCart = [...state.cart];
        updatedCart[existingIndex].quantity += 1;
        return { ...state, cart: updatedCart };
      }
      return {
        ...state,
        cart: [...state.cart, { product: action.payload, quantity: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.product._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
