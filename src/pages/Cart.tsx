import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    toggleSelect,
    selectAll,
    deselectAll,
    getCartCount,
    getTotalPrice,
    getSelectedItems,
  } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);
  const hasSelectedItems = cartItems.some(item => item.selected);

  const handlePlaceOrder = () => {
    const selectedItems = getSelectedItems();
    if (selectedItems.length === 0) {
      alert('Vui lòng chọn ít nhất một sản phẩm để đặt hàng!');
      return;
    }

    navigate('/place-order');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <Navbar cartCount={getCartCount()} />
        <main className="cart-main">
          <div className="empty-cart">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h2>Giỏ hàng của bạn đang trống</h2>
            <p>Hãy khám phá và thêm sản phẩm vào giỏ hàng nhé!</p>
            <button onClick={() => navigate('/')} className="btn-shopping">
              Tiếp tục mua sắm
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Navbar cartCount={getCartCount()} />
      
      <main className="cart-main">
        <div className="cart-container">
          <div className="cart-header">
            <h1>Giỏ hàng của tôi</h1>
            <span className="cart-count">({cartItems.length} sản phẩm)</span>
          </div>

          <div className="cart-actions-top">
            <label className="select-all-checkbox">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={(e) => (e.target.checked ? selectAll() : deselectAll())}
              />
              <span>Chọn tất cả</span>
            </label>
            {hasSelectedItems && (
              <button className="btn-remove-selected" onClick={() => {
                getSelectedItems().forEach(item => removeFromCart(item.id));
              }}>
                Xóa đã chọn
              </button>
            )}
          </div>

          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className={`cart-item ${item.selected ? 'selected' : ''}`}>
                <label className="item-checkbox">
                  <input
                    type="checkbox"
                    checked={item.selected || false}
                    onChange={() => toggleSelect(item.id)}
                  />
                </label>
                
                <img src={item.image} alt={item.name} className="item-image" />
                
                <div className="item-info">
                  <h3 className="item-name">{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <p className="item-price">{formatPrice(item.price)}</p>
                </div>

                <div className="item-quantity">
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="item-total">
                  <p className="total-price">{formatPrice(item.price * item.quantity)}</p>
                </div>

                <button
                  className="btn-remove"
                  onClick={() => removeFromCart(item.id)}
                  title="Xóa sản phẩm"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-summary">
          <div className="summary-header">
            <h2>Tóm tắt đơn hàng</h2>
          </div>
          
          <div className="summary-content">
            <div className="summary-row">
              <span>Tạm tính:</span>
              <span>{formatPrice(getTotalPrice())}</span>
            </div>
            <div className="summary-row">
              <span>Phí vận chuyển:</span>
              <span className="free-shipping">Miễn phí</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Tổng cộng:</span>
              <span className="total-amount">{formatPrice(getTotalPrice())}</span>
            </div>
          </div>

          <button
            className="btn-place-order"
            onClick={handlePlaceOrder}
            disabled={!hasSelectedItems}
          >
            Đặt hàng ({getSelectedItems().length})
          </button>

          <button onClick={() => navigate('/')} className="btn-continue-shopping">
            Tiếp tục mua sắm
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;

