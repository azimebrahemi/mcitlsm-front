import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
<div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MCIT Letter Management System
          </Link>
          <Link className="btn btn-outline-light" to="/adduser">
            Incoming Letter
          </Link>

          <Link className="btn btn-outline-light" to="/outgoingletter">
            Out Going Letter
          </Link>

          <Link className="btn btn-outline-light" to="/searchletter">
            Search Letters
          </Link>
          <Link className="btn btn-outline-light" to="/useradd">
            Add User
          </Link>
        </div>
</nav>
    </div>
  )
}
