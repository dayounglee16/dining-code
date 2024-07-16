import styled from "styled-components";
import getCafeImage from "../Util/get-cafe-image";
import mainlogo from "./../images/logo.png";

const LikePage = ({ addPlace, navigate }) => {
  console.log(addPlace);
  return (
    <Container>
      <Title>
        <img
          src={mainlogo}
          alt="메인로고"
          width="20%"
          height="100%"
          onClick={() => navigate("/")}
        />
      </Title>
      <LikePlace>
        {addPlace.map((item, i) => (
          <PlaceItem key={i}>
            <img src={getCafeImage(i + 1)} width="220px" alt={item.title} />
            <h4>{item.title}</h4>
          </PlaceItem>
        ))}
      </LikePlace>
    </Container>
  );
};

export default LikePage;

const Container = styled.div`
  width: 1000px;
  margin-top: 30px;
  background-color: #f8fcfc;
`;

const Title = styled.div`
  text-align: center;
  cursor: pointer;
`;

const LikePlace = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const PlaceItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 40px;
`;
