import React from "react";
import Comment from "./Comment";
function CommentList(props) {
    return (
        <div>
            <Comment name="홍길동" comment="안녕하세요. 댓글남깁니다~" />
            <Comment name="유재석" comment="리액트 재미있어요~!" />
            <Comment name="강민경" comment="저도 리액트 배워보고 싶어요!!"/>
        </div>
    );
}
export default CommentList;
