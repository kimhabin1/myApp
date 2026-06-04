import React from "react";
import imgUserIcon from "../assets/user_icon.png";

function Comment(props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.imageContainer}>
        <img src={imgUserIcon} style={styles.image} />
      </div>
      <div style={styles.contentContainer}>
        <span style={styles.nameText}>
          {props.name}
        </span>
        <span style={styles.commentText}>
          {props.comment}
        </span>
      </div>
    </div>
  );
}

export default Comment;