import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

import { LikeListAddItemState } from "../atom";
import { useRecoilState } from "recoil";
import { useState } from "react";

const LikeIcon = ({ item }) => {
  const [heartIcon, setHeartIcon] = useState(false);
  const [addPlaceItem, setAddPlaceItem] = useRecoilState(LikeListAddItemState);

  const onClickLike = () => {
    const newHeartIcon = !heartIcon;
    setHeartIcon(newHeartIcon);

    if (newHeartIcon) {
      if (!addPlaceItem.some((placeItem) => placeItem.id === item.id)) {
        setAddPlaceItem([...addPlaceItem, item]);
      }
    } else {
      setAddPlaceItem(
        addPlaceItem.filter((placeItem) => placeItem.id !== item.id)
      );
    }
  };

  return (
    <div>
      <FontAwesomeIcon
        className="buttons"
        icon={heartIcon === false ? faHeart : faSolidHeart}
        size="lg"
        onClick={onClickLike}
      />
    </div>
  );
};

export default LikeIcon;
