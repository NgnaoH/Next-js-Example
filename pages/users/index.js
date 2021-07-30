// import Layout from "../../components/Layout";
import Link from "next/link";
// import { getUsers } from "../../lib/users";

const Users = ({ users }) => {
  return (
    // <Layout title="Post">
      {/* {users.length ? (
        users.map((user) => (
          <Card key={user.id} className="my-3 shadow">
            <Card.Body>
              <Card.Title>
                {user.id} -- {user.title}
              </Card.Title>
              <Card.Text>{user.body}</Card.Text>
              <Link href={`/users/${user.id}`} passHref>
                <Card.Link>See more</Card.Link>
              </Link>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h2>no data</h2>
      )} */}
    // </Layout>
  );
};

// Get static data from backend /db /api
// Lay du lieu tinh
// export const getStaticProps = async () => {
//   const users = await getUsers(1, 4);
//   return {
//     props: {
//       users,
//     },
//   };
// };

export default Users;
