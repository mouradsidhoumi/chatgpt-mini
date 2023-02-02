import { useEffect, useState, useRef } from "react";

import AuthService from "../services/auth.service";
import DataService from "../services/data.service";

import "./chat.css";

export const Chat = () => {
  const inputText = useRef();
  const [messages, setMessages] = useState([]);
  const [inProgress, setInProgress] = useState();

  useEffect(() => {
    // (Auth alredy handled with Protected Route)
    //DataService.loadPastMessages();
  }, []);

  const sendRequest = async (event) => {
    event.preventDefault();

    const inputMessage = {
      isFromUser: true,
      content: inputText.current.value,
    };
    inputText.current.value = "";
    setMessages((messages) => [...messages, inputMessage]);
    setInProgress(true);
    try {
      const res = await DataService.answer(inputMessage.content);
      if (res.status === "ok") {
        setMessages((messages) => [...messages, { content: res.answer }]);
      } else {
        setResponse("Error");
      }
      setInProgress(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div>
        <div className="chat">
          <div className="messages" id="chat">
            {Array.from(messages).map((message, index) => (
              <div
                key={index}
                className={message?.isFromUser ? "message user" : "message"}
              >
                {message?.content}
              </div>
            ))}
            {inProgress && (
              <div className="message stark">
                <div className="typing typing-1"></div>
                <div className="typing typing-2"></div>
                <div className="typing typing-3"></div>
              </div>
            )}
          </div>
          <form className="input" onSubmit={sendRequest}>
            <input ref={inputText} placeholder="Aa" type="text" required />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <hr />
      <div style={{ bottom: 0 }}>
        <p>
          <a href="" onClick={AuthService.logout}>
            Log out
          </a>
        </p>
      </div>
    </>
  );
};
/*
<TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          inputRef={textFieldRef}
          style={{
            marginBottom: "1rem",
          }}
        />
        <Button variant="contained" onClick={sendRequest}>
          Send
        </Button>

        <div>
          {inProgress ? (
            <CircularProgress />
          ) : (
            <p style={{ whiteSpace: "pre-line" }}>{response}</p>
          )}
        </div>
        */
