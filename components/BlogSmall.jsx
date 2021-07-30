import Link from "next/link";
import Image from "next/image";
import classes from "../scss/blog-small.module.scss";

const BlogSmall = ({ id, src, background, title, authors }) => {
  return (
    <article className={classes["blog-item-sm"]}>
      <div className={`${classes["item-wrapper"]} bg-${background}`}>
        <Link href={`/blogs/${id}`} passHref>
          <a className={classes["global-link"]}></a>
        </Link>
        <div className={classes["image-wrapper"]}>
          <Image src={src} layout="fill" alt="image" objectFit="cover" />
        </div>
        <div className={classes["item-content"]}>
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
      </div>
    </article>
  );
};

export default BlogSmall;
