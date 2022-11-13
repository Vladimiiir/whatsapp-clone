import React, { useState, useEffect } from "react";
import "../styles/SidebarChat.css";
import { Avatar } from "@mui/material";
import db from "../firebase/firebase";
import { Link } from "react-router-dom";

function SidebarChat(props) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (props.id) {
      db.collection("rooms")
        .doc(props.id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [props.id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000)); // 0 - 5000
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName) {
      db.collection("rooms").add({ name: roomName });
    }
  };

  return !props.addNewChat ? (
    <Link to={`/rooms/${props.id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{props.name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add New Chat</h2>
    </div>
  );
}

export default SidebarChat;
