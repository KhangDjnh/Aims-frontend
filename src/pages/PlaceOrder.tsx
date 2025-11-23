import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './PlaceOrder.css';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { getSelectedItems, getTotalPrice, getCartCount, removeFromCart } = useCart();
  const { createOrder } = useOrder();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    note: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedItems = getSelectedItems();
  const total = getTotalPrice();

  useEffect(() => {
    if (selectedItems.length === 0) {
      navigate('/cart');
    }
  }, [selectedItems.length, navigate]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Vui lòng nhập họ và tên';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại';
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Số điện thoại không hợp lệ';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Vui lòng nhập địa chỉ nhận hàng';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      createOrder(selectedItems, formData, total);
      // Remove selected items from cart
      selectedItems.forEach(item => removeFromCart(item.id));
      navigate('/pay-order');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (selectedItems.length === 0) {
    return null;
  }

  return (
    <div className="place-order-page">
      <Navbar cartCount={getCartCount()} />
      
      <main className="place-order-main">
        <div className="order-container">
          <div className="order-header">
            <h1>Thông tin đặt hàng</h1>
            <p>Vui lòng điền đầy đủ thông tin để hoàn tất đơn hàng</p>
          </div>

          <div className="order-content">
            <form onSubmit={handleSubmit} className="order-form">
              <div className="form-section">
                <h2>Thông tin người nhận</h2>
                
                <div className="form-group">
                  <label htmlFor="fullName">
                    Họ và tên <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? 'error' : ''}
                    placeholder="Nhập họ và tên"
                  />
                  {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="example@email.com"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Số điện thoại <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'error' : ''}
                    placeholder="0123456789"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    Địa chỉ nhận hàng <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={errors.address ? 'error' : ''}
                    placeholder="Số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố"
                  />
                  {errors.address && <span className="error-message">{errors.address}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="note">Ghi chú (tùy chọn)</label>
                  <textarea
                    id="note"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Ghi chú thêm cho đơn hàng..."
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="button" onClick={() => navigate('/cart')} className="btn-back">
                  Quay lại
                </button>
                <button type="submit" className="btn-submit">
                  Xác nhận và Thanh toán
                </button>
              </div>
            </form>

            <div className="order-summary">
              <h2>Tóm tắt đơn hàng</h2>
              <div className="summary-items">
                {selectedItems.map(item => (
                  <div key={item.id} className="summary-item">
                    <img src={item.image} alt={item.name} className="summary-image" />
                    <div className="summary-info">
                      <h4>{item.name}</h4>
                      <p className="summary-category">{item.category}</p>
                      <p className="summary-quantity">Số lượng: {item.quantity}</p>
                    </div>
                    <p className="summary-price">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>
              
              <div className="summary-total">
                <div className="total-row">
                  <span>Tạm tính:</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="total-row">
                  <span>Phí vận chuyển:</span>
                  <span className="free">Miễn phí</span>
                </div>
                <div className="total-row final">
                  <span>Tổng cộng:</span>
                  <span className="total-amount">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PlaceOrder;

