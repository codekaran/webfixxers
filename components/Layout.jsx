import Nav from "./Nav";
import { useRouter } from "next/router";
import { useState, useEffect, Component } from "react";
import BottomContact from "../sub_components/BottomContact";

const Layout = ({ children }) => {
  console.log("in layout");

  return (
    <>
      <Nav router={useRouter()}></Nav>
      {children}
      <BottomContact path={""}></BottomContact>
    </>
  );
};

export default Layout;
