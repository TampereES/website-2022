import React from "react"
import { Link as GLink } from "gatsby"

function Link(props) {
  if (props.local) return <GLink to={props.href}>{props.children}</GLink>
  else
    return (
      <a href={props.href} rel="noopener" target="_blank">
        {props.children}
      </a>
    )
}

export default Link
