import React, { useState } from 'react';
import Greeting from "./Greeting";

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      로그인
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      로그아웃
    </button>
  );
}

export default function LoginControl() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  let button;
  if (isLogged) {
    button = <LogoutButton onClick={handleLogout} />;
  } else {
    button = <LoginButton onClick={handleLogin} />;
  }

  return (
    <div>
      <Greeting isLoggedIn={isLogged} />
      {button}
    </div>
  );
}