import styled from "styled-components";
import Place from "./Place";

const PlaceList = ({ place, addPlace, setAddPlace }) => {
  const onClickPrev = () => {};

  return (
    <Relative>
      <Prev onClick={onClickPrev}>&lt;</Prev>
      <Container>
        <Place place={place} addPlace={addPlace} setAddPlace={setAddPlace} />
      </Container>
      <Next>&gt;</Next>
    </Relative>
  );
};

export default PlaceList;

const Relative = styled.div`
  position: relative;
`;

const Prev = styled.button`
  position: absolute;
  top: 40%;
  left: -70px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  color: #fff;
  background-color: #999;
  border: none;
  font-size: 26px;
`;

const Next = styled.button`
  position: absolute;
  top: 40%;
  right: -70px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  color: #fff;
  background-color: #999;
  border: none;
  font-size: 26px;
`;

const Container = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
`;
