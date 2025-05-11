<template>
  <div class="homepage-container">
    <!-- Hero Section with Background -->
    <div class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <nav class="navbar">
          <div class="logo">
            <svg viewBox="0 0 24 24" width="40" height="40">
              <path fill="#1DB954" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            <span>Spotify</span>
          </div>
          <div class="nav-links">
            <router-link to="/login" class="nav-link">Log in</router-link>
          </div>
        </nav>
        
        <div class="hero-text">
          <h1>Millions of songs. Free on Spotify.</h1>
          <div class="cta-buttons">
            <router-link to="/signup" class="cta-button">Sign up free</router-link>
            <router-link to="/login" class="cta-button-outline">Continue with Google</router-link>
            <router-link to="/login" class="cta-button-outline">Continue with Facebook</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Signup Form Section -->
    <div class="signup-section">
      <div class="signup-box">
        <h2>Sign up for free to start listening.</h2>
        
        <form @submit.prevent="handleSignup" class="signup-form">
          <div class="form-group">
            <label for="email">Email address</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              required
              placeholder="name@domain.com"
            >
          </div>
          
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              required
              placeholder="Enter a password"
              minlength="8"
            >
          </div>
          
          <div class="form-group">
            <label for="displayName">Display name</label>
            <input 
              type="text" 
              id="displayName" 
              v-model="displayName" 
              required
              placeholder="What should we call you?"
            >
          </div>
          
          <div class="form-group">
            <label for="dob">Date of birth</label>
            <div class="dob-inputs">
              <select id="month" v-model="month" required>
                <option value="" disabled>Month</option>
                <option v-for="(m, index) in months" :value="index+1" :key="m">{{ m }}</option>
              </select>
              <input type="number" id="day" v-model="day" placeholder="Day" min="1" max="31" required>
              <input type="number" id="year" v-model="year" placeholder="Year" min="1900" :max="new Date().getFullYear()" required>
            </div>
          </div>
          
          <div class="form-group radio-group">
            <label>Gender</label>
            <div class="radio-options">
              <label>
                <input type="radio" name="gender" v-model="gender" value="male" required>
                Male
              </label>
              <label>
                <input type="radio" name="gender" v-model="gender" value="female">
                Female
              </label>
              <label>
                <input type="radio" name="gender" v-model="gender" value="non-binary">
                Non-binary
              </label>
              <label>
                <input type="radio" name="gender" v-model="gender" value="other">
                Other
              </label>
            </div>
          </div>
          
          <button type="submit" class="signup-button">Sign Up</button>
          
          <div class="login-link">
            Already have an account? <router-link to="/login">Log in</router-link>.
          </div>
        </form>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features-section">
      <h2>Why choose Spotify?</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🎵</div>
          <h3>Millions of songs</h3>
          <p>Enjoy your favorite tracks and discover new music.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎧</div>
          <h3>Stream anywhere</h3>
          <p>Listen on your phone, tablet, or computer.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>Free forever</h3>
          <p>No credit card needed to enjoy our service.</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="logo">
          <svg viewBox="0 0 24 24" width="40" height="40">
            <path fill="#1DB954" d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          <span>Spotify</span>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Jobs</a>
            <a href="#">For the Record</a>
          </div>
          <div class="footer-column">
            <h4>Communities</h4>
            <a href="#">For Artists</a>
            <a href="#">Developers</a>
            <a href="#">Advertising</a>
          </div>
          <div class="footer-column">
            <h4>Useful links</h4>
            <a href="#">Support</a>
            <a href="#">Web Player</a>
            <a href="#">Free Mobile App</a>
          </div>
        </div>
        <div class="social-icons">
          <a href="#"><i class="icon-instagram"></i></a>
          <a href="#"><i class="icon-twitter"></i></a>
          <a href="#"><i class="icon-facebook"></i></a>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="legal-links">
          <a href="#">Legal</a>
          <a href="#">Privacy Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </div>
        <div class="copyright">
          © 2023 Spotify AB
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomepageWithSignup',
  data() {
    return {
      email: '',
      password: '',
      displayName: '',
      month: '',
      day: '',
      year: '',
      gender: '',
      months: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]
    }
  },
  methods: {
    handleSignup() {
      // Simulate API call
      setTimeout(() => {
        this.$router.push('/home');
      }, 1000);
    }
  }
}
</script>

