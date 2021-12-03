import React from 'react';

export default function Question() {
  return (
    <div>
    <div className="new-user">
      <h1>New to stocks?</h1>
        <input type="email">
        <input type="password">
      <button>Sign up</button>
    </div>
    <div className="returning-user">
      <h1>Already Have an Account?</h1>
      <input type="email">
      <input type="password">
    <button>Log in</button>
    </div>
    </div>
  );
}
