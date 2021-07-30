import axios from "axios";

export const getUserIds = async (page, limit) => {
  const users = await getUsers(page, limit);
  return users.map((user) => ({
    params: {
      id: `${user.id}`,
    },
  }));
};