import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END } from "redux-saga";
import Layout from "../../Layout/Layout";
import { wrapper } from "../../store";
import { getBlogById } from "../../store/actions";
import { blogSelector } from "../../store/selectors";
import Subscribe from "../../components/Subscribe";
import Section from "../../components/Section";
import BlogPreview from "../../components/BlogPreview";
import Image from "next/image";
import Link from "next/link";
import classes from "../../scss/details.module.scss";
import { Row, Col } from "antd";
import { getBlogIds } from "../../lib/blogs";

const BlogPage = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const blog = useSelector(blogSelector.blogById$);
  const stories = useSelector(blogSelector.stories$);

  useEffect(() => {
    dispatch(getBlogById(router.query.id));
  }, [dispatch, router.query.id]);

  if (router.isFallback) {
    return <p>loading...</p>;
  }
  return (
    <Layout title="Details">
      <main className="container">
        <section className={classes["details"]}>
          <BlogPreview {...blog} renderAllTags={true} />
          <div className={classes["post-content"]}>
            <div className={classes["post-teaser"]}>
              <p>
                Quasi vero aut concedatur in omnibus stultis aeque magna esse
                vitia, et eadem inbecillitate et inconstantia L. Levatio igitur
                vitiorum magna fit in iis, qui habent ad virtutem progressionis
                aliquantum. Tertium autem omnibus aut maximis rebus iis, quae
                secundum naturam sint, fruentem vivere. Materiam vero rerum et
                copiam apud hos exilem, apud illos uberrimam reperiemus. Atque
                his de rebus et splendida est eorum et illustris oratio.
              </p>
              <blockquote>
                Utinam quidem dicerent alium alio beatiorem! Iam ruinas videres.
                Non autem hoc igitur ne illud quidem. Age, inquies, ista parva
                sunt.
              </blockquote>
              <p>
                Quos nisi redarguimus, omnis virtus, omne decus, omnis vera laus
                deserenda est. Sed eum qui audiebant, quoad poterant,
                defendebant sententiam suam. Fatebuntur Stoici haec omnia dicta
                esse praeclare, neque eam causam Zenoni desciscendi fuisse. Quis
                est autem dignus nomine hominis, qui unum diem totum velit esse
                in genere isto voluptatis. Ad eos igitur convert te, quaeso. Duo
                Reges: constructio interrete. An est aliquid per se ipsum
                flagitiosum, etiamsi nulla comitetur infamia. Quid ad utilitatem
                tantae pecuniae? Duo enim genera quae erant, fecit tria. Et quod
                est munus, quod opus sapientiae? Sed in rebus apertissimis
                nimium longi sumus.
              </p>
            </div>
            <div className={`${classes["post-lock"]} bg-${blog.background}`}>
              <h2>This post is for paying subscribers only</h2>
              <p>
                Sign up now to read the post and get access to the full library
                of posts for subscribers only.
              </p>
              <Link href="/sign-up" passHref>
                <a className={classes["button-sign-up"]}>Sign up now</a>
              </Link>
              <small className={classes["question"]}>
                Already have an account?{" "}
                <Link href="/sign-in" passHref>
                  <a>Sign in</a>
                </Link>
              </small>
            </div>
          </div>
        </section>
        <Row gutter={[40, 24]} className={`${classes["nav-post"]}`}>
          <Col lg={{ span: 12 }} span={24} className={classes["nav-wrap"]}>
            <Link href="/blogs/8" passHref>
              <div
                className={`${classes["nav-newer"]} ${classes["nav"]} bg-sand`}
              >
                <div className={classes["image"]}>
                  <div className={classes["image-wrapper"]}>
                    <Image
                      src="/images/8.jpeg"
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className={classes["nav-content"]}>
                  <small>Newer post</small>
                  <h3>Being unique is better than being perfect</h3>
                </div>
              </div>
            </Link>
          </Col>
          <Col lg={{ span: 12 }} span={24} className={classes["nav-wrap"]}>
            <Link href="/blogs/4" passHref>
              <div
                className={`${classes["nav-older"]} ${classes["nav"]} bg-aqua`}
              >
                <div className={classes["image"]}>
                  <div className={classes["image-wrapper"]}>
                    <Image
                      src="/images/4.jpeg"
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className={classes["nav-content"]}>
                  <small>Older post</small>
                  <h3>Creating deluxe drink is like playing a sport</h3>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
        <Section title="see more" blogs={stories} />
        <Subscribe />
      </main>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getBlogIds()
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = wrapper.getStaticProps((store) => {
  async ({ params }) => {
    store.dispatch(getBlogById(params.id));
    store.dispatch(END);
    await store.sagaTask.toPromise();
    return {
      revalidate: 1,
    };
  };
});

export default BlogPage;
