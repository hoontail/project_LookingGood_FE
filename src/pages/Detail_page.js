import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import {
  _addComment,
  _getComments,
  _editComment,
  _deleteComment,
} from "../redux/modules/comment";
import { now } from "moment";

// comments =[{
//   "id":"0"
//   "name": "sungyoung lee"
//   "cfomment": "good"
//  fff "time": "2022-04-10 14:44:44"
// },
// {
//   "id":"0"
//   "name": "sungyoung lee"
//   "comment": "good"
//   "time": "2022-04-10 14:44:44"
// },
// {
//   "id":"0"
//   "name": "sungyoung lee"
//   "comment": "good"
//   "time": "2022-04-10 14:44:44"
// }]

const DetailPage = (props) => {
  const history = useHistory();
  
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  console.log(comments, comment);
  // on Render, "componentDidMount"
  useEffect(() => {
    // Get Comments.
    axios
      .get("./comment.js")
      .then((response) => {
        setComments(response.comments);
      })
      .catch((error) => {
        console.log("this the error:", error);
      });
  }, []);

  const postComment = () => {
    setComments([
      ...comments,
      {
        name: "sean",
        comment: comment,
        time: "12:00",
      },
    ]);

    axios.post("url", {
      id: "1",
      name: "sean",
      comment: comment,
      time: "12:00",
    });
  };

  return (
    <Main>
      <BigBox>
        <ImageRect src={"http://via.placeholder.com/400x300"} />
        <Box>
          <NameTag>
            <ImageCircle />
            <Text>Sungyoung Lee</Text>
          </NameTag>
          <PosterBox>
            <Text>
              여기에는 글 내용이 들어가는 곳 인데 여기에 글 내용이 들어갈까라고
              생각했는데 확실히 들어가겠지만 그래도 혹시 모르니까 좀더 적어볼게
              안녕 션 반가워
            </Text>
          </PosterBox>

          {/* Option 1 */}
          <Box1>
            {comments.map((comment) => (
              <SmallBox>
                <ImageCircle />
                <Text>{comment.name}</Text>
                <Text> {comment.comment}</Text>
                <Text1> {new Date().toUTCString()}</Text1>
              </SmallBox>
            ))}
          </Box1>

          <SmallBox>
            <Input
              placeholder="Leave a comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <Button
              onClick={() => {
                postComment();
                // history.push(`/Post_list`);
              }}
            >
              Submit
            </Button>
          </SmallBox>
        </Box>
      </BigBox>
    </Main>
  );
};

const NameTag = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const PosterBox = styled.div`
  display: flex;
  float: left;
  height: 150px;
  /* 
  border: 3px solid black; */
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fafafa;

  /* padding-top: 100px; */
  height: 100%;
  min-height: 100vh;
`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #394481;
  color: #394481;
  margin: 0 1em;
  padding: 0.6em 0.8em;
  border-radius: 50px;
  font-size: medium;
`;

const SmallBox = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  float: left;
  /* border: 2px solid red; */
`;

const BigBox = styled.div`
  margin: auto;
  display: flex;
  align-items: center;

  /* border: 3px solid blue; */
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  border: 1px solid #394481;
  padding: 0 1em;
  margin: 1em;
  width: 400px;
  height: 600px;
  border-radius: 30px;

  /* justify-content: space-between; */
  /* border: 3px solid yellow; */
`;

const Box1 = styled.div`
  flex-direction: column;
  justify-content: center;
  /* border: 3px solid green; */
  height: 300px;
`;

const ImageRect = styled.div`
  border-radius: 30px;
  display: flex;
  width: 500px;
  height: 600px;
  /* position: relative; */
  /* padding-top: 75%; */
  /* overflow: hidden; */
  background-image: url("https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2017%2F07%2F15%2FDwightSchrute-e1500140903345.jpg&q=60");
  background-size: cover;
`;

const ImageCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-image: url("https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2017%2F07%2F15%2FDwightSchrute-e1500140903345.jpg&q=60");
  background-size: cover;
  margin: 3px;
`;
const Input = styled.input`
  border: 1px solid #394481;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  border-radius: 10px;
`;
const Text = styled.text`
  color: "#222831";
  font-size: 15px;
  padding: 0 4px;
`;
const Text1 = styled.text`
  color: "#222831";
  font-size: 11px;
  justify-content: right;
`;

export default DetailPage;