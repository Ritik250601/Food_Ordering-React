import React from "react";
// import mealsImage from '../../assets/meals.jpg';
import mealsImage2 from "../../assets/meals2.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Frankies</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage2} alt="A table full of delecious food" />
      </div>
    </>
  );
};

export default Header;
