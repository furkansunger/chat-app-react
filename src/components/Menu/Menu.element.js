import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuWrapper = styled.div`
    padding: 1rem 0;
    width: 100%;
`;

export const MenuLogo = styled.a`
    font-size: 24px;
    font-weight: 300;
    text-decoration: none;
    
    &:hover {
        color: white;
    }
`;

export const MenuLinkItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;

export const MenuLink = styled(Link)`
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;
    
    &:first-child {
        margin-right: 1rem;
    }

    &:hover {
        color: white;
    }
`;