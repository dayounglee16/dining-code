import { atom } from "recoil";
import data from "./datas/data";

export const PlaceDataState = atom({
  key: "placeList",
  default: data,
});

export const LikeListAddItemState = atom({
  key: "addPlaceItem",
  default: [],
});
