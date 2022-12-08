import React, { useEffect, useState, useRef } from "react";
import {
   faCheck,
   faTimes,
   faInfoCircle,
   faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9@.-_]{3,23}$/;
const PASS_REGEX = /^[a-zA-Z0-9-_]{6,23}$/;

const Register = (props) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPwd, setConfirmPwd] = useState(false);
   const [validEmail, setValidEmail] = useState(false);
   const [validPassword, setValidPassword] = useState(false);
   const [errMsg, setErrMsg] = useState("");
   const [matchPwd, setMatchPwd] = useState(false);
   const [success, setSuccess] = useState(false);

   const userRef = useRef();
   const errRef = useRef();

   useEffect(() => {
      userRef.current.focus();
   }, []);

   useEffect(() => {
      const result = USER_REGEX.test(email);
      console.log(result);
      setValidEmail(result);
   }, [email]);

   useEffect(() => {
      setValidPassword(PASS_REGEX.test(password));
      const match = password === confirmPwd;
      setMatchPwd(match);
   }, [password, confirmPwd]);

   const handleRegister = (e) => {
      e.preventDefault();
      props.register(email, password);
   };
   return (
      <>
         {success ? (
            <section>Ok</section>
         ) : (
            <section>
               <h1>Registration</h1>
               <p ref={errRef} className={errMsg ? "show" : "hide"}>
                  {errMsg}
               </p>
               <form onSubmit={handleRegister}>
                  <label htmlFor="email">
                     Email
                     <span className={validEmail ? "show" : "hide"}>
                        <FontAwesomeIcon
                           style={{ color: "green" }}
                           icon={faCheck}
                        />
                     </span>
                     <span className={validEmail || !email ? "hide" : "show"}>
                        <FontAwesomeIcon
                           style={{ color: "red" }}
                           icon={faTimes}
                        />
                     </span>
                  </label>
                  <input
                     aria-describedby="emailNote"
                     ref={userRef}
                     id="email"
                     required
                     onChange={(e) => setEmail(e.target.value)}
                     type="text"
                     placeholder="Email"
                     name="email"
                  />
                  <p
                     className={validEmail || !email ? "hide" : "show"}
                     id="emailNote"
                  >
                     <FontAwesomeIcon icon={faInfoCircle} />
                     Email must be more then 3 characters
                     <br /> and starts with letter
                  </p>

                  <label htmlFor="password">Password</label>
                  <span className={validPassword ? "show" : "hide"}>
                     <FontAwesomeIcon
                        style={{ color: "green" }}
                        icon={faCheck}
                     />
                  </span>
                  <span
                     className={validPassword || !password ? "hide" : "show"}
                  >
                     <FontAwesomeIcon style={{ color: "red" }} icon={faTimes} />
                  </span>
                  <input
                     area-describedby="passwordNote"
                     id="password"
                     onChange={(e) => setPassword(e.target.value)}
                     type="password"
                     placeholder="Password"
                     name="password"
                  />
                  <p
                     className={validPassword || !password ? "hide" : "show"}
                     id="passwordNote"
                  >
                     <FontAwesomeIcon icon={faInfoCircle} />
                     Password must be more then 6 characters
                  </p>

                  <label htmlFor="confirmPwd">Confirm password</label>
                  <span className={matchPwd && validPassword ? "show" : "hide"}>
                     <FontAwesomeIcon
                        style={{ color: "green" }}
                        icon={faCheck}
                     />
                  </span>
                  <span className={matchPwd || !confirmPwd ? "hide" : "show"}>
                     <FontAwesomeIcon style={{ color: "red" }} icon={faTimes} />
                  </span>
                  <input
                     area-describedby="confirmPwd"
                     id="confirmPwd"
                     onChange={(e) => setConfirmPwd(e.target.value)}
                     type="password"
                     placeholder="Confirm password"
                  />
                  <p
                     className={matchPwd || !confirmPwd ? "hide" : "show"}
                     id="confirmPwd"
                  >
                     <FontAwesomeIcon icon={faInfoCircle} />
                     Password must be confirmed
                  </p>
                  <button
                     disabled={validEmail && validPassword ? false : true}
                     type="submit"
                  >
                     Register
                  </button>
               </form>
            </section>
         )}
      </>
   );
};

export default Register;
