import { useUser } from "../context/user.context";
import "../css/Login.css";
function Login() {
  let { loginUser, handelInput } = useUser();
  return (
    <div className="login-wrapper">
      <form className="login-box">
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          value={loginUser.userName}
          placeholder="Enter email"
          name="userName"
          onChange={handelInput}
        />

        <label>Password</label>
        <input
          type="password"
          value={loginUser.password}
          placeholder="Enter password"
          name="password"
          onChange={handelInput}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
