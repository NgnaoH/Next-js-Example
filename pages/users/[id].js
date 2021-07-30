import { useRouter } from "next/router";
import { Card, Spinner } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getUserById, getUserIds } from "../../lib/users";
import spinner from "../../styles/spinner.module.scss"

const User = ({ user }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Spinner
        animation="border"
        role="status"
        variant="dark"
        className={spinner.spinnerLg}
      >
        <span className="sr-only"></span>
      </Spinner>
    );
  }
  return (
    <Layout title={user.name}>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getUserIds(1, 2);
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { id } }) => {
  const user = await getUserById(id);

  return {
    props: {
      user,
    },
    revalidate: 1,
  };
};

export default User;
