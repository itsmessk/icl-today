import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
//sample daw 

// Create an axios instance with common configuration
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Course APIs
export const getAllCourses = async () => {
  try {
    const response = await api.get('/courses');
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const getCourseById = async (courseId) => {
  try {
    const response = await api.get(`/courses/${courseId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching course ${courseId}:`, error);
    throw error;
  }
};

export const getEnrolledCourses = async () => {
  try {
    const response = await api.get('/courses/user/enrolled');
    return response.data;
  } catch (error) {
    console.error('Error fetching enrolled courses:', error);
    throw error;
  }
};

// Payment APIs
export const createPaymentOrder = async (courseId, email = null, name = null) => {
  try {
    const response = await api.post('/payments/create-order', { 
      courseId,
      userEmail: email,
      userName: name 
    });
    return response.data;
  } catch (error) {
    console.error('Error creating payment order:', error);
    throw error;
  }
};

export const verifyPayment = async (paymentData) => {
  try {
    const response = await api.post('/payments/verify', paymentData);
    return response.data;
  } catch (error) {
    console.error('Error verifying payment:', error);
    throw error;
  }
};

export const getPaymentHistory = async () => {
  try {
    const response = await api.get('/payments/history');
    return response.data;
  } catch (error) {
    console.error('Error fetching payment history:', error);
    throw error;
  }
};

// User APIs
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/users/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/users/login', credentials);
    // Save token to localStorage
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await api.get('/users/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (userData) => {
  try {
    const response = await api.put('/users/profile', userData);
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

// Add updateProfile as an alias for updateUserProfile
export const updateProfile = updateUserProfile;

export const changePassword = async (passwordData) => {
  try {
    const response = await api.put('/users/change-password', passwordData);
    return response.data;
  } catch (error) {
    console.error('Error changing password:', error);
    throw error;
  }
};

// Password reset APIs
export const requestPasswordReset = async (data) => {
  try {
    const response = await api.post('/users/forgot-password', data);
    return response.data;
  } catch (error) {
    console.error('Error requesting password reset:', error);
    throw error;
  }
};

export const verifyResetToken = async (token) => {
  try {
    const response = await api.get(`/users/reset-password/${token}/verify`);
    return response.data;
  } catch (error) {
    console.error('Error verifying reset token:', error);
    throw error;
  }
};

export const resetPassword = async (token, data) => {
  try {
    const response = await api.post(`/users/reset-password/${token}`, data);
    return response.data;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};

// Email verification APIs
export const verifyEmail = async (token) => {
  try {
    const response = await api.get(`/users/verify-email/${token}`);
    return response.data;
  } catch (error) {
    console.error('Error verifying email:', error);
    throw error;
  }
};

export const resendVerificationEmail = async (data) => {
  try {
    const response = await api.post('/users/resend-verification', data);
    return response.data;
  } catch (error) {
    console.error('Error resending verification email:', error);
    throw error;
  }
};

export const getInquiry = async () => {
  try {
    const response = await api.get('/course-inquiries');
    return response.data;
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    throw error;
  }
};

// Update inquiry status
export const updateInquiryStatus = async (inquiryId, status) => {
  try {
    const response = await api.patch(`/course-inquiries/${inquiryId}/status`, { status });
    return response.data;
  } catch (error) {
    console.error('Error updating inquiry status:', error);
    throw error;
  }
};

// Update payment status
export const updatePaymentStatus = async (inquiryId, paymentStatus, razorpayPaymentId = null) => {
  try {
    const body = { paymentStatus };
    if (razorpayPaymentId) {
      body.razorpayPaymentId = razorpayPaymentId;
    }
    const response = await api.patch(`/course-inquiries/${inquiryId}/payment-status`, body);
    return response.data;
  } catch (error) {
    console.error('Error updating payment status:', error);
    throw error;
  }
};

// Manually verify payment and enroll student
export const manuallyVerifyPayment = async (inquiryId, paymentId = null, notes = null) => {
  try {
    const body = {};
    if (paymentId) body.paymentId = paymentId;
    if (notes) body.notes = notes;
    
    const response = await api.patch(`/course-inquiries/${inquiryId}/manual-verify`, body);
    return response.data;
  } catch (error) {
    console.error('Error manually verifying payment:', error);
    throw error;
  }
};

export default api;
