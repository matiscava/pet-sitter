import { Outlet } from "react-router-dom";

import React from 'react'
import NavMenu from "./elements/NavMenu";

const Layout = () => {
  return (
    <>
      <NavMenu />
      <main className="app">
        <Outlet />
      </main>
    </>
  )
}

export default Layout