import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkButton = styled(Link)`
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background-color: transparent;
    border: 2px solid #FF2E63;
    color: #FF2E63;

    &:hover {
        background-color: #FF2E63;
        color: #fff;
        transition: 0.4s ease;
    }
`;

export const NormalButton = styled.button`
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    background-color: transparent;
    border: 2px solid #08D9D6;
    color: #08D9D6;

    &:hover {
        background-color: #08D9D6;
        color: #fff;
        transition: 0.4s ease;
    }
`;

export const Input = styled.input`
    outline: none;
    padding: 0.5rem 1rem;
    border: 1px solid #252A34;
    color: #252A34;
    font-weight: 300;
    font-size: 15px;
    border-radius: 5px;
    
    &:focus {
        border: 1px solid #FF2E63;
        transition: 0.2s ease-in;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;