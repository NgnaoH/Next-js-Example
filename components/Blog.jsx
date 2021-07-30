import Link from "next/link";
import Image from "next/image";
import classes from "../scss/blog.module.scss";
import Tag from "./Tag";
import { LockOutlined } from "@ant-design/icons";

const Blog = ({ id, src, background, title, authors, tags, lock }) => {
  return (
    <article className={classes["blog-item"]}>
      <div className={`${classes["item-wrapper"]} bg-${background}`}>
        <Link href={`/blogs/${id}`} passHref>
          <a className={classes["global-link"]}></a>
        </Link>
        <div className={classes["main-item"]}>
          <div className={classes["image-wrapper"]}>
            <Image src={src} alt="image" layout="fill" objectFit="cover" />
          </div>
          <div className={classes["item-content"]}>
            <div className={classes["content"]}>
              <h3>{title}</h3>
              <p className={classes["authors"]}>
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
              </p>
            </div>
            <div className={classes["item-tags"]}>
              {tags &&
                tags.slice(0, 1).map((tag) => <Tag key={tag} tag={tag} />)}
              {lock && <Tag tag={<LockOutlined />} />}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Blog;
