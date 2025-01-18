import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

import classes from "./RootLayout.module.css";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <div className={classes.rootContainer}>
      <NavBar />
      <main className={classes.mainContent}>
        {children ?? <Outlet />}
      </main>
    </div>
  );
}
