import { useState } from 'react';

const Cart = () => {
  // product list
  const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 600 },
    { id: 3, name: 'Headphones', price: 200 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      // Increase quantity  in cart
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      // Add new item to cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>E-Commerce Cart</h2>
      
      <div>
        <h3>Products</h3>
        {products.map((product) => (
          <div key={product.id}>
            <p><strong>{product.name}</strong></p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div >
        <h3>Your Cart</h3>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} (x{item.quantity}) - ${item.price * item.quantity}
                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <h4>Total: ${getTotalPrice()}</h4>
      </div>
    </div>
  );
};

export default Cart;
