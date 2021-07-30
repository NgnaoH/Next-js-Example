import "../scss/main.scss";
import "antd/dist/antd.css";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
