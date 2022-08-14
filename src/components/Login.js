import React from "react";
import "./style.css";
import logo from "../assets/img/logo.png";
import dino from "../assets/img/dino.jpg";

const Login = () => {
  return (
	<>
	<div className="main">
		<div className="logo">
			<a href="#"><img src={logo} alt="logo"/></a>
		</div>
		<form>
			<div className="user_input">
				<input type="text" placeholder="Username" required/>
			</div>
			<div className="user_input">
				<input type="password" placeholder="Password" required/>
			</div>
			<div className="forgot"><p>Lupa Password?</p></div>
			<input type="submit" value="GO"/>
			<div className="signup">
				Belum punya akun? <a href="#">Sign Up</a>
			</div>
		</form>
	</div>
	<div className="dino">
		<img src={dino} alt="dino"/>
	</div>
	</>
  );
};

export default Login;
