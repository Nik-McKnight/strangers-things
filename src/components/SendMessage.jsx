import React, { useState } from "react";
import { sendMessage } from "api/post";

export default function SendMessage({ token, post }) {
  const id = post._id;
  const [message, setMessage] = useState("");

  return (
    <div>
      <form
        class="message"
        onSubmit={async (e) => {
          e.preventDefault();

          const result = await sendMessage(token, message, id);
          //   const currentMessage = await result.json();
          if (result.success) {
            alert("Message has been sent!");
          } else {
            alert("Please log in to send a message.");
          }
          return result;
        }}
      >
        <h4>
          <u>Message Seller?</u>
        </h4>
        <input
          placeholder="Message"
          value={message}
          required={true}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit Message</button>
      </form>
    </div>
  );
}
