import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "reactstrap"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Container>
      <Row>
        <Col sm="10" style={{ border: "2px solid black" }}>
          hello world
        </Col>
        <Col style={{ border: "2px solid black" }}>hi there world!</Col>
      </Row>
    </Container>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
