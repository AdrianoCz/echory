import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'; 

function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(true); 
  const navigate = useNavigate();
  const home = () => {navigate('/profile/1')}

  return (
    <div className="home-container">
      {isOpen && (
        <div className={`wrapper ${isActive ? 'active' : ''}`}>
          <span className="icon-close" onClick={() => setIsOpen(false)}>
            &times;
          </span>

    
          <div className="form-box login">
            <h2>Welcome</h2>
            <form onSubmit={home} action="#">
              <div className="input-box">
                <input type="email" required placeholder=" " />
                <label>Email address</label>
              </div>
              <div className="input-box">
                <input type="password" required placeholder=" " />
                <label>Password</label>
              </div>
              <div className="remember-forget">
                <a href="#forgot">Forgot Password?</a>
              </div>
              <button type="submit" className="btn">Login</button>
              <div className="login-register">
                <p>
                  Don't have an account?{' '}
                  <a href="#register" className="register-link" onClick={() => setIsActive(true)}>
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>

        
          <div className="form-box register">
            <h2>Register</h2>
            <form action="#">
              <div className="input-box">
                <input type="text" required placeholder=" " />
                <label>Username</label>
              </div>
              <div className="input-box">
                <input type="email" required placeholder=" " />
                <label>Email address</label>
              </div>
              <div className="input-box">
                <input type="password" required placeholder=" " />
                <label>Password</label>
              </div>
              <button type="submit" className="btn">Register</button>
              <div className="login-register">
                <p>
                  Already have an account?{' '}
                  <a href="#login" className="login-link" onClick={() => setIsActive(false)}>
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;