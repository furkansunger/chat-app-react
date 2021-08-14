import styled from "styled-components";

export const SidebarWrapper = styled.div`
    height: 100vh;
    width: 100%;
`;

export const UserInfo = styled.div`
    padding-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    width: 100%;
`;

export const Channels = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 0 0;
    padding: 0;
`;

export const ChannelItem = styled.li`
    width: 100%;
    list-style: none;
    font-size: 18px;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 10px;

    &:hover {
        background-color: #ccc;
        transition: 0.4s ease;
    }
`;