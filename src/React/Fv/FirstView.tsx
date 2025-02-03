import { useEffect, useState, useRef } from "react";
import FvImg from "./Fv.jpg";

const FirstView = () => {
  const [text, setText] = useState("");
  const isTypingRef = useRef(false);
  const typingElementRef = useRef(null);

  useEffect(() => {
    const Typing = (sentence: any) => {
      if (isTypingRef.current) return;
      isTypingRef.current = true;
      setText("");

      sentence.split("").forEach((character: any, index: any) => {
        setTimeout(() => {
          setText((prevText) => prevText + character);
          if (index === sentence.length - 1) {
            setTimeout(() => {
              isTypingRef.current = false;
            }, 500);
          }
        }, 80 * index);
      });
    };
    Typing("Made By React");
  }, []);

  const BgOnImages = {
    backgroundImage: `url(${FvImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 1,
  };
  const NoBr = {
    whiteSpace: "nowrap",
  }

  return (
    <div className="video-container bg-dark" id="top" style={BgOnImages}>
      <div className="overlay-text">
        <h2 className="copy">
          <p className="fw-bold oshare-font" ref={typingElementRef} style={NoBr}>{text}</p>
        </h2>
      </div>
    </div>
  );
};

export default FirstView;
