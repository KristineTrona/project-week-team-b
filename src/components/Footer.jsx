import * as React from 'react'
import twitter from "../lib/images/Twitter.svg"
import facebook from "../lib/images/Facebook.svg"
import instagram from "../lib/images/Instagram.svg"

export default function Footer (){
    return (
      <div className = "footer">
        <div className="footer-social-media">
          <div className="social-media-button-background"><img className="twitter" src={twitter}/></div>
          <div className="social-media-button-background"><img className="facebook" src={facebook}/></div>
          <div className="social-media-button-background"><img className= "instagram" src={instagram}/></div>
        </div>
      </div>
    )
  }