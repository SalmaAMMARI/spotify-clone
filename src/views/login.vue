<template>
  <div class="login-container">
    <div class="background-overlay"></div>
    
    <div class="login-box">
      <div class="logo">
        <svg viewBox="0 0 24 24" width="40" height="40">
          <path fill="#1DB954" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
        <h1>Spotify</h1>
      </div>
      
      <h2>Log in to Spotify</h2>
      
      <div class="social-login">
        <button class="social-button google">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google">
          Continue with Google
        </button>
        <button class="social-button facebook">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook">
          Continue with Facebook
        </button>
        <button class="social-button apple">
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Continue with Apple
        </button>
      </div>
      
      <div class="divider">
        <span>or</span>
      </div>
      
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email address or username</label>
          <input 
            type="text" 
            id="email" 
            v-model="email" 
            required
            placeholder="name@domain.com or username"
          >
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            required
            placeholder="Enter your password"
          >
        </div>
        
        <div class="remember-me">
          <label>
            <input type="checkbox" v-model="rememberMe">
            Remember me
          </label>
        </div>
        
        <button type="submit" class="login-button">Log In</button>
        
        <router-link to="/forgot-password" class="forgot-password">
          Forgot your password?
        </router-link>
        
        <div class="signup-link">
          Don't have an account? <router-link to="/signup">Sign up for Spotify</router-link>.
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const handleLogin = () => {
  // Here you would typically authenticate with your backend
  // For this example, we'll just redirect after a short delay
  
  // Simulate API call
  setTimeout(() => {
    router.push('/home')
  }, 1000)
  
  // In a real app, you would do something like:
  /*
  authService.login({
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value
  })
  .then(() => {
    router.push('/home')
  })
  .catch(error => {
    console.error('Login failed:', error)
    // Show error to user
  })
  */
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://www-growth.scdn.co/static/home/bursts-mobile.svg') center/cover;
  color: white;
  position: relative;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.login-box {
  background-color: #000;
  padding: 32px;
  border-radius: 8px;
  width: 100%;
  max-width: 450px;
  z-index: 1;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.logo h1 {
  margin-left: 10px;
  font-size: 28px;
  font-weight: 700;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 400;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border-radius: 500px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s;
}

.social-button img, .social-button svg {
  width: 20px;
  height: 20px;
}

.social-button.google {
  background-color: white;
  color: #535353;
}

.social-button.google:hover {
  background-color: #f2f2f2;
}

.social-button.facebook {
  background-color: #1877F2;
  color: white;
}

.social-button.facebook:hover {
  background-color: #166FE5;
}

.social-button.apple {
  background-color: black;
  color: white;
  border: 1px solid #878787;
}

.social-button.apple:hover {
  background-color: #121212;
}

.divider {
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #a7a7a7;
  font-size: 14px;
}

.divider::before, .divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #535353;
}

.divider span {
  padding: 0 16px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #535353;
  background-color: #121212;
  color: white;
  font-size: 14px;
}

input:focus {
  border-color: #1DB954;
  outline: none;
}

.remember-me {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.remember-me label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  cursor: pointer;
}

.remember-me input {
  width: auto;
  margin: 0;
}

.login-button {
  background-color: #1DB954;
  color: white;
  border: none;
  border-radius: 500px;
  padding: 14px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #1ed760;
}

.forgot-password {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #a7a7a7;
  text-decoration: none;
}

.forgot-password:hover {
  color: white;
  text-decoration: underline;
}

.signup-link {
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
  color: #a7a7a7;
}

.signup-link a {
  color: white;
  text-decoration: none;
}

.signup-link a:hover {
  color: #1DB954;
  text-decoration: underline;
}
</style>