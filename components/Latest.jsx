import { useSelector } from "react-redux";
import { blogSelector } from "../store/selectors";
import BlogPreview from "./BlogPreview";
import Blog from "./Blog";
import classes from "../scss/latest.module.scss";
import { Row, Col } from "antd";

const Latest = () => {
  const blogs = useSelector(blogSelector.blogs$);
  const blogPreview = blogs.slice(0, 1);

  return (
    <section className={classes["loop-section"]}>
      <h2 className={classes["title-section"]}>latest posts</h2>
      {blogPreview &&
        blogPreview.map((blog) => <BlogPreview key={blog.id} {...blog} />)}
      <Row gutter={[24, 24]}>
        {blogs &&
          blogs.slice(1, 6).map((blog, index) => (
            <Col
              key={blog.id}
              lg={index < 3 ? { span: 8 } : { span: 12 }}
              span={`${index < 4 ? 12 : 24}`}
            >
              <Blog {...blog} />
            </Col>
          ))}
      </Row>
      <div className={classes["button-wrapper"]}>
        <button className={classes["button-loadmore"]}>Load more</button>
      </div>
    </section>
  );
};

export default Latest;
