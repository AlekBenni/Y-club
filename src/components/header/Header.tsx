import React from 'react'
import Menu from '../menu/Menu'
import Divider from '../../style_blocks/Divider'

function Header() {
    return (
        <div className="header-bg">
            <div className="wrap">           
                <div className="top-header">
                    <Menu/>
                </div>
                <div className="content-header">
                    <h2>Do you want a yacht for rent?</h2>
                    <h1>Welcome on board</h1>
                    <Divider/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="button">
                        <a href="http://localhost:3000/">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
