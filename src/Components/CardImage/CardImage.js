import React, { useState, useEffect, useRef } from "react";
import "./CardImage.css";

const CardImage = ({ description, urls: { regular: src } }) => {
  const [span, setSpan] = useState(0);
  const imageRef = useRef();
  useEffect(() => {
    imageRef.current.addEventListener("load", () =>
      doSpanImage(imageRef.current.clientHeight)
    );
  }, []);
  const doSpanImage = clientHeight => {
    setSpan(Math.ceil(clientHeight / 20));
  };

  return (
    <div className="cardImage" style={{ gridRowEnd: `span ${span}` }}>
      <img ref={imageRef} alt={description} src={src} />
    </div>
  );
};

export default CardImage;
