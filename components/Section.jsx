import classes from "../scss/section.module.scss";
import BlogSmall from "./BlogSmall";
import { Row, Col } from "antd";

const Section = ({title, blogs}) => {

  return (
    <section className={classes["feature-section"]}>
      <h2 className={classes["title-section"]}>{title}</h2>
      <Row gutter={[32, 32]}>
        {blogs &&
          blogs.map((feature) => (
            <Col key={feature.id} lg={{ span: 6 }} span={12}>
              <BlogSmall {...feature} />
            </Col>
          ))}
      </Row>
    </section>
  );
};

export default Section;
