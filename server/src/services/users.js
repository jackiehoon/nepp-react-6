import conn from "../config/database.js";

const UserService = {
  getUserByUserName: async ({ userName }) => {
    const query = `
        SELECT id, salt, password 
        FROM user
        WHERE user_name='${userName}';
    `;
    const [rows] = await conn.query(query);
    return rows[0];
  },

  createUser: async ({ userName, password, salt, name }) => {
    const query = `
        INSERT INTO user(user_name, password, salt, name)
        VALUES(?, ?, ?, ?);
    `;
    await conn.query(query, [userName, password, salt, name]);
  },
};

export default UserService;
