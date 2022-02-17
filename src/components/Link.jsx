import React from "react"
import NextLink from "next/link"

export default function Link({
  children,
  local,
  target,
  href,
  className,
  rel
}) {
  const classes = "text-dark-blue hover:text-blue " + className

  if (local)
    return (
      <NextLink href={href} target={target} rel={rel} passHref>
        <a className={classes}>{children}</a>
      </NextLink>
    )
  return (
    <a href={href} target={target} rel={rel} className={classes}>
      {children}
    </a>
  )
}
