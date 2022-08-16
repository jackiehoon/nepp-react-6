import conn from "../config/database.js";

const UserService = {
  getUserByUserName: async ({ userName }) => {
    const query = `
        SELECT id 
        FROM user
        WHERE user_name='${userName}';
    `;
    const [rows] = await conn.query(query);
    return rows;
  },
};

export default UserService;
