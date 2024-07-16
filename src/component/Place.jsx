import styled from "styled-components";
import getCafeImage from "../Util/get-cafe-image";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Place = ({ place, addPlace, setAddPlace }) => {
  const onClickAddPlace = (action) => {
    const addItem = addPlace.filter((placeItem) => placeItem.id === action.id);
    addPlace.push(addItem);
    // if (addItem) {
    //   setAddPlace([...addPlace, addItem]);
    // }
  };

  return (
    <Container>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={100}
        slidesPerView={4}
        navigation
        loop={true}
      >
        {place.map((item, i) => {
          return (
            <SwiperSlide key={item.id}>
              <PlaceItem>
                <PlaceBox>
                  <img
                    src={getCafeImage(i + 1)}
                    alt={item.title}
                    width="100%"
                  />
                </PlaceBox>
                <PlaceTitle>
                  <h4>{item.title}</h4>
                  <HeartBtn
                    onClick={onClickAddPlace({
                      id: item.id,
                      title: item.title,
                    })}
                  >
                    좋아요
                  </HeartBtn>
                </PlaceTitle>
              </PlaceItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default Place;

const Container = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  position: relative;
`;

const PlaceItem = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PlaceBox = styled.div`
  width: 240px;
  height: 240px;
  background-color: #ccc;
  border-radius: 15px;
`;

const PlaceTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeartBtn = styled.button`
  border: none;
  background-color: rgb(25, 183, 194);
  color: #fff;
  width: 50px;
  height: 25px;
  line-height: 20px;
  border-radius: 25px;
  font-size: 12px;
  cursor: pointer;
`;
