import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from "../components/Button"
import { FaGithub } from "react-icons/fa"
import Info from "../components/info"
import img from "../images/science-images/wind_mills.jpg"
import Leaves from "../components/leaves"
import "bootstrap/dist/css/bootstrap.min.css"
import cls from "../components/index.module.css"

const IndexPage = () => (
        <Layout>
                <SEO
                        title="Home"
                        keywords={[`gatsby`, `application`, `react`]}
                />
                <Link to="/products/">
                        <h1>Products Page</h1>
                </Link>
                <Info />
                <Link to="/images/">Images</Link>
                <h1 className={cls.Title}>Hi people</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                        <Image />
                </div>
                <FaGithub style={{ fontSize: "3.5rem" }} />
                <Button>I am from styled</Button>

                <Link to="/page-2/">Go to page 2</Link>
                <Link to="/testing/">Test Page 1</Link>
                <Link to="/testNoLayout/">Test Page w/o Layout</Link>
                <Link to="/products/newtestpage/">Nested Test Page</Link>
                <img src={img} alt="wind mills" />
                <Leaves />
        </Layout>
)

export default IndexPage
