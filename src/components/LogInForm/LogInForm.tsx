import { useForm } from "react-hook-form";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import "./LogInForm.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setForm } from "../../store/signIn";

export const LogInForm = () => {
  type LogInForm = {
    name: string;
    username: string;
    email: string;
    password: string;
    confirm: string;
  };

  const { handleSubmit, register } = useForm<LogInForm>();
  const isAuthForm = useAppSelector((state) => state.signIn.isAuthForm);
  const dispatch = useAppDispatch();

  const tryAuthUser = (data: LogInForm) => {
    console.log(data);
  };

  const openSignInForm = () => {
    dispatch(setForm(true));
  };

  return (
    <form
      onSubmit={handleSubmit(tryAuthUser)}
      className={`loginForm ${!isAuthForm && "active"}`}
    >
      <h3 className="signInForm__title">Your Welcome!</h3>
      <p className="signInForm__text">
        Please enter your details to proceed with the platform.
      </p>
      <label className="signInForm__label">
        Name
        <input
          {...register("name")}
          className="signInForm__input"
          type="text"
        />
      </label>
      <label className="signInForm__label">
        Nick Name
        <input
          {...register("username")}
          className="signInForm__input"
          type="text"
        />
      </label>
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
      </label>
      <label className="signInForm__label">
        Confirm Password
        <input
          {...register("confirm")}
          className="signInForm__input"
          type="password"
        />
      </label>
      <button className="signInForm__signInBtn">Log In</button>
      <button className="signInForm__googleBtn">
        <GoogleIcon className="signInForm__googleBtn__img" /> Log In With Google
      </button>
      <p className="signInForm__question">
        Sign in Do have an account?{" "}
        <span onClick={openSignInForm}>Sign in</span>
      </p>
    </form>
  );
};
