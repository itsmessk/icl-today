import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  const [verifying, setVerifying] = useState(true);
  const [paymentStatus, setPaymentStatus] = useState('pending');
  const [name, setName] = useState(''); 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        // Get query parameters from URL
        const searchParams = new URLSearchParams(location.search);
        const paymentId = searchParams.get('payment_id') || searchParams.get('razorpay_payment_id');
        
        // Get inquiry ID from local storage (will be set before redirecting to Razorpay)
        const inquiryId = localStorage.getItem('currentInquiryId');

        console.log('Payment verification initiated with:', { paymentId, inquiryId });

        if (!paymentId || !inquiryId) {
          console.error('Missing payment information', { paymentId, inquiryId });
          setPaymentStatus('failed');
          toast.error('Payment verification failed. Missing payment information.');
          setVerifying(false);
          return;
        }

        // Verify payment with the backend using only payment ID
        // For simplified Razorpay integration where full signature is not available in redirect
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/course-inquiries/verify-payment-simple`, {
          paymentId,
          inquiryId
        });

        if (response.data.success) {
          setPaymentStatus('success');
          toast.success('Payment verified successfully! You have been enrolled in the course.');
          // Clear the inquiry ID from local storage
          localStorage.removeItem('currentInquiryId');
          setName(response.data.inquiry.name);
        } else {
          setPaymentStatus('failed');
          toast.error('Payment verification failed. Please contact support.');
        }
      } catch (error) {
        console.error('Error verifying payment:', error);
        setPaymentStatus('failed');
        toast.error('An error occurred while verifying payment. Please contact support.');
      } finally {
        setVerifying(false);
      }
    };

    verifyPayment();
  }, [location.search]);

  const handleContinue = () => {
    navigate('/courses');
  };

  return (
    <div className="container">
      <div className="payment-success-container">
        <div className="payment-status-card">
          {verifying ? (
            <div className="payment-verifying">
              <h2>Verifying Payment</h2>
              <p>Please wait while we verify your payment...</p>
              <div className="alert alert-info">
                <i className="fas fa-info-circle"></i>
                <div>
                  <strong>Note:</strong> Payment verification can take a few moments. 
                  Please do not close this page or refresh until the process is complete.
                </div>
              </div>
              <div className="spinner"></div>
            </div>
          ) : paymentStatus === 'success' ? (
            <div className="payment-success">
              <div className="success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h2>Payment Successful!</h2>
              <p>Thank you, {name}! Your enrollment has been confirmed.</p>
              <div className="payment-info-box">
                <h3>What's Next?</h3>
                <ul>
                  <li>📧 Check your email for course access details</li>
                  <li>📚 Your onboarding information will be shared shortly</li>
                  <li>💬 Our team will contact you within 48 hours</li>
                </ul>
              </div>
              <div className="payment-actions">
                <button className="btn btn-primary" onClick={handleContinue}>
                  Browse More Courses
                </button>
              </div>
              <div className="support-info">
                <p>Need help? Contact us at <a href="mailto:support@infoziant.com">support@infoziant.com</a></p>
              </div>
            </div>
          ) : (
            <div className="payment-failed">
              <div className="failed-icon">
                <i className="fas fa-times-circle"></i>
              </div>
              <h2>Payment Verification Failed</h2>
              <p>
                We couldn't verify your payment. If you believe this is an error,
                please contact our support team.
              </p>
              <div className="payment-actions">
                <button className="btn btn-primary" onClick={handleContinue}>
                  Return to Courses
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess; 