import styled from "styled-components";
import "./App.css";
import Keyword from "./component/Keyword";
import PlaceList from "./component/PlaceList";
import mainlogo from "./images/logo.png";
import LikeListBtn from "./component/LikeListBtn";
import LikePage from "./pages/LikePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import data from "./datas/data";
import { useState } from "react";

function App() {
  const place = data;
  const [addPlace, setAddPlace] = useState([]);

  const navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header>
                <img src={mainlogo} alt="메인로고" width="20%" height="100%" />
                <LikeListBtn
                  onClick={() => navigate("/likepage")}
                  navigate={navigate}
                />
              </Header>
              <Content>
                <Keyword />
                <PlaceList
                  place={place}
                  addPlace={addPlace}
                  setAddPlace={setAddPlace}
                />
              </Content>
            </>
          }
        />

        <Route
          path="/likepage"
          element={
            <LikePage
              addPlace={addPlace}
              setAddPlace={setAddPlace}
              navigate={navigate}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  width: 1000px;
  height: 400px;
  background-color: #fff;
  border-radius: 30px;
  margin-top: 50px;
  box-shadow: 0px 0px 30px #eee;
`;
