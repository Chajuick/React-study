import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "차주익",
        comment: "안녕하세요, 차주익입니다.",
    },
    {
        name: "차화준",
        comment: "저는 귀엽습니다.",
    },
    {
        name: "차덕수",
        comment: "군대가야해요.",
    },
]

function CommentList(props) {
    return (
        <div>
            {comments.map((item, index) => (
                <Comment key={index} name={item.name} comment={item.comment}/>
            ))}
        </div>
    );
}

export default CommentList;