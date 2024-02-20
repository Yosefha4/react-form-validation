/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userGender, setUserGender] = useState("לא מסומן");

  const [errorInputMsg, setErrorInputMsg] = useState({
    userFirst: false,
    userLast: false,
    userId: false,
    userEmail: false,
  });

  useEffect(()=>{
    validateInputs();
  },[userFirstName,userLastName,userId,userEmail])

  const validateInputs = () => {
    //Regular expr to check the ID
    const idRegex = /^\d{9}$/;

    // Update errorInputMsg state based on validation results
    setErrorInputMsg((prevState) => ({
      ...prevState,
      userFirst: userFirstName.length < 3 || userFirstName.length > 11,
      userLast: userLastName.length < 3 || userLastName.length > 11,
      userId: !idRegex.test(userId),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Regular expr to check the ID
  const idRegex = /^\d{9}$/;

  // Check if all inputs are valid
  const isValid =
    userFirstName.length >= 3 &&
    userFirstName.length <= 11 &&
    userLastName.length >= 3 &&
    userLastName.length <= 11 &&
    idRegex.test(userId);

  if (isValid) {
    // All inputs are valid, show alert
    alert("All inputs are valid!");
  } else {
    // Update errorInputMsg state based on validation results
    setErrorInputMsg(prevState => ({
      ...prevState,
      userFirst: userFirstName.length < 3 || userFirstName.length > 11,
      userLast: userLastName.length < 3 || userLastName.length > 11,
      userId: !idRegex.test(userId)
    }));
  }
  };

  const handleResetData = () => {
    // I can put in all the states an empty string , but 'window.location.reload' make it auto.
    window.location.reload();
    // setUserFirstName("")
    // setUserLastName("")
    // setUserId("")
    // setUserEmail("")
    // setUserGender("")
  };

  return (
    <div className="App">
      <form className="container" onSubmit={handleSubmit}>
        <h3>פרטים אישיים</h3>
        <div className="form-row">
          <FormInput
            type="text"
            placeholder="הכנס שם משפחה"
            label="שם משפחה"
            name="userLastName"
            changeFunc={setUserLastName}
            errFlag={errorInputMsg.userLast}
            errorMessage={"מחרוזת חייבת להיות יותר מ-3 תווים ועד - 10"}
          />
          <FormInput
            type="text"
            placeholder="הכנס שם פרטי"
            label="שם פרטי"
            name="userFirstName"
            changeFunc={setUserFirstName}
            errorMessage={"מחרוזת חייבת להיות יותר מ-3 תווים ועד - 10"}
            errFlag={errorInputMsg.userFirst}
          />
        </div>
        <div className="form-row">
          <FormInput
            type="text"
            name="userId"
            placeholder="תעודת זהות"
            label="תעודת זהות"
            changeFunc={setUserId}
            errorMessage="מספר זהות לא חוקי"
            errFlag={errorInputMsg.userId}
          />
          <FormInput
            type="email"
            name="userEmail"
            placeholder="כתובת מייל"
            label="כתובת אימייל"
            changeFunc={setUserEmail}
            errorMessage="כתובת אימייל לא תקינה"
            errFlag={errorInputMsg.userEmail}
          />
        </div>
        <h3>מין</h3>
        <div className="genderbox">
          <div className="genderInput">
            <input
              type="radio"
              name="gender"
              value="Male"
              id="male"
              onChange={(e) => setUserGender(e.target.value)}
            />
            <span>זכר</span>
          </div>
          <div className="genderInput">
            <input
              type="radio"
              name="gender"
              value="Female"
              id="female"
              onChange={(e) => setUserGender(e.target.value)}
            />
            <span>נקבה</span>
          </div>
        </div>
        <div className="buttons">
          <button className="btn" onClick={handleResetData}>
            איפוס
          </button>
          <button className="btn">סיום</button>
        </div>
      </form>
    </div>
  );
}

export default App;
