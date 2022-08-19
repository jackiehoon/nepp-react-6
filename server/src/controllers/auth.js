import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserService from "../services/users.js";
import { secretKey } from "../config/token.js";

const AuthController = {
  postAuthSignup: async (req, res) => {
    // 1. user_name 중복검사:
    // 유저가 보낸 user_name과 일치하는 값이 DB에 있는가?
    // 1-1. 있으면 회원가입 실패
    // 2. 평문과 salt(랜덤값)을 조합해서 비밀번호 암호화
    // 3. user_name, password, name, salt를 DB에 저장

    const { userName, password, name } = req.body;
    const duplicatedUser = await UserService.getUserByUserName({
      userName,
    });

    if (duplicatedUser) {
      return res
        .status(409)
        .send({ success: false, message: "중복된 아이디가 있습니다." });
    }

    const salt = await bcrypt.genSalt();
    const hashedPW = await bcrypt.hash(password, salt);

    await UserService.createUser({ userName, name, salt, password: hashedPW });

    res.send({ success: true });
  },

  postAuthLogin: async (req, res) => {
    // 1. DB에 userName이 존재하는지 체크
    // 1.1 없으면 로그인 실패
    // 2. 1.에서 가져온 salt와 유저가 입력한 비밀번호로 hashedPW만들기
    // 3. 2.에서 만든 pw와 DB에 있는 PW가 같은지 체크
    // 3.1 다르면 로그인 실패
    // 4. JWT 토큰 생성해서 전달

    const { userName, password } = req.body;

    const user = await UserService.getUserByUserName({ userName });
    if (!user) {
      return res
        .status(401)
        .send({ success: false, message: "일치하는 유저가 없습니다." });
    }

    const hashedPW = await bcrypt.hash(password, user.salt);
    if (hashedPW !== user.password) {
      return res
        .status(401)
        .send({ success: false, message: "비밀번호가 일치하지 않습니다." });
    }

    const payload = {
      userId: user.id,
    };
    const option = {
      expiresIn: "1d",
    };

    const token = jwt.sign(payload, secretKey, option);

    res.send({ success: true, token });
  },
};

export default AuthController;
