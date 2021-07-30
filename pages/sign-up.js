import AuthLayout from "../Layout/AuthLayout";
import Link from "next/link";
import classes from '../scss/auth.module.scss'

const SignUp = () => {
  return (
    <AuthLayout background="../images/bg1.jpeg">
      <form className={classes["form-auth"]}>
        <h1>Get started with Okiro</h1>
        <label htmlFor="name">Your name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Your email address</label>
        <input type="email" name="email" id="email" />
        <button>Continue</button>
        <small className={classes["question"]}>
          Already have an account?{" "}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </small>
      </form>
    </AuthLayout>
  );
};

export default SignUp;
