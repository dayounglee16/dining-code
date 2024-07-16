import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const LikeIcon = ({ addLikeplace }) => {
  const [like, setLike] = useState(false);
  const onClickLike = () => {
    setLike(like === false ? true : false);
  };

  return (
    <div>
      <FontAwesomeIcon
        className="buttons"
        icon={like === false ? faHeart : faSolidHeart}
        size="lg"
        onClick={onClickLike}
      />
    </div>
  );
};

export default LikeIcon;
