import React from "react";
import Login from "../Login/Login"
import { NavLink, useNavigate, Link } from "react-router-dom";
import { Button, Container } from "./style";
import { Utils } from "../../Utils/index";
import logo from "../../Assets/logo/logo.svg";
import poisk from "../../Assets/imgs/poisk.svg";

function Navbar() {
  const nav = useNavigate();
  return (
    <Container>
      <div className="imgLogo">
        <img src={logo} alt="logo bor" />
      </div>
      <div className="navRight">
        {Utils.map((v) => (
          <NavLink
            className={({ isActive }) => (isActive ? "active link" : "link")}
            to={v.path}
          >
            {v.name}
          </NavLink>
        ))}
        <a href="#about" className="link">About</a>
        <a href="https://64e0d260c07fa0582c0ce218--fluffy-cranachan-d5dfbb.netlify.app/">
          <Button>Login</Button>
        </a>
        <Button>
          <p> Order Now </p>
        </Button>
        <a href="#search" className="Npoisk">
          <img src={poisk} alt="" />
        </a>
      </div>
    </Container>
  );
}

export default Navbar;
