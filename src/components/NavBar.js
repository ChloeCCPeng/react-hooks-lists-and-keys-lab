import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const elementLinks = links.map((link) => {
    return (
      <a key={link} href={`#${link}`}>{link}</a> 
    )
  })
  return (
    <nav>
      {elementLinks}
    </nav>
  )
}




export default NavBar;

