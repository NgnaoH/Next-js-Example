import classes from "../scss/footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Row, Col } from "antd";
import {
  TwitterCircleFilled,
  YoutubeFilled,
  InstagramFilled,
  SkypeFilled,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className="container">
        <Row className={classes["footer-wrap"]}>
          <Col span={24} lg={{ span: 12 }} className={classes["footer-data"]}>
            <div className={classes["footer-logo"]}>
              <Link href="/" passHref>
                <div className={classes["logo"]}>
                  <Image
                    src="/okiro.svg"
                    alt="logo"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Link>
            </div>
            <p className={classes["footer-description"]}>
              A minimal, functional theme for running a paid-membership
              publication on Ghost.
            </p>
            <div className={classes["footer-icons"]}>
              <a href="#" className={classes["icon"]}>
                <SkypeFilled />
              </a>
              <a href="#" className={classes["icon"]}>
                <TwitterCircleFilled />
              </a>
              <a href="#" className={classes["icon"]}>
                <InstagramFilled />
              </a>
              <a href="#" className={classes["icon"]}>
                <YoutubeFilled />
              </a>
            </div>
          </Col>
          <Col span={24} lg={{ span: 12 }} className={classes["footer-nav"]}>
            <Row className={classes["nav-wrapper"]}>
              <Col sm={{span: 8}} span={12} className={classes["nav-column-wrapper"]}>
                <small>About</small>
                <nav className={classes["nav-column"]}>
                  <ul>
                    <li>
                      <a href="#">Features</a>
                    </li>
                    <li>
                      <a href="#">Style Guide</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Get Theme</a>
                    </li>
                  </ul>
                </nav>
              </Col>
              <Col sm={{span: 8}} span={12} className={classes["nav-column-wrapper"]}>
                <small>Features</small>
                <nav className={classes["nav-column"]}>
                  <ul>
                    <li>
                      <a href="#">Account</a>
                    </li>
                    <li>
                      <a href="#">Membership</a>
                    </li>
                    <li>
                      <a href="#">Sign in</a>
                    </li>
                    <li>
                      <a href="#">Sign in</a>
                    </li>
                  </ul>
                </nav>
              </Col>
              <Col sm={{span: 8}} span={12} className={classes["nav-column-wrapper"]}>
                <small>Support</small>
                <nav className={classes["nav-column"]}>
                  <ul>
                    <li>
                      <a href="#">Authors</a>
                    </li>
                    <li>
                      <a href="#">Tags</a>
                    </li>
                    <li>
                      <a href="#">Dark Version</a>
                    </li>
                    <li>
                      <a href="#">404</a>
                    </li>
                  </ul>
                </nav>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className={classes["footer-copyright"]}>
          Okiro © 2021. All Right Reserved. Published with Ghost.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
