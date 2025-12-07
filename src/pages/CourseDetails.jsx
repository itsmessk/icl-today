import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCourseById } from '../utils/api';
import toast from 'react-hot-toast';
import InquiryModal from '../components/InquiryModal';
import './CourseDetails.css'; // Make sure to create this CSS file next

const CourseDetails = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getCourseById(id);
        setCourse(data);
        
        // Check if user is enrolled
        if (user && user.courses) {
          setIsEnrolled(user.courses.includes(id));
        }
        
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch course details:', error);
        toast.error('Failed to load course details. Please try again later.');
        setIsLoading(false);
      }
    };
    
    fetchCourseDetails();
  }, [id, user]);
  
  const handleEnrollment = () => {
    setShowInquiryModal(true);
  };
  
  const handleEnrollmentSuccess = (inquiry) => {
    toast.success(`Successfully enrolled in ${inquiry.courseName}!`);
    // If you want to show some indicator that they've enrolled
    setIsEnrolled(true);
  };
  
  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-spinner fa-spin"></i> Loading course details...
      </div>
    );
  }
  
  if (!course) {
    return <div className="not-found">Course not found</div>;
  }
  
  return (
    <div className="course-details-page">
      {/* Hero Section with Course Banner */}
      <div className="course-hero">
        <div className="course-hero-overlay">
          <div className="container">
            <div className="course-hero-content">
              <div className="course-hero-left">
                <div className="course-badge">
                  <i className="fas fa-graduation-cap"></i> {course.category || 'Professional Course'}
                </div>
                <h1 className="course-hero-title">{course.title}</h1>
                <p className="course-hero-subtitle">{course.subtitle}</p>
                
                <div className="course-hero-meta">
                  <div className="meta-item">
                    <i className="fas fa-star"></i>
                    <span>4.8 (120 reviews)</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-users"></i>
                    <span>{course.enrollmentCount || 0}+ students</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-signal"></i>
                    <span>{course.level}</span>
                  </div>
                  <div className="meta-item">
                    <i className="fas fa-clock"></i>
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="course-instructor-mini">
                  <img src="https://i.graphicmama.com/uploads/2017/12/5a2658fe73cef-clark-executive.png" alt={course.instructor} />
                  <div>
                    <span className="instructor-label">Created by</span>
                    <span className="instructor-name">{course.instructor}</span>
                  </div>
                </div>
              </div>

              <div className="course-hero-right">
                <div className="course-card-sticky">
                  <div className="course-preview-card">
                    <img src={course.image} alt={course.title} className="preview-image" />
                    <div className="preview-content">
                      <div className="price-section">
                        <span className="price-current">₹{course.price} + GST</span>
                        {course.originalPrice && (
                          <span className="price-original">₹{course.originalPrice}</span>
                        )}
                      </div>
                      
                      {isEnrolled ? (
                        <button className="btn-enrolled" disabled>
                          <i className="fas fa-check-circle"></i> Already Enrolled
                        </button>
                      ) : (
                        <button className="btn-enroll" onClick={handleEnrollment}>
                          <i className="fas fa-shopping-cart"></i> Enroll Now
                        </button>
                      )}

                      <div className="course-includes">
                        <h4>This course includes:</h4>
                        <ul>
                          <li><i className="fas fa-video"></i> Live & Recorded Sessions</li>
                          <li><i className="fas fa-infinity"></i> Full lifetime access</li>
                          <li><i className="fas fa-mobile-alt"></i> Mobile & Desktop access</li>
                          <li><i className="fas fa-certificate"></i> Certificate of completion</li>
                          <li><i className="fas fa-headset"></i> Instructor support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="course-content-wrapper">
          {/* Main Content */}
          <div className="course-main-content">
            {/* What You'll Learn Section */}
            <div className="content-section learning-outcomes">
              <h2 className="section-title">
                <i className="fas fa-lightbulb"></i> What You'll Learn
              </h2>
              <div className="outcomes-grid">
                {course.topics.slice(0, 8).map((topic, index) => (
                  <div key={index} className="outcome-item">
                    <i className="fas fa-check-circle"></i>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs Section */}
            <div className="content-section">
              <div className="course-tabs">
                <div className="tabs-header">
                  <button 
                    className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    <i className="fas fa-info-circle"></i> Overview
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
                    onClick={() => setActiveTab('curriculum')}
                  >
                    <i className="fas fa-list-ul"></i> Curriculum
                  </button>
                  <button 
                    className={`tab-btn ${activeTab === 'instructor' ? 'active' : ''}`}
                    onClick={() => setActiveTab('instructor')}
                  >
                    <i className="fas fa-user-tie"></i> Instructor
                  </button>
                </div>
                
                <div className="tabs-content">
                  {activeTab === 'overview' && (
                    <div className="tab-pane fade-in">
                      <h3>Course Description</h3>
                      <div className="course-description" dangerouslySetInnerHTML={{ __html: course.description }}></div>
                      
                      {course.benefits && course.benefits.length > 0 && (
                        <>
                          <h3 className="benefits-title">
                            <i className="fas fa-trophy"></i> Course Benefits
                          </h3>
                          <div className="benefits-grid">
                            {course.benefits.map((benefit, index) => (
                              <div key={index} className="benefit-card">
                                <i className="fas fa-star"></i>
                                <p>{benefit}</p>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'curriculum' && (
                    <div className="tab-pane fade-in">
                      <h3>Course Curriculum</h3>
                      {course.curriculum && course.curriculum.length > 0 ? (
                        <div className="curriculum-container">
                          {course.curriculum.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="curriculum-section">
                              <div className="section-header">
                                <h4>
                                  <i className="fas fa-folder-open"></i>
                                  Section {sectionIndex + 1}: {section.title}
                                </h4>
                                <span className="section-count">{section.lessons.length} lessons</span>
                              </div>
                              <ul className="lessons-list">
                                {section.lessons.map((lesson, lessonIndex) => (
                                  <li key={lessonIndex} className="lesson-item">
                                    <div className="lesson-icon">
                                      <i className="fas fa-play-circle"></i>
                                    </div>
                                    <div className="lesson-details">
                                      <span className="lesson-title">{lesson.title}</span>
                                      <span className="lesson-duration">
                                        <i className="far fa-clock"></i> {lesson.duration}
                                      </span>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="curriculum-placeholder">
                          <i className="fas fa-info-circle"></i>
                          <p>You will be notified with complete details regarding the start of your program.</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {activeTab === 'instructor' && (
                    <div className="tab-pane fade-in">
                      <div className="instructor-card">
                        <div className="instructor-header">
                          <img src="https://i.graphicmama.com/uploads/2017/12/5a2658fe73cef-clark-executive.png" alt={course.instructor} />
                          <div className="instructor-info">
                            <h3>{course.instructor}</h3>
                            <p className="instructor-title">Senior Instructor & Industry Expert</p>
                            <div className="instructor-stats">
                              <div className="stat">
                                <i className="fas fa-star"></i>
                                <span>4.8 Rating</span>
                              </div>
                              <div className="stat">
                                <i className="fas fa-users"></i>
                                <span>2,500+ Students</span>
                              </div>
                              <div className="stat">
                                <i className="fas fa-play-circle"></i>
                                <span>15 Courses</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="instructor-bio">
                          <h4>About the Instructor</h4>
                          <p>
                            Experienced instructor with expertise in {course.topics.slice(0, 3).join(', ')}, 
                            and other related technologies. With over 10 years in the industry, brings 
                            real-world experience to help students master complex concepts through 
                            practical examples and hands-on projects.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Inquiry Modal */}
      {showInquiryModal && course && (
        <InquiryModal 
          isOpen={showInquiryModal} 
          onClose={() => setShowInquiryModal(false)}
          course={course}
          onEnrollmentSuccess={handleEnrollmentSuccess}
        />
      )}
    </div>
  );
};

export default CourseDetails;