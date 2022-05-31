import React from "react"
import Link from "next/link"

function Nav() {
  return (

    <nav>
      <div className="content">
      <img src="../images/logo.svg" alt="white gogopool logo"/>
      <ul>
        <li><Link href="https://discord.com">Discord</Link></li>
        <li><Link href="https://twitter.com">Twitter</Link></li>
      </ul>
      </div>
    </nav>
  )
}

export default Nav