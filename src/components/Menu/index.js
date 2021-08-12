import React from 'react'
import { MenuLink, MenuLinkItems, MenuLogo, MenuWrapper } from './Menu.element'

const Menu = () => {
    return (
        <MenuWrapper className="primary-bg">
            <div className="container d-flex justify-content-between align-items-center">
                <MenuLogo href="/" className="color-white">Let's Chat</MenuLogo>
                <MenuLinkItems>
                    <MenuLink className="color-white">Login</MenuLink>
                    <MenuLink className="color-white">Sign Up</MenuLink>
                </MenuLinkItems>
            </div>
        </MenuWrapper>
    )
}

export default Menu
