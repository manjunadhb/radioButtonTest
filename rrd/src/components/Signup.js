import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Signup() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let maleRadioInputRef = useRef();
  let femaleRadioInputRef = useRef();
  let stateSelectRef = useRef();
  let ageInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let mobileNoInputRef = useRef();
  let profilePicInputRef = useRef();
  let resultParaRef = useRef();

  let selectedGender;
  let maritalStatus;
  let salutation;

  return (
    <div className="App">
      <form>
        <h2 style={{ backgroundColor: "gold", boxShadow: "5px 5px 5px gray" }}>
          Signup
        </h2>
        <div>
          <label>First Name</label>
          <input ref={firstNameInputRef}></input>
        </div>
        <div>
          <label>Last Name</label>
          <input ref={lastNameInputRef}></input>
        </div>
        <div>
          <label>Gender</label>
          <input
            ref={maleRadioInputRef}
            type="radio"
            name="gender"
            onChange={() => {
              if (maleRadioInputRef.current.checked == true) {
                selectedGender = "male";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Male</label>
          <input
            ref={femaleRadioInputRef}
            type="radio"
            name="gender"
            onChange={() => {
              if (femaleRadioInputRef.current.checked == true) {
                selectedGender = "female";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Female</label>
        </div>
        <div>
          <label>Marital Status</label>
          <input
            type="radio"
            name="ms"
            onChange={(eventObj) => {
              console.log(eventObj);
              if (eventObj.target.checked == true) {
                maritalStatus = "single";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Single</label>
          <input
            type="radio"
            name="ms"
            onChange={(eventObj) => {
              if (eventObj.target.checked == true) {
                maritalStatus = "married";
              }
            }}
          ></input>
          <label style={{ width: "auto" }}>Married</label>
        </div>
        <div>
          <label>State</label>
          <select ref={stateSelectRef}>
            <option value="">Select State</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option>Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadra and Nagar Haveli">
              Dadra and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Ladakh">Ladakh</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div>
          <label>Age</label>
          <input ref={ageInputRef}></input>
        </div>
        <div>
          <label>Email</label>
          <input ref={emailInputRef}></input>
        </div>
        <div>
          <label>Password</label>
          <input ref={passwordInputRef}></input>
        </div>
        <div>
          <label>Mobile No.</label>
          <input ref={mobileNoInputRef}></input>
        </div>
        <div>
          <label>Profile Pic</label>
          <input type="file" ref={profilePicInputRef}></input>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              if (selectedGender == "male") {
                salutation = "Mr. ";
              } else {
                if (maritalStatus == "single") {
                  salutation = "Miss. ";
                } else {
                  salutation = "Mrs. ";
                }
              }

              resultParaRef.current.innerHTML = `${salutation} ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} from ${stateSelectRef.current.value}, your account has been created successfully.`;
            }}
          >
            Sign Up
          </button>
        </div>
        <div>
          <p ref={resultParaRef}></p>
        </div>
      </form>
      <div>
        <Link to="/">Sign In</Link>
      </div>
    </div>
  );
}

export default Signup;
