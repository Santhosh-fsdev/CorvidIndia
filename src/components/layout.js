import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Content from "./Content";
import Header from "./header"
import Content1 from "./Content1"
import Content2 from "./Content2"
import Content3 from "./Content3"
import Content4 from "./Content4"
import Slider from "./Slider"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
        <main>{children}</main>
        <Header />
        <Slider />
        <Content />
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
        <footer>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
