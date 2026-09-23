
import { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });

    // Remove error while typing
    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess("");
  };

  // Password strength
  const getPasswordStrength = () => {
    const password = form.password;

    if (password.length === 0) return "";
    if (password.length < 6) return "Weak";
    if (
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password)
    ) {
      return "Strong";
    }

    return "Medium";
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (form.name.length < 3) {
      newErrors.name = "Name must contain at least 3 characters";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Phone number must contain 10 digits";
    }

    if (!form.age) {
      newErrors.age = "Age is required";
    } else if (form.age < 18 || form.age > 60) {
      newErrors.age = "Age must be between 18 and 60";
    }

    if (!form.gender) {
      newErrors.gender = "Please select your gender";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!form.terms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("Registration successful! 🎉");

      console.log("Form Data:", form);

      setForm({
        name: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
    }
  };

  // Reset
  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      password: "",
      confirmPassword: "",
      terms: false,
    });

    setErrors({});
    setSuccess("");
  };

  const strength = getPasswordStrength();

  return (
    <div className="page">
      <div className="form-container">

        <div className="form-header">
          <h1>Create Account</h1>
          <p>Register your account with us</p>
        </div>

        {success && <div className="success">{success}</div>}

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
            />

            {errors.name && (
              <span className="error">{errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="input-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="error">{errors.email}</span>
            )}
          </div>

          {/* Phone */}
          <div className="input-group">
            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              placeholder="10 digit mobile number"
              value={form.phone}
              onChange={handleChange}
              maxLength="10"
            />

            {errors.phone && (
              <span className="error">{errors.phone}</span>
            )}
          </div>

          {/* Age */}
          <div className="input-group">
            <label>Age</label>

            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={form.age}
              onChange={handleChange}
            />

            {errors.age && (
              <span className="error">{errors.age}</span>
            )}
          </div>

          {/* Gender */}
          <div className="input-group">
            <label>Gender</label>

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>

            {errors.gender && (
              <span className="error">{errors.gender}</span>
            )}
          </div>

          {/* Password */}
          <div className="input-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {form.password && (
              <div className={`strength ${strength.toLowerCase()}`}>
                Password Strength: {strength}
              </div>
            )}

            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              value={form.confirmPassword}
              onChange={handleChange}
            />

            {errors.confirmPassword && (
              <span className="error">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          {/* Terms */}
          <div className="terms">
            <input
              type="checkbox"
              name="terms"
              checked={form.terms}
              onChange={handleChange}
            />

            <span>
              I agree to the Terms and Conditions
            </span>
          </div>

          {errors.terms && (
            <span className="error">{errors.terms}</span>
          )}

          {/* Buttons */}
          <div className="buttons">
            <button type="submit" className="submit-btn">
              Register
            </button>

            <button
              type="button"
              className="reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;

