import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './InquiryPage.css';

// Mock course data
const mockCourse = {
  _id: 'mock_course_id_123',
  title: 'General Course',
  price: 1399,
  duration: '15 Days'
};

const InquiryPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    degree: '',
    year: '',
    department: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [inquiryId, setInquiryId] = useState(null);
  const [showPaymentButton, setShowPaymentButton] = useState(false);
  const razorpayContainerRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization/College is required';
    }

    if(!formData.degree.trim()) {
      newErrors.degree = 'Degree is required';
    }

    if(!formData.year.trim()) {
      newErrors.year = 'Year of study is required';
    }

    if(!formData.department.trim()) {
      newErrors.department = 'Department is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (showPaymentButton && razorpayContainerRef.current) {
      if (inquiryId) {
        localStorage.setItem('currentInquiryId', inquiryId);
        localStorage.setItem('currentOrganization', formData.organization || '');
        console.log('Stored inquiry ID and organization in localStorage:', {
          inquiryId,
          organization: formData.organization
        });
      }
      
      razorpayContainerRef.current.innerHTML = '';
      
      const form = document.createElement('form');
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
      script.setAttribute('data-payment_button_id', 'pl_RobPrOGlMoiuEY');
      script.async = true;
      
      form.appendChild(script);
      razorpayContainerRef.current.appendChild(form);
      
      console.log('Razorpay button added to DOM');
    }
  }, [showPaymentButton, inquiryId, formData.organization]);

  useEffect(() => {
    if (inquiryId) {
      const handleMessage = async (event) => {
        if (event.data && event.data.razorpay_payment_id) {
          try {
            await axios.post(`${import.meta.env.VITE_API_URL}/course-inquiries/verify-payment`, {
              razorpayOrderId: event.data.razorpay_order_id,
              razorpayPaymentId: event.data.razorpay_payment_id,
              razorpaySignature: event.data.razorpay_signature,
              inquiryId: inquiryId,
              organization: formData.organization
            });
            
            toast.success('Enrollment successful! We will contact you shortly.');
            // Redirect to success page or home page
            window.location.href = '/success';
            
          } catch (error) {
            console.error("Payment verification failed:", error);
            toast.error('Payment verification failed. Please try again.');
          }
        }
      };
      
      window.addEventListener('message', handleMessage);
      
      return () => {
        window.removeEventListener('message', handleMessage);
      };
    }
  }, [inquiryId, formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/course-inquiries`, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        organization: formData.organization,
        degree: formData.degree,
        year: formData.year,
        department: formData.department,
        courseId: '680a024024dff2cef862633e'
      });
      
      setInquiryId(response.data._id);
      setShowPaymentButton(true);
      setIsSubmitting(false);
      
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      if (error.response && error.response.status === 404) {
        toast.error("Server endpoint not found. Please try again later or contact support.");
      } else {
        toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
      }
      setIsSubmitting(false);
    }
  };

  return (
    <div className="inquiry-page">
      <div className="inquiry-container">
        <div className="inquiry-header">
          <h1>Enroll in {mockCourse.title}</h1>
        </div>
        
        {!showPaymentButton ? (
          <form onSubmit={handleSubmit} className="inquiry-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={errors.name ? 'error' : ''}    
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="organization">Organization/College</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Enter your organization/college"
                className={errors.organization ? 'error' : ''}
              />
              {errors.organization && <span className="error-message">{errors.organization}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                placeholder="Enter your degree"
                className={errors.degree ? 'error' : ''}
              />
              {errors.degree && <span className="error-message">{errors.degree}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="year">Year of Study</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Enter your year of study"
                className={errors.year ? 'error' : ''}
              />
              {errors.year && <span className="error-message">{errors.year}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="department">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter your department"
                className={errors.department ? 'error' : ''}
              />
              {errors.department && <span className="error-message">{errors.department}</span>}
            </div>
            
            <div className="course-info-summary">
              <p><strong>Course:</strong> {mockCourse.title}</p>
              <p><strong>Price:</strong> ₹{mockCourse.price}</p>
              <p><strong>Duration:</strong> {mockCourse.duration}</p>
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Processing...' : 'Continue to Payment'}
              </button>
            </div>
          </form>
        ) : (
          <div className="payment-section">
            <div className="payment-info">
              <p>Please complete your payment to enroll in the course.</p>
              <div className="course-info-summary">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Organization:</strong> {formData.organization}</p>
                <p><strong>Degree:</strong> {formData.degree}</p>
                <p><strong>Year:</strong> {formData.year}</p>
                <p><strong>Department:</strong> {formData.department}</p>
                <p><strong>Course:</strong> {mockCourse.title}</p>
                <p><strong>Price:</strong> ₹{mockCourse.price}</p>
              </div>
            </div>
            
            <div className="payment-alert">
              <div className="alert alert-warning">
                <i className="fas fa-exclamation-triangle"></i>
                <strong>Important:</strong> After clicking the payment button, please DO NOT manually close the payment window or click "Done" button. 
                Let the payment process complete and redirect automatically to verify your payment successfully.
              </div>
            </div>
            
            <div className="razorpay-container" ref={razorpayContainerRef}>
              {/* Razorpay button will be added here dynamically */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiryPage;
