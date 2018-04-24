const api = "http://localhost:28080";//本地
// const api = "/api";
const conf = {
  api,
  json : "/json",
  login : api +"api/user/login",//登录密码确认
};
module.exports = conf;

