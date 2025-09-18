import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const AppHeader = () => {
    const [displayusername, displayusernameupdate] = useState('');
    const [showmenu, showmenuupdateupdate] = useState(false);
    const usenavigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            showmenuupdateupdate(false);
        } else {
            showmenuupdateupdate(true);
            let username = sessionStorage.getItem('username');
            if (!username) {
                usenavigate('/login');
            } else {
                displayusernameupdate(username);
            }
        }
    }, [location, usenavigate]);
    return (
        showmenu &&
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/customer">Customer</Link>
            <span style={{ marginLeft: '70%' }}>
                Welcome <b>{displayusername}</b>
            </span>
            <Link style={{ float: 'right' }} to="/login">
                Logout
            </Link>
        </div>
    );
};
export default AppHeader;
