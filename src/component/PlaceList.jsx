import styled from "styled-components";
import Place from "./Place";

const PlaceList = ({ place, addPlace, setAddPlace }) => {
  return (
    <Relative>
      <Container>
        <Place place={place} addPlace={addPlace} setAddPlace={setAddPlace} />
      </Container>
    </Relative>
  );
};

export default PlaceList;

const Relative = styled.div`
  position: relative;
`;

const Container = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
`;
