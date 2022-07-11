import React, { useEffect, useState } from "react";
import { Post } from "components";
import { fetchMe } from "api/user";

export default function Profile({ token, postList, setPostList }) {
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getMyData = async () => {
      const result = await fetchMe(token);

      if (result.success) {
        const tempPosts = result.data.posts;
        const tempMessages = result.data.messages;
        setPosts(tempPosts);
        setMessages(tempMessages);
      } else {
      }
    };
    getMyData();
  }, []);

  return (
    <div>
      <div>
        {posts.map((post) => {
          return (
            <div>
              <Post
                key={post.id}
                token={token}
                post={post}
                postList={postList}
                setPostList={setPostList}
              />
            </div>
          );
        })}
      </div>
      <div>
        {messages.map((message) => {
          return <div>{message.content}</div>;
        })}
      </div>
    </div>
  );
}
