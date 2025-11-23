import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>AIMS System</h3>
          <p>Hệ thống thương mại điện tử hàng đầu cho các sản phẩm giải trí và văn hóa.</p>
        </div>
        
        <div className="footer-section">
          <h4>Danh mục</h4>
          <ul>
            <li>Đĩa DVD</li>
            <li>Đĩa CD</li>
            <li>Đĩa than</li>
            <li>Sách</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Hỗ trợ</h4>
          <ul>
            <li>Liên hệ</li>
            <li>Về chúng tôi</li>
            <li>Chính sách bảo mật</li>
            <li>Điều khoản sử dụng</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Kết nối</h4>
          <div className="social-links">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 AIMS System. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
};

export default Footer;

