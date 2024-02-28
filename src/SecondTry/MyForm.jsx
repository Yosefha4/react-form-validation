import React, { useState } from "react";
import InputItem from "./InputItem";
import "./Second.css";

const MyForm = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [userBday, setUserBday] = useState(new Date());

  const [errorState, setErrorState] = useState({
    userNameState: true,
    userEmailState: true,
    userIDState: true,
    userBdayState: true,
  });

  // useEffect(() => {
  //     changeFormValidate();
  // },[userName,userEmail])

  const validateUserAge = () => {
    const today = new Date();
    const userDate = new Date(userBday);
    let currentAge = today.getFullYear() - userDate.getFullYear();
    const monthDiff = today.getMonth() - userDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < userDate.getDate())
    ) {
      currentAge--;
    }
    return currentAge >= 18 ;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeFormValidate();
    console.log(validateUserAge());
    // alert("Click!" + userName + " + " + userEmail)
  };

  const changeFormValidate = () => {
    const idRegex = /^\d{9}$/;

    setErrorState((prevState) => ({
      ...prevState,
      userNameState: userName.length > 2,
      userEmailState: userEmail.length > 2,
      userIDState: idRegex.test(userId),
      userBdayState: validateUserAge(),
    }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Second Form</h2>
      <InputItem
        name="userName"
        label="User Name"
        inpuType="text"
        placeholder="Enter User Name"
        changeFunc={setUserName}
        errorMsg="Invalid User Name"
        errFlag={errorState.userNameState}
      />
      <InputItem
        name="userEmail"
        label="Email"
        inpuType="text"
        placeholder="Enter User Email"
        changeFunc={setUserEmail}
        errorMsg="Invalid User Email"
        errFlag={errorState.userEmailState}
      />
      <InputItem
        name="userId"
        label="ID"
        inpuType="text"
        placeholder="Enter User ID"
        changeFunc={setUserId}
        errorMsg="Invalid User ID"
        errFlag={errorState.userIDState}
      />
      <InputItem
        name="userBday"
        label="Birth Day"
        inpuType="Date"
        placeholder="Enter User B-Day"
        changeFunc={setUserBday}
        errorMsg="Invalid User B-Day"
        errFlag={errorState.userBdayState}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
