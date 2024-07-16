import styled from "styled-components";

const Keyword = () => {
  return (
    <Navbar>
      <Hashtag>
        #카페<TxtGray>(11)</TxtGray>
      </Hashtag>

      <ReadBtn>자세히보기</ReadBtn>
    </Navbar>
  );
};

export default Keyword;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 2px solid #eee;
  cursor: pointer;
`;

const Hashtag = styled.h3`
  padding: 30px;
`;

const TxtGray = styled.span`
  color: #999;
  padding-left: 5px;
`;

const ReadBtn = styled.button`
  &:hover {
    background-color: rgb(25, 183, 194);
    color: #fff;
  }
  margin-right: 30px;
  width: 90px;
  height: 30px;
  font-size: 12px;
  border-radius: 50px;
  line-height: 20px;
  border: none;
  background-color: #eee;
  color: #333;
  cursor: pointer;
`;
