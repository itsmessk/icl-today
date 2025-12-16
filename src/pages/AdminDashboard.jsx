import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './AdminDashboard.css';

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    fetchDashboardStats();
  }, [user, navigate]);

  const fetchDashboardStats = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.icl.today/api/course-inquiries/dashboard/stats', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch dashboard stats');
      }

      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      toast.error('Failed to load dashboard statistics');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="admin-dashboard-loading">
        <div className="loader"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="dashboard-header">
          <div>
            <h1 className="dashboard-title">Inquiry Dashboard</h1>
            <p className="dashboard-subtitle">Welcome back, {user?.name || 'Admin'}</p>
          </div>
          <Link to="/inquiries" className="btn btn-primary">
            <i className="fas fa-list"></i> View All Inquiries
          </Link>
        </div>

        {stats && (
          <>
            {/* Overview Cards */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon total">
                  <i className="fas fa-inbox"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{stats.totalInquiries}</h3>
                  <p className="stat-label">Total Inquiries</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon today">
                  <i className="fas fa-calendar-day"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{stats.todayInquiries}</h3>
                  <p className="stat-label">Today</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon week">
                  <i className="fas fa-calendar-week"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{stats.weekInquiries}</h3>
                  <p className="stat-label">This Week</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon month">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{stats.monthInquiries}</h3>
                  <p className="stat-label">This Month</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon conversion">
                  <i className="fas fa-chart-line"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{stats.conversionRate?.toFixed(1)}%</h3>
                  <p className="stat-label">Conversion Rate</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon revenue">
                  <i className="fas fa-rupee-sign"></i>
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">₹{(stats.totalRevenue || 0).toLocaleString()}</h3>
                  <p className="stat-label">Total Revenue</p>
                </div>
              </div>
            </div>

            {/* Status & Payment Breakdown */}
            <div className="breakdown-grid">
              {/* Status Breakdown */}
              <div className="breakdown-card">
                <h3 className="breakdown-title">Inquiry Status</h3>
                <div className="breakdown-list">
                  <div className="breakdown-item">
                    <div className="breakdown-label">
                      <span className="status-dot pending"></span>
                      Pending
                    </div>
                    <span className="breakdown-value">{stats.statusBreakdown?.pending || 0}</span>
                  </div>
                  <div className="breakdown-item">
                    <div className="breakdown-label">
                      <span className="status-dot contacted"></span>
                      Contacted
                    </div>
                    <span className="breakdown-value">{stats.statusBreakdown?.contacted || 0}</span>
                  </div>
                  <div className="breakdown-item">
                    <div className="breakdown-label">
                      <span className="status-dot enrolled"></span>
                      Enrolled
                    </div>
                    <span className="breakdown-value">{stats.statusBreakdown?.enrolled || 0}</span>
                  </div>
                  <div className="breakdown-item">
                    <div className="breakdown-label">
                      <span className="status-dot canceled"></span>
                      Canceled
                    </div>
                    <span className="breakdown-value">{stats.statusBreakdown?.canceled || 0}</span>
                  </div>
                </div>
              </div>

              {/* Payment Breakdown */}
              <div className="breakdown-card">
                <h3 className="breakdown-title">Payment Status</h3>
                <div className="breakdown-list">
                  <div className="breakdown-item">
                    <div className="breakdown-label">
                      <span className="status-dot payment-pending"></span>
                      Pending
                    </div>
                    <span className="breakdown-value">{stats.paymentBreakdown?.pending || 0}</span>
                  </div>
                  <div className="breakdown-item">
                    <div className="breakdown-label">
                      <span className="status-dot payment-completed"></span>
                      Completed
                    </div>
                    <span className="breakdown-value">{stats.paymentBreakdown?.completed || 0}</span>
                  </div>
                  <div className="breakdown-item">
                    <div className="breakdown-label">
                      <span className="status-dot payment-failed"></span>
                      Failed
                    </div>
                    <span className="breakdown-value">{stats.paymentBreakdown?.failed || 0}</span>
                  </div>
                </div>
                <div className="payment-rate">
                  <span>Completion Rate:</span>
                  <strong>{stats.paymentCompletionRate?.toFixed(1)}%</strong>
                </div>
              </div>
            </div>

            {/* Top Courses & Organizations */}
            <div className="tables-grid">
              {/* Top Courses */}
              <div className="table-card">
                <h3 className="table-title">Top Courses</h3>
                <div className="table-responsive">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Course Name</th>
                        <th>Inquiries</th>
                        <th>Enrolled</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.topCourses?.map((course, index) => (
                        <tr key={index}>
                          <td>{course._id}</td>
                          <td>{course.count}</td>
                          <td>{course.enrolled || 0}</td>
                        </tr>
                      ))}
                      {(!stats.topCourses || stats.topCourses.length === 0) && (
                        <tr>
                          <td colSpan="3" className="no-data">No data available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Top Organizations */}
              <div className="table-card">
                <h3 className="table-title">Top Organizations</h3>
                <div className="table-responsive">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Organization</th>
                        <th>Inquiries</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stats.topOrganizations?.map((org, index) => (
                        <tr key={index}>
                          <td>{org._id}</td>
                          <td>{org.count}</td>
                        </tr>
                      ))}
                      {(!stats.topOrganizations || stats.topOrganizations.length === 0) && (
                        <tr>
                          <td colSpan="2" className="no-data">No data available</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 7-Day Trend */}
            {stats.last7DaysTrend && stats.last7DaysTrend.length > 0 && (
              <div className="trend-card">
                <h3 className="trend-title">Last 7 Days Trend</h3>
                <div className="trend-chart">
                  {stats.last7DaysTrend.map((day, index) => {
                    const maxCount = Math.max(...stats.last7DaysTrend.map(d => d.count));
                    const height = maxCount > 0 ? (day.count / maxCount) * 100 : 0;
                    
                    return (
                      <div key={index} className="trend-bar-wrapper">
                        <div className="trend-bar" style={{ height: `${height}%` }}>
                          <span className="trend-value">{day.count}</span>
                        </div>
                        <span className="trend-date">
                          {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="quick-actions">
              <h3 className="quick-actions-title">Quick Actions</h3>
              <div className="action-buttons">
                <Link to="/inquiries" className="action-btn">
                  <i className="fas fa-list"></i>
                  <span>View All Inquiries</span>
                </Link>
                <Link to="/email-management" className="action-btn action-btn-email">
                  <i className="fas fa-envelope"></i>
                  <span>Email Management</span>
                </Link>
                <button className="action-btn" onClick={fetchDashboardStats}>
                  <i className="fas fa-sync-alt"></i>
                  <span>Refresh Data</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
