import Link from "next/link";
import Layout from "../Layout/Layout";
import classes from "../scss/membership.module.scss";
import {Row, Col} from "antd"

export default function Membership() {
  return (
    <Layout title="Membership">
      <div className="container">
        <section className={classes["membership-section"]}>
          <div className={classes["archive-wrap"]}>
            <div className={classes["archive-container"]}>
              <div className={classes["archive-content"]}>
                <h1 className={classes["archive-title"]}>Membership</h1>
                <p className={classes["archive-description"]}>
                  Unlock full access to Okiro and see the entire library of
                  subscribers-only content & updates
                </p>
              </div>
            </div>
          </div>
        </section>
        <small className={classes["membership-heading"]}>
          Choose your plan
        </small>
        <Row className={classes["membership-cards"]}>
          <Col md={{span: 12}} lg={{span: 8}} span={24} className={classes["membership-card"]}>
            <div className={classes["card-wrapper"]}>
              <div className={classes["card-content"]}>
                <h2>Free</h2>
                <h3>
                  <sup>$</sup>0
                </h3>
                <div>
                  <ul>
                    <li>Full access to posts for subscribers</li>
                    <li>Weekly email newsletter</li>
                    <li>No advertising</li>
                  </ul>
                </div>
              </div>
              <div className={classes["card-action"]}>
                <button className={classes["button-blue"]}>
                  Subscribe now
                </button>
              </div>
            </div>
          </Col>
          <Col md={{span: 12}} lg={{span: 8}} span={24} className={classes["membership-card"]}>
            <div className={classes["card-wrapper"]}>
              <div className={classes["card-content"]}>
                <h2>Monthly</h2>
                <h3>
                  <sup>$</sup>7
                </h3>
                <div>
                  <ul>
                    <li>Full access to all premium posts</li>
                    <li>Weekly email newsletter</li>
                    <li>Support independent publishing</li>
                    <li>Simple, secure card payment</li>
                    <li>No advertising</li>
                  </ul>
                </div>
              </div>
              <div className={classes["card-action"]}>
                <button className={classes["button-blue"]}>
                  Subscribe now
                </button>
              </div>
            </div>
          </Col>
          <Col lg={{span: 8}} span={24}  className={classes["membership-card"]}>
            <div className={classes["card-wrapper"]}>
              <div className={classes["card-content"]}>
                <h2>Yearly</h2>
                <h3>
                  <sup>$</sup>29
                </h3>
                <div>
                  <ul>
                    <li>Full access to all premium posts</li>
                    <li>Weekly email newsletter</li>
                    <li>Support independent publishing</li>
                    <li>Simple, secure card payment</li>
                    <li>One easy payment instead of 12!</li>
                    <li>No advertising</li>
                  </ul>
                </div>
              </div>
              <div className={classes["card-action"]}>
                <button className={classes["button-blue"]}>
                  Subscribe now
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <small className={classes["question"]}>
          Already have an account?{" "}
          <Link href="/sign-in" passHref>
            <a>Sign in</a>
          </Link>
        </small>
      </div>
    </Layout>
  );
}
