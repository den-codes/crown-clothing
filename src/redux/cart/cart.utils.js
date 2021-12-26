export const addItemToCart = (cartItems, cartItemToAdd) => {
    //to find repeated items
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  //if the item already exits, creates a new array and increases the quantity
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  //if the item does not exist, creates a new object 
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };