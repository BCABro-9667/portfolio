import { useNavigate } from "react-router-dom";
import '../styles/error404.css';

function Error404() {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p className="error-message">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <p className="project-location">
        Currently this project is running on local computer.
      </p>
      <button 
        className="home-button"
        onClick={() => navigate("/")}
      >
        Return Home
      </button>
    </div>
  );
}

export default Error404;