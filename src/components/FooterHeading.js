import React from "react"

const styles = { color: "#083D77" }

function Heading(props) {
  return <h2 style={styles}>{props.children}</h2>
}

export default Heading
