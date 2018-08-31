import * as React from 'react'
import twitter from "../lib/images/Twitter.svg"
import facebook from "../lib/images/Facebook.svg"
import instagram from "../lib/images/Instagram.svg"

export default function Footer (){
    return (
      <div className = "footer">
        <div className="footer-social-media">
          <div className="social-media-button-background"><a href="https://www.facebook.com/" target="_blank"><img className="facebook" src={facebook}/></a></div>
          <div className="social-media-button-background"><a href="https://twitter.com/?lang=nl" target="_blank"><img className="twitter" src={twitter}/></a></div>
          <div className="social-media-button-background"><a href="https://www.instagram.com/" target="_blank"><img className= "instagram" src={instagram}/></a></div>
        </div>
      </div>
    )
  }