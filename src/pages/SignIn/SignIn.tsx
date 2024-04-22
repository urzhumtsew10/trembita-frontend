import { FC } from "react";
import "./SignIn.scss";
import { SignInForm } from "../../components/SignInForm/SignInForm";
import { ReactComponent as UkraineFlag } from "../../assets/icons/ukraine-flag.svg";
import { LogInForm } from "../../components/LogInForm/LogInForm";
import { CSSTransition } from "react-transition-group";
import { useAppSelector } from "../../store/hooks";

export const SignIn: FC = () => {
  const isAuthForm = useAppSelector((state) => state.signIn.isAuthForm);
  return (
    <div className="signIn container">
      <CSSTransition
        in={isAuthForm}
        timeout={500}
        classNames="alert"
        unmountOnExit
      >
        <SignInForm />
      </CSSTransition>
      <CSSTransition
        in={!isAuthForm}
        timeout={500}
        classNames="alert"
        unmountOnExit
      >
        <LogInForm />
      </CSSTransition>
      <div className="signIn__imgBox">
        <div className="imgBox__brandBox">
          <h2 className="brandBox__title">Trembita</h2>
          <UkraineFlag className="brandBox__img" />
        </div>
        <p className="imgBox__slogan">
          Hurry up and join our community and try out the Ukrainian social
          network!
        </p>
      </div>
    </div>
  );
};
