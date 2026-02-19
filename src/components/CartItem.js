const CartItem = ({ item, increaseQty, decreaseQty, removeItem }) => {
  return (
    <div className="cart-item">
      {/* Image + Name + Price */}
      <div className="cart-item-info">
        <img src={item.image} alt={item.name} />
        <div className="item-text">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      </div>

      {/* Quantity controls */}
      <div className="quantity-controls">
        <button onClick={() => decreaseQty(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQty(item.id)}>+</button>
      </div>

      {/* Remove button */}
      <button className="remove-btn" onClick={() => removeItem(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;


