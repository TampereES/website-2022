import * as React from "react"
import Image from "next/image"

import Layout from "@/components/Layout"
import kubeLogo from "../images/KUBElogo1.png"

import styles from "../styles/homepage.module.css"

const IndexPage = () => (
  <Layout>
    <div style={{ width: "75%" }}>
      <Image
        className={styles.kubeLogo}
        src={kubeLogo}
        
        width="2000px"
        height="2000px"
        alt="KUBE logo"
      />
      <h1>Encouraging inspired people to take action.</h1>
      <p>
        TampereES is a student-run entrepreneurship community that encourages
        people inspired people to take action.
      </p>
    </div>

    <div style={{ width: "75%" }}>
      <h1>Take action.</h1>
      <p>
        TampereES organizes events and other networking opportunities for you to
        get involved. Come meet some other like-minded people and get to know
        us.
      </p>
    </div>

    <h1 id="events">Upcoming events</h1>
    <p style={{ color: "green" }}>TODO: carousel of events</p>
  </Layout>
)

export default IndexPage
