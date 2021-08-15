import React, { useEffect, useRef, useState } from "react";
import {
  ChatWrapper,
  MessageArea,
  MessageGroup,
  MessageItem,
  SendMessageForm,
  TopMenu,
} from "./ChatPanel.element";
import { Form, Input, NormalButton } from "../commonComponents";
import { isEmpty, isLoaded, useFirebase, useFirebaseConnect } from "react-redux-firebase";
import { useSelector } from "react-redux";
import moment from "moment";

const ChatPanel = ({ currentChannel }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [content, setContent] = useState("");
  const firebase = useFirebase();
  const profile = useSelector(state => state.firebase.profile);
  const currentUserUid = useSelector(state => state.firebase.auth.uid);
  
  useFirebaseConnect([
      {
          path: `messages/${currentChannel.key}`,
          storeAs: "channelMessages"
      }
  ])
  const channelMessages = useSelector(state => state.firebase.ordered.channelMessages);

  const handleSubmit = e => {
      e.preventDefault();
      if (content !== "") {
          const message = {
              content,
              timestamp: firebase.database.ServerValue.TIMESTAMP,
              user: {
                  id: currentUserUid,
                  name: profile.name,
                  avatar: profile.avatar
              }
          }
          firebase.push(`messages/${currentChannel.key}`, message)
          .then(() => setContent(""))
      }
  }

  const timeFromNow = timestamp => moment(timestamp).fromNow();

  const messagesEndRef = useRef(null);

  useEffect(() => {
      messagesEndRef.current.scrollIntoView({
          behaviour: "smooth",
          block: "end"
      })
  });

  const filterMessages = () => {
      const regex = new RegExp(searchTerm, "gi");
      const searchResult = [...channelMessages].reduce((acc, message) => {
          if (message.value.content.match(regex) && message.value.content.match(regex)) {
              acc.push(message);
          }

          return acc;
      }, [])
      return searchResult;
  }

  const renderedMessages = searchTerm !== "" ? filterMessages() : channelMessages;

  return (
    <ChatWrapper className="secondary-bg">
      <TopMenu className="white-bg">
        <span className="fs-4">#{currentChannel.name}</span>
        <Input
          name="search"
          placeholder="Search"
          autoComplete="off"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </TopMenu>
      <MessageArea>
        <MessageGroup>
            {
                renderedMessages && renderedMessages.map(({key, value}) => (
                    <MessageItem className="color-light" key={key}>
                        <img
                        className="img-fluid rounded-circle"
                        src={value.user.avatar}
                        alt="user-image"
                        />
                        <div className="flex-fill mx-2 d-flex flex-column">
                        <span>
                            <a
                            className="mx-2 text-decoration-none color-light"
                            style={{ cursor: "pointer" }}
                            >
                            {value.user.name}
                            </a>
                            <small className="fst-italic">{timeFromNow(value.timestamp)}</small>
                        </span>
                        <span className="mx-2">
                            <p className="m-0">{value.content}</p>
                        </span>
                        </div>
                    </MessageItem>
                ))
            }

            <div ref={messagesEndRef}></div>
        </MessageGroup>
      </MessageArea>
      <SendMessageForm className="px-3">
        <Form className="flex-row" onSubmit={handleSubmit}>
          <Input
            className="flex-fill"
            name="message"
            placeholder="Type a message"
            autoComplete="off"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <NormalButton>
            <i class="bi bi-forward-fill"></i>
          </NormalButton>
        </Form>
      </SendMessageForm>
    </ChatWrapper>
  );
};

export default ChatPanel;
