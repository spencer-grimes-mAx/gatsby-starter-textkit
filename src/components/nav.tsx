import React from "react"
import { useState, useEffect } from 'react';
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faChartBar, faCode, faTerminal, faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import "./nav.css"

const Nav = () => {


    return (
    <div className="local-navigation">
    <div className="local-navigation--top">
        <div>
          <Link className="navLink navFirst" activeClassName="navActive" to="/messenger">
              <FontAwesomeIcon  icon={faComment} />
            </Link>
          <Link className="navLink" activeClassName="navActive" to="/inside">
              <FontAwesomeIcon  icon={faCode} />
            </Link>
          <Link className="navLink" activeClassName="navActive" to="/page2">
              <FontAwesomeIcon  icon={faChartBar} />
            </Link>
        </div>
    </div>

    </div>
    )

}


export default Nav