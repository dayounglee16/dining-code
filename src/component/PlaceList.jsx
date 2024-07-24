import styled from "styled-components";
import Place from "./Place";

const PlaceList = () => {
  return (
    <Relative>
      <Container>
        <Place />
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
