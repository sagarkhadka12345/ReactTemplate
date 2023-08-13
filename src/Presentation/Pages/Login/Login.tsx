// presentation/components/Login.tsx
import { useState } from "react";

import { login } from "../../../Infrastructure/Utilities/Redux/Slices/AuthSlice";

import { LoginUseCase } from "../../../Application/UserCases/Authentication/login";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../Infrastructure/Utilities/Redux/Slices/Hooks/Hooks";
import { useNavigate } from "react-router";

import authRepository from "../../../Infrastructure/Repository/AuthRepositoryImpl";

function Login() {
  const location = useNavigate();
  const dispatch = useAppDispatch();
  const userLoggedin = useAppSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginUseCase = new LoginUseCase(authRepository);
  const handleLogin = async () => {
    const userFrom = await loginUseCase.execute(username, password);
    dispatch(
      login({
        user: userFrom,
        isLoggedIn: userFrom ? true : false,
      })
    );
    if (
      userLoggedin.user &&
      userLoggedin.user.getRoleEntity().name === "admin"
    ) {
      // location("/admin", { replace: true });
    } else if (
      userLoggedin.user &&
      userLoggedin.user.getRoleEntity().name === "admin"
    ) {
      // location("/user", { replace: true });
    } else {
      console.log("Login failed");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <div>
        {userLoggedin.user?.getUsername()}
        {userLoggedin.user?.getRoleEntity().name}
        {userLoggedin.user?.getRoleEntity().getPermissions()}
        {userLoggedin.user?.getPassword()}
      </div>
    </div>
  );
}

export default Login;
