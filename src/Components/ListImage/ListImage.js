import React from "react";
import CardImage from "../CardImage/CardImage";
import "./ListImage.css";

const ListImage = ({ listImage }) => (
  <div className="listImage">
    {listImage.map(item => (
      <CardImage key={item.id} {...item} />
    ))}
  </div>
);

export default ListImage;
