import React, { useState } from "react";
import "./ChatInput.css";
import Button from "@mui/material/Button";
import db from "../firebase";
import firebase from "firebase/compat/app";
import { useStateValue } from "../StateProvider";
import "firebase/compat/firestore";

function ChatInput({ channelName, channelId }) {
  const [{ user }] = useStateValue();
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId && input.length > 0) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        userImage: user.photoURL,
        userName: user.displayName,
      });
    }
    console.log(input);
    setInput("");
  };
  return (
    <div className="chatInput">
      <form>
        <input
          placeholder={`Message # ${channelName}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;
