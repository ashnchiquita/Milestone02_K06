import React from "react";

const Login = () => {
  return (
    <div class="main">
        <div class="logo">
            <a href="#"><img src="assets/logo.png" alt="logo"></a>
        </div>
        <form>
            <div class="user_input">
                <input type="text" placeholder="Username" required>
            </div>
            <div class="user_input">
                <input type="password" placeholder="Password" required>
            </div>
            <div class="forgot"><p>Lupa Password?</p></div>
            <input type="submit" value="GO">
            <div class="signup">
                Belum punya akun? <a href="#">Sign Up</a>
            </div>
        </form>
    </div>
    <div class="dino">
        <img src="assets/dino.jpg" alt="dino">
    </div>
  );
};

export default Login;
