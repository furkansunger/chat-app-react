import styled from "styled-components";

export const ChatWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const TopMenu = styled.div`
    width: 100%;
    padding: 1rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MessageArea = styled.div`
    width: 100%;
    height: 80vh;
    background-color: transparent;
`;

export const MessageGroup = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`;

export const MessageItem = styled.div`
    width: 100%;
    padding: 1rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SendMessageForm = styled.div`
    width: 100%;
    padding: 0.5rem 0;
`;