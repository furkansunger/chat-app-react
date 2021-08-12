import React from 'react'
import chatImg from "../../images/undraw_Group_chat_re_frmo.svg";
import { LinkButton } from '../commonComponents';
import { HeaderWrapper } from './Header.element';

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="container">
                <div className="row">
                    <div className="col-7 d-flex flex-column justify-content-center align-items-start">
                        <h1 className="mb-3">Message anywhere!</h1>
                        <LinkButton>Sign Up</LinkButton>
                    </div>
                    <div className="col-5">
                        <img className="img-fluid" src={chatImg} alt="chat-img" />
                    </div>
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header
