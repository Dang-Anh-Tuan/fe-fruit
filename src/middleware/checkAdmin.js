export default function (next) {
  const isAdmin = sessionStorage.getItem("role") === "admin" ? true : false;
  if (!isAdmin) {
    return next({
      name: "home",
    });
  }
}
