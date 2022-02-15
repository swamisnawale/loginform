import "./App.css";
import { useRef, useState } from "react";
import hi from "./images/hi2.png";
function App() {
  const emailREGEX = /^.+@[^\.].*\.[a-z]{2,}$/;

  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");

  const [EborderColor, setEBorderColor] = useState("1px solid #e8e8e8");
  const [PborderColor, setPBorderColor] = useState("1px solid #e8e8e8");

  const emailInput = useRef(null);
  const passwordInput = useRef(null);

  const checkBlank = () => {
    if (emailValue === "" && passValue === "") {
      setPBorderColor("1px solid red");
      setEBorderColor("1px solid red");
    } else if (emailValue === "" || !emailREGEX.test(emailValue)) {
      emailInput.current.focus();
      setEBorderColor("1px solid red");
    } else if (passValue === "") {
      passwordInput.current.focus();
      setPBorderColor("1px solid red");
    } else {
      alert(`Email = ${emailValue} \nPassword = ${passValue}`);
    }
  };

  function CheckSpace(event) {
    if (event.which == 32) {
      event.preventDefault();
      return false;
    }
  }
  return (
    <div className="App">
      <form
        className="screen"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="leftSide">
          <img src={hi} />
        </div>
        <div className="rightSide">
          <div className="contents">
            <span className="subtitle">Welcome</span>
            <span className="title">Log in to your account</span>

            <div className="credentials">
              <label>Email:</label>
              <input
                autoComplete="false"
                style={{ border: EborderColor }}
                type="text"
                placeholder="john@email.com"
                ref={emailInput}
                onChange={(event) => {
                  setEBorderColor("1px solid #e8e8e8");
                  setEmailValue(event.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.charCode == 32) {
                    e.preventDefault();
                    alert("Empty Spaces Not Allowd 🚫");
                    return false;
                  }
                }}
              />
              <div className="emailErrorMsg"></div>
              <label>Password:</label>
              <input
                autoComplete="false"
                type="password"
                style={{ border: PborderColor }}
                ref={passwordInput}
                onChange={(event) => {
                  setPBorderColor("1px solid #e8e8e8");

                  setPassValue(event.target.value);
                }}
              />
              <div className="passwordErrorMsg"></div>
            </div>
            <button className="btn login" onClick={checkBlank}>
              Login Now
            </button>
            <button className="btn google">Sign-in with google</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
