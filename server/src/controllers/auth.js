import UserService from "../services/users.js";

const AuthController = {
  postAuthSignup: async (req, res) => {
    // 1. user_name 중복검사:
    // 유저가 보낸 user_name과 일치하는 값이 DB에 있는가?
    // 1-1. 있으면 회원가입 실패
    // 2. 평문과 salt(랜덤값)을 조합해서 비밀번호 암호화
    // 3. user_name, password, name, salt를 DB에 저장

    const duplicatedUsers = await UserService.getUserByUserName({
      userName: "?",
    });

    console.log(duplicatedUsers);
    res.send({ success: true });
  },
};

export default AuthController;
