import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LikeListBtn = () => {
  const navigate = useNavigate();
  return <LikeBtn onClick={() => navigate("/likepage")}>좋아요 목록</LikeBtn>;
};

export default LikeListBtn;

const LikeBtn = styled.button`
  &:hover {
    background-color: rgb(25, 183, 194);
  }
  width: 100px;
  height: 35px;
  border-radius: 60px;
  line-height: 35px;
  border: none;
  background-color: #33b4b8c2;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  margin-right: 30px;
`;
