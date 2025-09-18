import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [country, countrychange] = useState("india");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("female");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (!id) {
      isproceed = false;
      errormessage += "Username ";
    }
    if (!name) {
      isproceed = false;
      errormessage += "Fullname ";
    }
    if (!password) {
      isproceed = false;
      errormessage += "Password ";
    }
    if (!email) {
      isproceed = false;
      errormessage += "Email ";
    }
    if (!isproceed) {
      toast.warning(errormessage);
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      isproceed = false;
      toast.warning("Please enter a valid email");
    }
    return isproceed;
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, phone, country, address, gender };
    if (IsValidate()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regobj),
      })
        .then(() => {
          toast.success("Registered successfully.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  };

  return (
    <div className="offset-lg-3 col-lg-6" style={{ marginTop: 30 }}>
      <form className="container" onSubmit={handlesubmit}>
        <div className="card">
          <div className="card-header">
            <h1>User Registration</h1>
          </div>
          <div className="card-body">
            <div className="form-group mb-3">
              <label>User Name *</label>
              <input value={id} onChange={e => idchange(e.target.value)} className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Password *</label>
              <input value={password} onChange={e => passwordchange(e.target.value)} type="password" className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Full Name *</label>
              <input value={name} onChange={e => namechange(e.target.value)} className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Email *</label>
              <input value={email} onChange={e => emailchange(e.target.value)} className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Phone</label>
              <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Country *</label>
              <select value={country} onChange={e => countrychange(e.target.value)} className="form-control">
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="singapore">Singapore</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label>Address</label>
              <textarea value={address} onChange={e => addresschange(e.target.value)} className="form-control" />
            </div>
            <div className="form-group mb-3">
              <label>Gender</label><br />
              <input type="radio" checked={gender === "male"} onChange={e => genderchange(e.target.value)} name="gender" value="male" className="app-check" /> Male&nbsp;&nbsp;
              <input type="radio" checked={gender === "female"} onChange={e => genderchange(e.target.value)} name="gender" value="female" className="app-check" /> Female
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary me-2">Register</button>
            <Link to={"/login"} className="btn btn-danger">Close</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
