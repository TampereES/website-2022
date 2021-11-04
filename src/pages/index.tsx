import * as React from "react"
import Image from "next/image"

import Layout from "@/components/Layout"
import kubeLogo from "../images/KUBElogo1.png"

import styles from "../styles/homepage.module.scss"
import Container from "@/components/Container"

const IndexPage = () => (
  <div>
    <Layout>
      <div>
        <Container style={{ display: "flex" }}>
          <div
            style={{ width: "80%", margin: "5em 0", display: "inline-block" }}
          >
            <h1>Encouraging inspired people to take action.</h1>
            <p>
              TampereES is a student-run entrepreneurship community that
              encourages people inspired people to take action.
            </p>
          </div>
          <Image
            className={styles.kubeLogo}
            src={kubeLogo}
            alt="KUBE logo"
            objectFit="contain"
            priority
          />
        </Container>
      </div>
      <div id="bg-blue">
        <Container>
          <div style={{ width: "75%", margin: "5em 0" }}>
            <h1>Take action.</h1>
            <p>
              TampereES organizes events and other networking opportunities for
              you to get involved. Come meet some other like-minded people and
              get to know us.
            </p>
          </div>
        </Container>{" "}
      </div>

      <Container>
        <h1 id="events">Upcoming events</h1>
      </Container>
    </Layout>
  </div>
)

export default IndexPage
