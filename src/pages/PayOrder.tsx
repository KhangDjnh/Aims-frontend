import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOrder } from '../context/OrderContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import './PayOrder.css';

const PayOrder = () => {
  const navigate = useNavigate();
  const { currentOrder, setCurrentOrder } = useOrder();
  const { getCartCount, removeFromCart } = useCart();

  useEffect(() => {
    if (!currentOrder) {
      navigate('/cart');
    }
  }, [currentOrder, navigate]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date));
  };

  if (!currentOrder) {
    return null;
  }

  // Generate fake QR code using a placeholder service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(`AIMS-${currentOrder.id}-${currentOrder.total}`)}`;

  const handleComplete = () => {
    if (currentOrder) {
      // Remove ordered items from cart after successful payment
      currentOrder.items.forEach(item => removeFromCart(item.id));
    }
    setCurrentOrder(null);
    alert('Cảm ơn bạn đã thanh toán! Đơn hàng của bạn đang được xử lý.');
    navigate('/cart');
  };

  return (
    <div className="pay-order-page">
      <Navbar cartCount={getCartCount()} />
      
      <main className="pay-order-main">
        <div className="payment-container">
          <div className="payment-header">
            <h1>Thanh toán đơn hàng</h1>
            <p>Mã đơn hàng: <strong>{currentOrder.id}</strong></p>
          </div>

          <div className="payment-content">
            <div className="qr-section">
              <div className="qr-container">
                <img src={qrCodeUrl} alt="QR Code" className="qr-code" />
              </div>
              <div className="payment-amount">
                <p className="amount-label">Số tiền thanh toán</p>
                <p className="amount-value">{formatPrice(currentOrder.total)}</p>
              </div>
              <div className="payment-instructions">
                <p>Quét mã QR bằng ứng dụng ngân hàng để thanh toán</p>
              </div>
            </div>

            <div className="invoice-section">
              <h2>Hóa đơn thanh toán</h2>
              
              <div className="invoice-header">
                <div className="invoice-brand">
                  <h3>AIMS System</h3>
                  <p>Hệ thống thương mại điện tử</p>
                </div>
                <div className="invoice-info">
                  <p><strong>Mã đơn:</strong> {currentOrder.id}</p>
                  <p><strong>Ngày đặt:</strong> {formatDate(currentOrder.orderDate)}</p>
                </div>
              </div>

              <div className="invoice-customer">
                <h4>Thông tin khách hàng</h4>
                <div className="customer-details">
                  <p><strong>Họ tên:</strong> {currentOrder.orderInfo.fullName}</p>
                  <p><strong>Email:</strong> {currentOrder.orderInfo.email}</p>
                  <p><strong>Số điện thoại:</strong> {currentOrder.orderInfo.phone}</p>
                  <p><strong>Địa chỉ:</strong> {currentOrder.orderInfo.address}</p>
                  {currentOrder.orderInfo.note && (
                    <p><strong>Ghi chú:</strong> {currentOrder.orderInfo.note}</p>
                  )}
                </div>
              </div>

              <div className="invoice-items">
                <h4>Chi tiết đơn hàng</h4>
                <table className="items-table">
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentOrder.items.map(item => (
                      <tr key={item.id}>
                        <td>
                          <div className="item-cell">
                            <img src={item.image} alt={item.name} className="item-thumb" />
                            <div>
                              <p className="item-name">{item.name}</p>
                              <p className="item-category">{item.category}</p>
                            </div>
                          </div>
                        </td>
                        <td>{formatPrice(item.price)}</td>
                        <td>{item.quantity}</td>
                        <td className="item-total">{formatPrice(item.price * item.quantity)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="invoice-summary">
                <div className="summary-row">
                  <span>Tạm tính:</span>
                  <span>{formatPrice(currentOrder.total)}</span>
                </div>
                <div className="summary-row">
                  <span>Phí vận chuyển:</span>
                  <span className="free">Miễn phí</span>
                </div>
                <div className="summary-row total">
                  <span>Tổng cộng:</span>
                  <span className="total-amount">{formatPrice(currentOrder.total)}</span>
                </div>
              </div>

              <div className="invoice-footer">
                <p>Cảm ơn bạn đã mua sắm tại AIMS System!</p>
                <p className="footer-note">Vui lòng lưu lại mã đơn hàng để tra cứu</p>
              </div>
            </div>
          </div>

          <div className="payment-actions">
            <button onClick={() => navigate('/')} className="btn-back-home">
              Về trang chủ
            </button>
            <button onClick={handleComplete} className="btn-complete">
              Đã thanh toán xong
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PayOrder;

