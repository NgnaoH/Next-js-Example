import AuthLayout from "../Layout/AuthLayout";
import Link from "next/link";
import classes from '../scss/auth.module.scss'

export default function SignIn() {
  return (
    <AuthLayout background="../images/bg2.jpeg">
      <form className={classes["form-auth"]}>
        <h1>Sign in to Okiro</h1>
        <label htmlFor="signin">Your email address</label>
        <input type="email" name="email" id="signin" />
        <button>Send login link</button>
        <small className={classes["question"]}>
          Don&apos;t have account yet? {" "}
          <Link href="/sign-up" passHref>
            <a>Sign up</a>
          </Link>
        </small>
      </form>
    </AuthLayout>
  );
}
