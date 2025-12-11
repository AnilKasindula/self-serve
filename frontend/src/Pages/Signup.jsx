import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        otp: "",
    });

    const [otpSent, setOtpSent] = useState(false);
    const [errors, setErrors] = useState({});

    const usernameRegex = /^[A-Za-z0-9_]+$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const mobileRegex = /^[0-9]{10}$/;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendOtp = () => {
        if (!mobileRegex.test(form.mobile)) {
            setErrors({ mobile: "Enter valid 10-digit mobile number" });
            return;
        }
        setErrors({});
        setOtpSent(true);

        alert("OTP sent (simulation)");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let temp = {};

        if (!usernameRegex.test(form.username)) {
            temp.username = "Only letters, numbers, underscore allowed";
        }

        if (!emailRegex.test(form.email)) {
            temp.email = "Invalid email format";
        }

        if (!mobileRegex.test(form.mobile)) {
            temp.mobile = "Invalid mobile number";
        }

        if (!passwordRegex.test(form.password)) {
            temp.password = "Password must contain uppercase, lowercase, number and min 6 chars";
        }

        if (form.password !== form.confirmPassword) {
            temp.confirmPassword = "Passwords do not match";
        }

        if (!form.terms) {
            temp.terms = "You must accept Terms and Conditions";
        }

        if (!otpSent || !form.otp) {
            temp.otp = "Please verify mobile with OTP";
        }

        setErrors(temp);

        if (Object.keys(temp).length === 0) {
            alert("Signup Successful! (simulation)");
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-box" onSubmit={handleSubmit}>
                <h2>Create Account</h2>

                {/* USERNAME */}
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                />
                {errors.username && <p className="error">{errors.username}</p>}

                {/* EMAIL */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                {/* MOBILE + OTP */}
                <div className="mobile-otp">
                    <input
                        type="text"
                        name="mobile"
                        placeholder="Mobile Number"
                        value={form.mobile}
                        onChange={handleChange}
                    />
                    <button type="button" onClick={sendOtp} className="otp-btn">
                        {otpSent ? "Resend OTP" : "Send OTP"}
                    </button>
                </div>
                {errors.mobile && <p className="error">{errors.mobile}</p>}

                {otpSent && (
                    <>
                        <input
                            type="text"
                            name="otp"
                            placeholder="Enter OTP"
                            value={form.otp}
                            onChange={handleChange}
                        />
                        {errors.otp && <p className="error">{errors.otp}</p>}
                    </>
                )}

                {/* PASSWORD */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}

                {/* CONFIRM PASSWORD */}
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

                {/* TERMS */}
                <label className="terms">
                    <input
                        type="checkbox"
                        name="terms"
                        checked={form.terms}
                        onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                    />
                    <span>I agree to the Terms & Conditions</span>
                </label>
                {errors.terms && <p className="error">{errors.terms}</p>}

                {/* SUBMIT */}
                <button type="submit" className="signup-btn">Sign Up</button>

                <p className="login-text">
                    Already have an account? <a href="/login">Login</a>
                </p>

                {/* SOCIAL AUTH */}
                <div className="social-auth">
                    <button className="google">Continue with Google</button>
                    <button className="facebook">Continue with Facebook</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
