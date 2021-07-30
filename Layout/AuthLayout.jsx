import Image from "next/image";
import classes from "../scss/auth-layout.module.scss";
import Link from "next/link";
import { Row, Col } from "antd";

const AuthLayout = ({ children, background }) => {
  return (
    <Row className={classes["custom-wrapper"]}>
      <Col
        span={10}
        className={classes["custom-image"]}
        style={{ backgroundImage: `url(${background})` }}
      ></Col>
      <Col span={14} className={classes["custom-container"]}>
        <div className={classes["custom-logo"]}>
          <Link href="/" passHref>
            <div className={classes["logo"]}>
              <Image src="/okiro.svg" alt="logo" layout="fill" />
            </div>
          </Link>
        </div>
        <div className={classes["custom-content"]}>
          {children}
        </div>
      </Col>
    </Row>
  );
};

export default AuthLayout;
