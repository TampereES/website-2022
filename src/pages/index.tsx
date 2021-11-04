import * as React from "react"
import Image from "next/image"

import Layout from "@/components/Layout"
import kubeLogo from "../images/KUBElogo1.png"

import styles from "../styles/homepage.module.css"

const IndexPage = () => (
  <div>
    <div className={styles.kubeLogoContainer}>
      <Image
        className={styles.kubeLogo}
        src={kubeLogo}
        alt="KUBE logo"
        objectFit="contain"
        layout="fill"
        priority
      />
    </div>
    <Layout>
      <div style={{ width: "75%" }}>
        <h1>Encouraging inspired people to take action.</h1>
        <p>
          TampereES is a student-run entrepreneurship community that encourages
          people inspired people to take action.
        </p>
      </div>

      <div style={{ width: "75%" }}>
        <h1>Take action.</h1>
        <p>
          TampereES organizes events and other networking opportunities for you
          to get involved. Come meet some other like-minded people and get to
          know us.
        </p>
      </div>

      <h1 id="events">Upcoming events</h1>
      <p>TODO: carousel of events</p>
    </Layout>
  </div>
)

export default IndexPage
