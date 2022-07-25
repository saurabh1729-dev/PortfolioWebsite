import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Saurabh</span>
          <span>Frontend Developer with high level of experience in web designing
            and development, producting the Quality work</span>
          
        </div>
        <button className="button i-button">Hire me</button>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={require('../../img/Coding-bro.png')} alt="" />
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
      {/* <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
      </div> */}
    </div>
  )
}

export default Intro