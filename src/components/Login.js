import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, usernameupdate] = useState('');
  const [password, passwordupdate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear(); // Clear session on component mount
  }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      // Fetch user by username/id
      fetch(`http://localhost:8000/user/${username}`)
        .then(res => res.json())
        .then(resp => {
          if (Object.keys(resp).length === 0) {
            toast.error('Please enter valid username');
          } else if (resp.password === password) {
            toast.success('Success');
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('userrole', resp.role);

            // Fetch role access permissions for this role
            fetch(`http://localhost:8000/roleaccess?role=${resp.role}`)
              .then(res => res.json())
              .then(rolePerms => {
                sessionStorage.setItem('roleaccess', JSON.stringify(rolePerms));
                navigate('/'); // Navigate after setting permissions
              })
              .catch(err => {
                toast.error('Failed to load role permissions: ' + err.message);
              });

          } else {
            toast.error('Please enter valid credentials');
          }
        })
        .catch(err => toast.error('Login failed due to: ' + err.message));
    }
  };

  const validate = () => {
    let result = true;
    if (!username) {
      result = false;
      toast.warning('Please enter Username');
    }
    if (!password) {
      result = false;
      toast.warning('Please enter Password');
    }
    return result;
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>User Name <span className="errmsg">*</span></label>
                <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control" />
              </div>
              <div className="form-group">
                <label>Password <span className="errmsg">*</span></label>
                <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control" />
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Login</button> |
              <Link className="btn btn-success" to="/register">New User</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
