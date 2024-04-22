import "./SignInForm.scss";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setForm } from "../../store/signIn";

export const SignInForm: FC = () => {
  type AuthForm = {
    email: string;
    password: string;
  };

  const { handleSubmit, register } = useForm<AuthForm>();
  const isAuthForm = useAppSelector((state) => state.signIn.isAuthForm);
  const dispatch = useAppDispatch();

  const tryAuthUser = (data: AuthForm) => {
    console.log(data);
  };

  const openLogInForm = () => {
    dispatch(setForm(false));
  };

  return (
    <form
      onSubmit={handleSubmit(tryAuthUser)}
      className={`signInForm ${isAuthForm && "active"}`}
    >
      <h3 className="signInForm__title">Welcome Back!</h3>
      <p className="signInForm__text">
        Please enter your details to proceed with the platform.
      </p>
      <label className="signInForm__label">
        Email
        <input
          {...register("email")}
          className="signInForm__input"
          type="text"
        />
      </label>
      <label className="signInForm__label">
        Password
        <input
          {...register("password")}
          className="signInForm__input"
          type="password"
        />
        <p className="signInForm__input__text">Forgot Password</p>
      </label>
      <button className="signInForm__signInBtn">Sign In</button>
      <button className="signInForm__googleBtn">
        <GoogleIcon className="signInForm__googleBtn__img" /> Sign In With
        Google
      </button>
      <p className="signInForm__question">
        Sign up Don’t have an account?{" "}
        <span onClick={openLogInForm}>Sign up</span>
      </p>
    </form>
  );
};
