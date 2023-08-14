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
import {
  LoginBackground,
  NoTextSmallLogo,
  WhiteTextLogo,
} from "../../../Assets/Image";

function Login() {
  const dispatch = useAppDispatch();

  const userLoggedin = useAppSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const authRepository = new AuthRepository();
  const authService = new AuthService(authRepository);
  const loginUseCase = new LoginUseCase(authService);
  const handleLogin = async () => {
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
    <div className="w-full h-screen bg-bgGradient grid place-items-center ">
      <div className="flex  h-96 w-[90%] sm:w-3/4 md:w-[60%] rounded-medium overflow-hidden">
        <div className="flex-1 h-full relative">
          <img
            className={`absolute inset-0 w-full h-full z-0 `}
            src={LoginBackground}
          ></img>
          <div className="w-full h-full flex flex-col justify-center items-center z-10 bg-[rgba(22,112,180,1)] absolute inset-0 opacity-90">
            <div className="flex justify-center items-center">
              <img src={WhiteTextLogo} className="w-4/5" />
            </div>
            <div className="w-[90%] text-center text-xs leading-normal text-white py-4 px-4 tracking-tight">
              Certainly! In short, IT companies are businesses that provide
              technology-related products and services, such as software
              development, hardware manufacturing, cloud computing,
              cybersecurity, and IT consulting.
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col h-full bg-white justify-center items-center">
          <div className="flex flex-col justify-center items-center w-2/3">
            <div className="  flex flex-col justify-center items-center">
              <div className="font-[poppinsregular] text-sm ">WELCOME TO</div>
              <div className="flex items-center">
                <div className="h-10">
                  <img
                    className="w-full h-full object-contain"
                    title="Umbrella Solutions"
                    src={NoTextSmallLogo}
                  ></img>
                </div>
                <div className="font-[poppins] text-[2.5rem] leading-[2.75rem] font-black  tracking-wider ">
                  <span className="text-primary drop-shadow h">H</span>
                  <span className="text-lightGray m">M</span>
                  <span className="text-secondary s">S</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 py-6 w-full">
              <div className="relative border-2 py-[.205rem] flex h-max items-center border-[rgba(0,0,0,0.20)] outline-[rgba(0,0,0,0.35)] rounded-large overflow-hidden">
                <label
                  htmlFor="username"
                  className="fa-solid fa-user text-lightGray px-2 text-xs"
                ></label>
                <input
                  className="w-full border-0 outline-none tracking-wider text-sm placeholder:tracking-wider placeholder:text-sm"
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="relative border-2 py-[.205rem] flex h-max items-center border-[rgba(0,0,0,0.20)] outline-[rgba(0,0,0,0.35)] rounded-large overflow-hidden">
                <label
                  htmlFor="password"
                  className="fa-solid fa-lock text-lightGray px-2 text-xs"
                ></label>
                <input
                  className="w-full border-0 outline-none tracking-wider text-sm placeholder:tracking-wider placeholder:text-sm"
                  type={showPassword ? "password" : "text"}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={`fa-regular ${
                    !showPassword ? " fa-eye" : "fa-eye-slash"
                  } text-lightGray pr-2 cursor-pointer`}
                  onClick={() => setShowPassword((prev) => !prev)}
                ></i>
              </div>

              <div className="flex items-end justify-between text-[.6rem] py-2 font-[poppinsregular] font-light">
                <div className="flex gap-1  items-center">
                  <input
                    className="accent-secondary"
                    type="checkbox"
                    id="remember"
                  />
                  <label
                    htmlFor="remember"
                    className="noselect cursor-pointer leading-none text-[.6rem] font-semibold -mb-[3px]"
                  >
                    Remember Me
                  </label>
                </div>
                <div className="font-semibold leading-none noselect cursor-pointer">
                  Forget Password?
                </div>
              </div>

              <div className="flex justify-center items-center ">
                <button
                  className="w-full py-1 text-white text-sm bg-secondary rounded-lg shadow-[0px 4px 8px 0px #8EC14D;]"
                  onClick={handleLogin}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
