import React from "react"
import NextLink from "next/link"

function Link(props) {
  if (props.local)
    return <NextLink href={props.href}>{props.children}</NextLink>
  else
    return (
      <a href={props.href} rel="noreferrer" target="_blank">
        {props.children}
      </a>
    )
}

export default Link