<style scoped>
.homepage-container {
  font-family: 'Circular', Helvetica, Arial, sans-serif;
  color: white;
}

/* Hero Section */
.hero-section {
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('https://www-growth.scdn.co/static/home/bursts-tablet.svg') center/cover;
  position: relative;
  display: flex;
  flex-direction: column;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 20px 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
}

.logo svg {
  margin-right: 10px;
}

.nav-links {
  display: flex;
  align-items: center;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 700;
  padding: 12px 32px;
  border-radius: 500px;
  border: 1px solid white;
  transition: all 0.3s ease;
}

.nav-link:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.1);
}

.hero-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-bottom: 100px;
}

.hero-text h1 {
  font-size: 72px;
  font-weight: 900;
  margin-bottom: 40px;
  line-height: 1.2;
  max-width: 800px;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 400px;
}

.cta-button, .cta-button-outline {
  padding: 16px;
  border-radius: 500px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button {
  background-color: #1DB954;
  color: white;
}

.cta-button:hover {
  background-color: #1ed760;
  transform: scale(1.05);
}

.cta-button-outline {
  border: 1px solid white;
  color: white;
}

.cta-button-outline:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: scale(1.05);
}

/* Signup Section */
.signup-section {
  padding: 80px 20px;
  background-color: black;
  display: flex;
  justify-content: center;
}

.signup-box {
  background-color: #121212;
  padding: 40px;
  border-radius: 8px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.signup-box h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: 700;
}

.signup-form {
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

input, select {
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #535353;
  background-color: #282828;
  color: white;
  font-size: 14px;
}

input:focus, select:focus {
  border-color: #1DB954;
  outline: none;
}

.dob-inputs {
  display: flex;
  gap: 10px;
}

.dob-inputs select, .dob-inputs input {
  flex: 1;
}

.radio-group label {
  font-weight: 400;
  margin-bottom: 12px;
}

.radio-options {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.radio-options label {
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 400;
  cursor: pointer;
}

.radio-options input {
  width: auto;
}

.signup-button {
  background-color: #1DB954;
  color: white;
  border: none;
  border-radius: 500px;
  padding: 16px;
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.signup-button:hover {
  background-color: #1ed760;
}

.login-link {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #a7a7a7;
}

.login-link a {
  color: white;
  text-decoration: none;
}

.login-link a:hover {
  color: #1DB954;
  text-decoration: underline;
}

/* Features Section */
.features-section {
  padding: 80px 20px;
  background-color: #121212;
  text-align: center;
}

.features-section h2 {
  font-size: 36px;
  margin-bottom: 60px;
  font-weight: 700;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  padding: 30px;
  border-radius: 8px;
  background-color: #181818;
  transition: all 0.3s ease;
}

.feature-card:hover {
  background-color: #282828;
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.feature-card p {
  color: #b3b3b3;
  line-height: 1.6;
}

/* Footer */
.footer {
  background-color: #000;
  padding: 60px 20px 30px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.footer-column h4 {
  color: #919496;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 20px;
  letter-spacing: 1px;
}

.footer-column a {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 15px;
  font-size: 14px;
}

.footer-column a:hover {
  color: #1DB954;
}

.social-icons {
  display: flex;
  justify-content: flex-end;
  gap: 20px;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #222326;
  border-radius: 50%;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background-color: #1DB954;
  transform: scale(1.1);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #282828;
  padding-top: 30px;
}

.legal-links {
  display: flex;
  gap: 20px;
}

.legal-links a {
  color: #919496;
  text-decoration: none;
  font-size: 12px;
}

.legal-links a:hover {
  color: #1DB954;
}

.copyright {
  color: #919496;
  font-size: 12px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 48px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
  }
  
  .social-icons {
    justify-content: flex-start;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 20px;
    text-align: center;
  }
  
  .legal-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>