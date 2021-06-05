import React from "react";
const Footer =()=>{
    const d = new Date();
  return (
      
      <>
      <footer className="w-100 bg-light text-center">
          <p> © {d.getFullYear} drd_success.All Rights Reaserved | T&C Applied</p>
      </footer>
      </>
  )
}
export default Footer; 