import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "지태규",
        comment: "안녕하세요, 태규입니다.",
    },
    {
        name: "리액트",
        comment: "리액트 재미있을까요?",
    },
    {
        name: "지태규",
        comment: "재미있길...",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;