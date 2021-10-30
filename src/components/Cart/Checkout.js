import classes from "./Checkout.module.css";
import React, { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  //  for storing user input value by Ref
  const userInputNameRef = useRef();
  const userInputStreetRef = useRef();
  const userInputPostalRef = useRef();
  const userInputCityRef = useRef();

  // if all the above value is true than the overallFormValidation is true

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = userInputNameRef.current.value;
    const enteredStreet = userInputStreetRef.current.value;
    const enteredPostalCode = userInputPostalRef.current.value;
    const enteredCity = userInputCityRef.current.value;
    // for valadating User iNput value
    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = !isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      // submit the cart data
      return;
    }

    props.onConfirm({name:enteredName,
    street:enteredStreet,
  city:enteredCity,
postalCode:enteredPostalCode});
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={userInputNameRef} />
        {!formInputsValidity.name && <p>Name field must not be empty </p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={userInputStreetRef} />
        {!formInputsValidity.street && <p>street field must not be empty </p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={userInputPostalRef} />
        {!formInputsValidity.postalCode && (
          <p>Postal Code field must not be empty </p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={userInputCityRef} />
        {!formInputsValidity.city && <p>City field must not be empty </p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
