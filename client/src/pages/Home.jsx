import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <p>Chat with OpenAI's GPT Model</p>
      <span>
        <Link to="/chat">Start</Link>
      </span>
    </>
  );
};
