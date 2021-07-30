import classes from "../scss/blog-preview.module.scss";
import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";
import { Row, Col } from "antd";

const BlogPreview = ({ id, src, title, authors, tags, renderAllTags }) => {
  return (
    <article className={classes["blog-preview"]}>
      <Row gutter={[24, 24]}>
        <Col lg={{ span: 12 }} span={24} className={classes["image-container"]}>
          <Link href={`/blogs/${id}`} passHref>
            <div className={classes["image-wrapper"]}>
              <Image
                src={src ? src : "/"}
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
        </Col>
        <Col lg={{ span: 12 }} span={24} className={classes["content-wrapper"]}>
          <div className={classes["item-tags"]}>
            {tags && !renderAllTags
              ? tags.slice(0, 1).map((tag) => <Tag key={tag} tag={tag} />)
              : tags && tags.map((tag) => <Tag key={tag} tag={tag} />)}
          </div>
          <Link href={`/blogs/${id}`} passHref>
            <a className={`text-hover ${classes["item-title"]}`}>
              {title}
              <span className="effect"></span>
            </a>
          </Link>
          <p className={classes["item-excerpt"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut
            facilisis rutrum donec tristique mauris est ac nunc. Eget nec, lorem
            mi libero accumsan....
          </p>
          <Row className={classes["item-meta"]}>
            <Col className={classes["profile-image"]}>
              <a href="#" className={classes["authors-image"]}>
                <Image
                  src="/images/hooman2.jpg"
                  alt="hooman"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
              <a href="#" className={classes["authors-image"]}>
                <Image
                  src="/images/hooman1.jpg"
                  alt="hooman"
                  layout="fill"
                  objectFit="cover"
                />
              </a>
            </Col>
            <Col className={classes["authors"]}>
              {authors &&
                authors.map((author, index) => (
                  <Link key={author} href="#">
                    <a>
                      {" "}
                      {author}
                      {index !== authors.length - 1 ? "," : ""}
                    </a>
                  </Link>
                ))}
              <p>
                <time dateTime="2020-09-03">September 30, 2020</time>∙ 3 minutes
                read
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </article>
  );
};

export default BlogPreview;
