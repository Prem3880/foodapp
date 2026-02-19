import CartItem from "../components/CartItem";

const Cart = ({ cart, increaseQty, decreaseQty, removeItem }) => {
  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              {/* Food image */}
              <img src={item.image} alt={item.name} />

              {/* Item details */}
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>

                {/* Quantity controls */}
                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                {/* Remove button */}
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total Price */}
          <h3>Total: ₹{totalPrice}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
