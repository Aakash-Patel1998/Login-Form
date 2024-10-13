import React, { useState } from 'react';

export default function Authform() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button 
            className={isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? 'active' : ''} 
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {isLogin && (
          <div className='form'>
            <h2>Login Form</h2>
            <label>Email:</label>
            <input type='email' placeholder='Enter your email' />
            <label>Password:</label>
            <input type='password' placeholder='Enter your password' />
            <a href='#'>Forgot Password?</a>
            <button>Login</button>
            <p>
              Not a member? <a href='#' onClick={() => setIsLogin(false)}>Sign Up now</a>
            </p>
          </div>
        )}

        {/* Sign Up Form */}
        {!isLogin && (
          <div className='form'>
            <h2>Sign Up Form</h2>
            <label>Email:</label>
            <input type='email' placeholder='Enter your email' />
            <label>Password:</label>
            <input type='password' placeholder='Enter your password' />
            <label>Confirm Password:</label>
            <input type='password' placeholder='Confirm your password' />
            <button>Sign Up</button>
            <p>
              Already a member? <a href='#' onClick={() => setIsLogin(true)}>Log in</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
