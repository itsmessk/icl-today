import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 style={{ color: '#667eea', fontWeight: 800, marginBottom: '0.5rem' }}>ICL</h3>
            <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '1rem' }}>Infoziant Centre of Learning</p>
            <p className="footer-description">
              Empowering learners with quality education. Platform under development.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-subtitle">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/courses">Browse Courses</Link></li>
              <li><span style={{ color: '#9ca3af', cursor: 'not-allowed' }}>More features coming soon...</span></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-subtitle">Powered by</h4>
            <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>Infoziant IT Solutions Inc.</p>
            <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginTop: '0.5rem' }}>SOC 2 | ISO 27001:2022 Certified</p>
          </div>
          
          <div className="footer-col">
            <h4 className="footer-subtitle">Connect</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/infoziant.inc/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/infoziant/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '0.75rem', marginTop: '1rem' }}>Full contact details coming soon</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} ICL - Infoziant Centre of Learning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
