// presentation/components/Login.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../Infrastructure/Utilities/Redux/Slices/AuthSlice";

import { LoginUseCase } from "../../../Application/UserCases/Authentication/login";
import AuthService from "../../../Application/Services/Authentication/Authentication";
import AuthRepository from "../../../Infrastructure/Repository/AuthRepositoryImpl";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../Infrastructure/Utilities/Redux/Slices/Hooks/Hooks";

function Login() {
  const dispatch = useAppDispatch();

  const userLoggedin = useAppSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authRepository = new AuthRepository();
  const authService = new AuthService(authRepository);
  const loginUseCase = new LoginUseCase(authService);
  const handleLogin = async () => {
    // Dispatch login action and handle response
    const userFrom = await loginUseCase.execute(username, password);
    const user = dispatch(
      login({
        user: userFrom ? userFrom.toJSON() : null,
        isLoggedIn: userFrom ? true : false,
      })
    );
    console.log(userLoggedin);

    if (userLoggedin.user) {
      console.log("Logged in:", user);
    } else {
      console.log("Login failed");
    }
  };

  console.log(userLoggedin.user);

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
    </div>
  );
}

export default Login;
