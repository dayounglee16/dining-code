import styled from "styled-components";
import getCafeImage from "../Util/get-cafe-image";
import mainlogo from "./../images/logo.png";

const LikePage = ({ addPlace, navigate, setAddPlace }) => {
  const onClickRemoveItem = (deleteId) => {
    setAddPlace(addPlace.filter((placeItem) => placeItem.id !== deleteId));
  };

  return (
    <Container>
      <Title>
        <img
          src={mainlogo}
          alt="메인로고"
          width="35%"
          height="100%"
          onClick={() => navigate("/")}
        />
      </Title>
      <LikePlace>
        {addPlace.length !== 0 ? (
          addPlace.map((item, i) => (
            <PlaceItem key={i}>
              <img src={getCafeImage(item.id)} width="220px" alt={item.title} />
              <h4>{item.title}</h4>
              <DeleteBtn onClick={() => onClickRemoveItem(item.id)}>
                삭제
              </DeleteBtn>
            </PlaceItem>
          ))
        ) : (
          <PlaceAlert>저장한 장소가 없습니다.</PlaceAlert>
        )}
      </LikePlace>
    </Container>
  );
};

export default LikePage;

const Container = styled.div`
  width: 1000px;
  margin-top: 30px;
  background-color: #f8fcfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.div`
  text-align: center;
  cursor: pointer;
`;

const PlaceAlert = styled.p`
  border: 1px solid rgba(79, 189, 187, 0.232);
  padding: 5px 40px;
  text-align: center;
  margin-top: 30px;
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

const DeleteBtn = styled.button`
  &:active {
    background-color: rgba(79, 189, 187, 0.806);
  }
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  padding: 5px;
  color: #fff;
  cursor: pointer;
  background-color: rgb(79, 189, 188);
`;
