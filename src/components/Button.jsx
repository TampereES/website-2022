import React from "react"

function Button({ children, primary, secondary, className }) {
  let style = null

  // Colors
  if (primary) {
    style = { color: "#fffdf3", backgroundColor: "#083d77" }
  } else if (secondary) {
    style = { backgroundColor: "#fffdf3", color: "#083d77" }
  } else {
    style = { color: "red" }
  }

  // Styling
  className +=
    " outline-none inline-block text-xl px-5 py-4 duration-200 text-center font-bold rounded-lg"

  return (
    <button style={style} className={className}>
      {children}
    </button>
  )
}

export default Button
