import React from 'react';

function UserGreeting() {
  return <h1>다시 오셨군요!</h1>;
}

function GuestGreeting() {
  return <h1>로그인을 해주세요.</h1>;
}

export default function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGreeting />;
}