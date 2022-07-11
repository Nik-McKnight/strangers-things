import React from "react";

export default function Messages({ token, post }) {
  const messageList = post.messages;

  function displayMessageList() {
    if (messageList.length > 0) {
      messageList.map((message) => {
        return <li>{message}</li>;
      });
    } else {
      return <li>No messages</li>;
    }
  }

  return (
    <div>
      <h4>
        <u>Messages Received:</u>
      </h4>
      <ul>
        {messageList.length > 0 ? (
          messageList.map((message) => {
            return (
              <li>
                {message.content} from {message.fromUser.username}
              </li>
            );
          })
        ) : (
          <li>No messages</li>
        )}
      </ul>
    </div>
  );
}
