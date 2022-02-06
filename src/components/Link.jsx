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
  if (local)
    return (
      <NextLink href={href} className={className}>
        {children}
      </NextLink>
    )
  return (
    <a target={target} href={href} rel={rel} className={className}>
      {children}
    </a>
  )
}
