import { Link } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <div className="coming-soon-logo">
          <h1 className="company-name">ICL</h1>
          <p className="company-full-name">Infoziant Centre of Learning</p>
        </div>
        
        <div className="coming-soon-main">
          <h2 className="coming-soon-title">Coming Soon</h2>
          <p className="coming-soon-subtitle">
            We're working hard to bring you an amazing learning experience. 
            This feature is currently under development.
          </p>
          
          <div className="coming-soon-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          
          <p className="coming-soon-description">
            In the meantime, explore our courses and start your learning journey!
          </p>
          
          <div className="coming-soon-actions">
            <Link to="/courses" className="btn btn-primary">
              Browse Courses
            </Link>
            <Link to="/" className="btn btn-secondary">
              Go to Home
            </Link>
          </div>
        </div>
        
        <div className="coming-soon-footer">
          <p>Stay tuned for updates!</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
