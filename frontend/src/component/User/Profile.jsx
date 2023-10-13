import React, { useEffect } from "react";
import MetaData from "../Layout/MetaData";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Layout/Loader/Loader";
import "./Profile.css";
import { logout } from "../../store/actions/userAction";
import { useAlert } from "react-alert";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EditIcon from "@material-ui/icons/Edit";
import LockOpenIcon from "@material-ui/icons/LockOpen";

const Profile = () => {
  const navigate = useNavigate();
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const alert = useAlert();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  function logoutUser() {
    // Call the logout action to clear the user state
    dispatch(logout());

    // Delete the "token" cookie
    document.cookie =
      "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.shoptrick.onrender.com; path=/;";

    alert.success("Logout Successfully");
    navigate("/login");
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container">
            <MetaData title={`${user.name}'s Profile`} />
            <div className="profileContainer">
              <div className="profileInfo">
                <div>
                  <h3>{user.name}</h3>
                </div>
                <div className="emailDateRow">
                  <div>
                    <h4>Email</h4>
                    <p>{user.email}</p>
                  </div>

                  <div>
                    <h4>Joined On</h4>
                    <p>{String(user.createdAt).substr(0, 10)}</p>
                  </div>
                </div>
                <div className="links">
                  <Link className="change-password" to="/password/update">
                    <LockOpenIcon />
                    <p>Change Password</p>
                  </Link>
                  <Link className="edit-profile" to="/me/update">
                    <EditIcon />
                    <p>Edit Profile</p>
                  </Link>
                  <Link className="edit-profile">
                    <ExitToAppIcon />
                    <p onClick={logoutUser}>Logout</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
