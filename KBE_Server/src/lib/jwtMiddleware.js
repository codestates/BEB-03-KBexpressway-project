const jwt = require("jsonwebtoken");
const log = console.log;

const jwtMiddleware = (req, res, next) => {
  log(`๐๏ธjwtMiddleware ๋์`);

  let payload = req.body;
  log(`${JSON.stringify(payload)}`);

  next();
  // if (!payload) return next(); // ํ ํฐ์ด ์์

  // try {
  //   // ํ ํฐ์ด ์๊ณ  ๊ฒ์ฆ ์๋ฃ๋จ
  //   const decoded = jwt.verify(payload.accessToken, process.env.ACCESS_SECRET);
  //   log(`๐๏ธ${decoded}`);
  //   return next(decoded);
  // } catch (e) {
  //   // ํ ํฐ ๊ฒ์ฆ ์คํจ
  //   return next();
  // }
};

module.exports = jwtMiddleware;
