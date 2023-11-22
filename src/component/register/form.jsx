import React from "react";
import "./Register.jsx";
import star from "./img/star.svg";
import sStar from "./img/star pu.svg";
import { useState } from "react";
// import { useRef } from "react";

// For form submission, there are 3 ways to do it
// 1. useRef (this alters the DOMException, its easier but not really efficient)
// 2. useState (this is better)
// 3. FormData( this is the 2nd best), resetting can be done by doing just event.target.reset()

// For input validation on every keystroke, State is most preferred

const Form = () => {
  // const name = useRef();
  // const phone = useRef();
  // const email = useRef();
  // const topic = useRef();
  // // const [enterName, setEnterName] = useState("");
  // const [enterPhone, setEnterPhone] = useState("");
  // const [enterEmail, setEnterEmail] = useState("");
  // const [enterTopic, setEnterTopic] = useState("");

  const [enteredValue, setEnteredValue] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "",
  });

  const valueHandler = (identifier, value) => {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  };
  const validEmail =
    enteredValue.email !== "" && !enteredValue.email.includes("@");
  // const nameInputHandler = (event) => {
  //   setEnterName(event.target.value);
  // };

  // const phoneInputHandler = (event) => {
  //   setEnterPhone(event.target.value);
  // };

  const formSubmission = (event) => {
    event.preventDefault();
    console.log(enteredValue);
    setEnteredValue({
      name: "",
      phone: "",
      email: "",
      topic: "",
    });
    // const enteredName = name.current.value;
    // const enteredPhone = phone.current.value;
    // const enteredEmail = email.current.value;
    // const enteredTopic = topic.current.value;

    // console.log(enteredName, enteredPhone, enteredEmail, enteredTopic);

    // formData method
    //   const fd = new FormData(event.target);
    //   const group = fd.getAll("group");
    //   const data = Object.fromEntries(fd.entries());
    //   data.group = group;
    //   console.log(data);
    //   event.target.reset();
  };

  // console.log(enterName);
  // console.log(enterPhone);
  // console.log("submitted!");

  // console.log(enterName);
  // if (enterName.trim() === " ") {
  //   return;
  // }
  // const enteredName = inputHandler.current.value;
  // console.log(enteredName);

  // setEnterName("");

  // console.log(enterPhone);
  // setEnterPhone("");
  const submit =
    "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)";
  return (
    <form
      onSubmit={formSubmission}
      className="  w-full flex   flex-col gap-2 mt-6"
    >
      <div className="name flex flex-col gap-3">
        <label htmlFor="name">Team's Name</label>
        <input
          // ref={name}
          type="text"
          name="name"
          placeholder="Enter the name of your group"
          className="bg-input"
          onChange={(event) => valueHandler("name", event.target.value)}
          value={enteredValue.name}
        />
      </div>

      <img src={star} alt="star" className="absolute left-7 top-[50%]  " />

      <div className="number flex flex-col gap-3">
        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          // ref={phone}
          name="phone"
          placeholder="Enter your phone number"
          className="bg-input"
          onChange={(event) => valueHandler("phone", event.target.value)}
          value={enteredValue.phone}
        />
      </div>
      <div className="mail flex flex-col gap-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          // ref={email}
          placeholder="Enter your email address"
          className="bg-input"
          value={enteredValue.email}
          onChange={(event) => valueHandler("email", event.target.value)}
        />
        <div>{validEmail && <p>Please enter a valid email</p>}</div>
      </div>
      <div className="topic flex flex-col gap-3">
        <label htmlFor="topic">Project Topic</label>
        <input
          type="text"
          name="topic"
          // ref={topic}
          placeholder="What is your group project topic"
          className="bg-input"
          value={enteredValue.topic}
          onChange={(event) => valueHandler("topic", event.target.value)}
        />
      </div>
      <div className="  flex flex-row  gap-4">
        <section class="flex flex-col gap-2">
          <label htmlFor="category">Category</label>

          <select
            name="category"
            class="category bg-input"
            placeholder="Select your category"
          >
            <option value="web">Select your category</option>
            <option value="mobile">Mobile</option>
          </select>
        </section>

        <section class="flex flex-col gap-2">
          <label htmlFor="groupSize">Group Size</label>
          <img src={sStar} alt="star" class="absolute right-12" />

          <select name="group" class="category bg-input" placeholder="Select">
            <option name="group" value="3mb">
              Group Size
            </option>
            <option name="group" value="mobile">
              Mobile
            </option>
          </select>
        </section>
      </div>
      <p className="my-2 text-customPink italic text-[9px] leading-[10.97px]">
        Please review your registration details before submitting
      </p>

      <div className="flex flex-row items-start gap-4 justify-center">
        <input type="checkbox" class="" name="privacy" />
        <label htmlFor="privacy" className="text-[10px] leading-[12.19px] ">
          I agreed with the event terms and conditions and privacy policy
        </label>
      </div>

      <button
        // onClick={formHandlerSubmission}
        // type="button"
        className="w-1/2 flex text-center m-auto items-center justify-center text-[16px] px-14 py-4 rounded text-white  leading-[19.5px] font-mont font-normal"
        style={{
          background: submit,
        }}
      >
        Submit
      </button>
    </form>
  );
};
// };

export default Form;
