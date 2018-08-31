import * as React from 'react'
import Logo_1 from '../lib/images/Logo_1.svg'
import { Link } from 'react-router-dom';

export default class Header extends React.PureComponent{
  
  
  render(){
    return (
      <div className="header">
        <Link to={'/'}>
        <img src={Logo_1} alt="logo"/>
        </Link>
        <div className="title">
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <h1>
            <span style={{color: "#85BA12"}}>Kid </span>
            <span style={{color: "#564F4D"}}>to </span>
            <span style={{color: '#C34E59'}}>Kid </span>
          </h1>
          </Link>
        </div>
      </div>
    )
  }
}
