import React, { useState } from "react";

import "./styles.css";

export default function App() {
  const [loggedIn, setIsLoggedIn] = useState("");
  return (
    <div className="App">
      <header>
        <h1 className="fake-logo">Level Up</h1>
      </header>
      <main className="layout">
        <button onClick={() => setIsLoggedIn("signin")}>Sign In</button>
        {loggedIn && (
          <>
            <div className="modal">
              <div className="card">
                {loggedIn === "signin" && (
                  <SignIn setIsLoggedIn={setIsLoggedIn} />
                )}
                {loggedIn === "signup" && (
                  <SignUp setIsLoggedIn={setIsLoggedIn} />
                )}
              </div>
            </div>
            <div onClick={() => setIsLoggedIn("")} className="overlay" />
          </>
        )}
      </main>
    </div>
  );
}

function SignUp({ setIsLoggedIn }) {
  return (
    <>
      <h3>Sign Up</h3>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <label htmlFor="email">Password</label>
      <input id="email" type="text" />
      <br />
      <button>Sign Up</button>
      <p>
        Already have an account?{" "}
        <a onClick={() => setIsLoggedIn("signin")}>Sign In</a>
      </p>
    </>
  );
}
function SignIn({ setIsLoggedIn }) {
  return (
    <>
      <h3>Sign In</h3>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" />
      <label htmlFor="email">Password</label>
      <input id="email" type="text" />
      <label htmlFor="email2">Password Confirm</label>
      <input id="email2" type="text" />
      <br />
      <button>Sign In</button>
      <p>
        Need an account? <a onClick={() => setIsLoggedIn("signup")}>Sign Up</a>
      </p>
    </>
  );
}
