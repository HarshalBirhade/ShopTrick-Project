import React, { useState } from "react";
import "./UserOptions.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import { FaPlus, FaTable, FaUser, FaMinus, FaDashcube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../../store/actions/userAction";
import { useDispatch } from "react-redux";

function UserOptions({ user }) {
  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const options = [
    { icon: <FaTable />, name: "Orders", func: orders },
    { icon: <FaUser />, name: "Profile", func: account },
    { icon: <FaMinus />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <FaDashcube />,
      name: "Dashbaord",
      func: dashboard,
    });
  }

  function dashboard() {
    navigate("/dasboard");
  }
  function orders() {
    navigate("/orders");
  }
  function account() {
    navigate("/account");
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Succesfully");
  }
  return (
    <>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={<FaPlus className="speedDialIcon" />}
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
          ></SpeedDialAction>
        ))}
      </SpeedDial>
    </>
  );
}

export default UserOptions;
