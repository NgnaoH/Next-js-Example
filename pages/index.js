import Layout from "../Layout/Layout";
import useTranslation from "next-translate/useTranslation";
import Section from "../components/Section";
import Latest from "../components/Latest";
import Subscribe from "../components/Subscribe";
import { getBlogs } from "../store/actions";
import { wrapper } from "../store";
import { END } from "redux-saga";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { blogSelector } from "../store/selectors";

const Home = () => {
  let { t } = useTranslation();

  const features = useSelector(blogSelector.features$);
  const stories = useSelector(blogSelector.stories$);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <Layout title={t("home:title")}>
      <Section title="featured" blogs={features} />
      <Latest />
      <Section title="story" blogs={stories} />
      <Subscribe />
    </Layout>
  );
};

export const getStaticProps = wrapper.getStaticProps((store) => {
  async () => {
    store.dispatch(getBlogs());
    store.dispatch(END);
    await store.sagaTask.toPromise();
  };
});

export default Home;
