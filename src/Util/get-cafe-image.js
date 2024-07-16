import bridge from "./../images/bridge.jpg";
import unexpectedly from "./../images/unexpectedly.jpg";
import fraser from "./../images/fraser.jpg";
import Churros from "./../images/Churros.jpg";
import starbucksbundang from "./../images/starbucksbundang.jpg";
import starbucksori from "./../images/starbucksori.jpg";
import compose from "./../images/compose.jpg";
import starbucksbundang2 from "./../images/starbucksbundang2.jpg";
import coffeetrangshua from "./../images/coffeetrangshua.jpg";
import starbucksmigeum from "./../images/starbucksmigeum.jpg";
import paiks from "./../images/paiks.jpg";

const getCafeImage = (cafeId) => {
  switch (cafeId) {
    case 1:
      return bridge;
    case 2:
      return unexpectedly;
    case 3:
      return fraser;
    case 4:
      return Churros;
    case 5:
      return starbucksbundang;
    case 6:
      return starbucksori;
    case 7:
      return compose;
    case 8:
      return starbucksbundang2;
    case 9:
      return coffeetrangshua;
    case 10:
      return starbucksmigeum;
    case 11:
      return paiks;
    default:
      return null;
  }
};

export default getCafeImage;
