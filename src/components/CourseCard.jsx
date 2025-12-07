import { Link, useNavigate } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  
  const formatPrice = (price) => {
    return `₹${price}`;
  };
  
  const handleEnterCourse = () => {
    navigate(`/courses/${course._id}`);
  };

  return (
    <div className="course-card card">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-content">
        <h3 className="course-title">{course.title}</h3>
        <p className="course-instructor">
          <i className="fas fa-user"></i> {course.instructor}
        </p>
        <p
          className="course-description"
          dangerouslySetInnerHTML={{
            __html:
              (course.description.length > 100)
                ? `${course.description.substring(0, 100)}...`
                : course.description,
          }}
        ></p>
        <div className="course-meta">
          <div className="course-rating">
            <i className="fas fa-star"></i>
            <span>{course.rating || 0}</span>
            {course.enrollmentCount && (
              <span className="enrollment-count">
                ({course.enrollmentCount}+ students)
              </span>
            )}
          </div>
          <div className="course-price">{formatPrice(course.price)} + GST</div>
        </div>
        <div className="course-footer">
          <span className="course-level">
            <i className="fas fa-signal"></i> {course.level}
          </span>
          <span className="course-duration">
            <i className="fas fa-clock"></i> {course.duration}
          </span>
        </div>
        <button
          className="btn btn-primary enter-course-btn"
          onClick={handleEnterCourse}
        >
          <i className="fas fa-arrow-right"></i> View Course
        </button>
      </div>
    </div>
  );
};

export default CourseCard; 