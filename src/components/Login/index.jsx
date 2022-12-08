import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [err, setError] = useState(false);
   const refEmail = useRef();
   const refPassword = useRef();


   const onLogin = (e) => {
      e.preventDefault();
      console.log(email, password);
      props.login(email, password);
      
   };
   useEffect(() => {
      console.log(email, password);
      if (email === "") {
         setError(true);
      } else {
         setError(false);
      }
      console.log(email.length);
   }, [email, password]);

   return (
      <div>
         <form onSubmit={onLogin}>
            <label htmlFor="email">Email</label>
            <input
               id="email"
               autoFocus
               onBlur={(e) => setEmail(e.target.value)}
               type="text"
               placeholder="Name"
               name="email"
            />
            {err && <p>Wrong user!</p>}
            <label htmlFor="password">Password</label>
            <input
               id="password"
               onChange={(e) => setPassword(e.target.value)}
               type="password"
               placeholder="Password"
               name="password"
            />
            <button>Login</button>
         </form>
      </div>
   );
};

export default Login;
