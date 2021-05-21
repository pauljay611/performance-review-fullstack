import React from "react";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/admin");
  }
  return (
    <div>
      login
      <button onClick={handleClick}>1234</button>
    </div>
  );
};

export default Login;
