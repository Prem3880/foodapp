const CartItem = ({ item, increaseQty, decreaseQty, removeItem }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />

      <div className="cart-data">
        <h3>{item.name}</h3>
        <p>₹{item.price}</p>

        <div className="quantity-controls">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>

        <button className="remove-btn" onClick={() => removeItem(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;