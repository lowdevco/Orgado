import React, { useEffect, useState } from "react";
import "../../css/login-page/signup.css";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

function SignupPage() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [umail, setUmail] = useState("");
  const [unum, setUnum]   = useState("");
  const [upass, setUpass] = useState("");

  useEffect(() => {
    const savFname = localStorage.getItem("fname");
    if (savFname) setFname(savFname);

    const savLname = localStorage.getItem("lname");
    if (savLname) setLname(savLname);

    const savUmail = localStorage.getItem("umail");
    if (savUmail) setUmail(savUmail);

    const savUnum = localStorage.getItem("unum");
    if (savUnum) setUnum(savUnum);

    const savUpass = localStorage.getItem("upass");
    if (savUpass) setUpass(savUpass);
  },[]);

  const signUp = (udata) => {
    udata.preventDefault();

    (localStorage.setItem("name", fname + " " + lname),
      localStorage.setItem("email", umail),
      localStorage.setItem("Phone", unum),
      localStorage.setItem("Password", upass));
  };

  

  return (
    <div className="container my-5 signup-form-container">
      <form action="">
        <div
          className="container  d-flex flex-column align-items-center justify-content-center"
          id="signup-form"
        >
          <div className="d-flex gap-3 ">
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex gap-3 ">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={umail}
                onChange={(e) => setUmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Phone Number"
                value={unum}
                onChange={(e) => setUnum(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex gap-3 ">
            <div>
              <input
                type="password"
                placeholder="Password ( at least 6 Charecters )"
                value={upass}
                onChange={(e) => setUpass(e.target.value)}
              />
            </div>
            <div>
              <select name="Gender" id="">
                <option value="">Select Gender</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
          </div>

          <div id="signup-checkbox" className="mb-1">
            <input type="checkbox" />
            <label htmlFor="checkbox">
              {" "}
              Accept the terms and <Link>Privacy Policy</Link>.
            </label>
          </div>

          <div className="mb-4">
            <button onClick={signUp}>Register Now</button>
          </div>

          <div>
            <span style={{ color: "#777" }}>Already Have an Account?</span>
            <span>
              <Link to="/login">Log in</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;
