const jwt = require("jsonwebtoken");

const jwtMiddleware = (req, next) => {
  const token = req.cookies.get("accessToken");
  if (!token) return next(); // 토큰이 없음

  try {
    // 토큰이 있고 검증 완료됨
    const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
    console.log(decoded);
    req.state.user = {
      account: decoded.account,
    };
    return next();
  } catch (e) {
    // 토큰 검증 실패
    return next();
  }
};

module.exports = jwtMiddleware;
