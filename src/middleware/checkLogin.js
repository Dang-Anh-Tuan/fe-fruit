export default function (next) {
  const check =
    sessionStorage.getItem("isLogin") === null ||
    sessionStorage.getItem("isLogin") === "false"
      ? true
      : false;
  if (check) {
    console.log("call");
    return next({
      name: "login",
    });
  }
}
