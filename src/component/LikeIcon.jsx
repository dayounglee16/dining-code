import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

import { LikeListAddItemState } from "../atom";
import { useRecoilState } from "recoil";

const LikeIcon = ({ item }) => {
  const [addPlaceItem, setAddPlaceItem] = useRecoilState(LikeListAddItemState);

  const onClickLike = () => {
    if (addPlaceItem.find((placeItem) => placeItem.id === item.id)) {
      setAddPlaceItem(
        addPlaceItem.filter((placeItem) => placeItem.id !== item.id)
      );
    } else {
      setAddPlaceItem([...addPlaceItem, item]);
    }
  };

  const isIncludes = addPlaceItem.find((placeItem) => placeItem.id === item.id);
  console.log(isIncludes);
  return (
    <div>
      <FontAwesomeIcon
        className="buttons"
        icon={isIncludes ? faSolidHeart : faHeart}
        size="lg"
        onClick={onClickLike}
      />
    </div>
  );
};

export default LikeIcon;
