import rquest from "../utils/request.js";

/* 修改用户密码 */
export function changePassword(username, password) {
  return rquest({
    url: "/user/changePassword",
    method: "post",
    data: {
      username,
      password,
    },
  });
}
