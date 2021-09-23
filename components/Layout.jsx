import Nav from "./Nav";
import { useRouter } from "next/router";
import { useState, useEffect, Component } from "react";

const Layout = ({ children }) => {
  console.log("in layout");
  const _router = useRouter();
  let [router, setRouter] = useState(_router.pathname.substring(0, 3));

  const updateNav = (path, langRedirect) => {
    console.log("in update nav", langRedirect);
    if (path.substring(0, 3) === "/en") {
      path = path.substring(3);
      console.log(path);
    }
    let redirectPath = langRedirect + path;
    console.log("in laaayyyoooutt", redirectPath);
    setRouter(langRedirect);
    console.log("router", router);

    _router.push(redirectPath);
  };
  return (
    <>
      {router === "/en" ? (
        <Nav updateURL={updateNav} path={"/en"} lang="en"></Nav>
      ) : (
        <Nav updateURL={updateNav} path={""} lang="nl"></Nav>
      )}

      {children}
    </>
  );
};

export default Layout;
