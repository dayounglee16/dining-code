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
    const addItem = place.filter((placeItem) => placeItem.id === action.id);

    if (addPlace.length === action.id) {
      alert("동일한 장소가 있습니다.");
    } else if (addItem) {
      setAddPlace([...addPlace, ...addItem]);
    }
    console.log(`action.id : ${action.id}`);
    console.log(`addItem : ${addItem}`);
    console.log(`addPlace : ${addPlace}`);
  };

  return (
    <Container>
      <Prev className="swiper-button-prev" />
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={100}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
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
                  <LikeBtn
                    onClick={() =>
                      onClickAddPlace({
                        id: item.id,
                        title: item.title,
                      })
                    }
                  >
                    좋아요
                  </LikeBtn>
                </PlaceTitle>
              </PlaceItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Next className="swiper-button-next" />
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

const LikeBtn = styled.button`
  &:active {
    background-color: rgba(25, 183, 194, 0.694);
  }
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

const Prev = styled.button`
  position: absolute;
  top: 40%;
  left: -100px;
  cursor: pointer;
  color: rgb(25, 183, 194);
  border: none;
  font-size: 26px;
  background-color: #f8fcfc;
`;

const Next = styled.button`
  position: absolute;
  top: 40%;
  right: -100px;
  cursor: pointer;
  color: rgb(25, 183, 194);
  border: none;
  font-size: 26px;
  background-color: #f8fcfc;
`;
