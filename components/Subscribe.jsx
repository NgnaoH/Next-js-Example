import classes from "../scss/subscribe.module.scss";
import { Row, Col } from "antd";

const Subscribe = () => {
  return (
    <section className={classes["subcribe-section"]}>
      <Row>
        <Col lg={{ span: 12 }} span={24}>
          <h3>Subscribe to new posts</h3>
        </Col>
        <Col lg={{ span: 12 }} span={24} className={classes["form-wrapper"]}>
          <form>
            <div className={classes["email-form"]}>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
              />
              <button className={classes["button-subscribe"]}>Subscribe</button>
            </div>
          </form>
        </Col>
      </Row>
    </section>
  );
};

export default Subscribe;
