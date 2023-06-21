import { CardItem } from "./CardItem";
import GameData from "../app.mock";
import { useEffect, useState } from "react";

export const CardItemList = () => {
  const [cardList, setCardList] = useState([...GameData]);

  const onClickHandler = (currentId) => {
    console.log(currentId);
    const updateList = cardList.map((elem) => {
      if (elem.id == currentId) {
        elem.isOpen = true;
      } else {
        elem.isOpen = false;
      }
      return elem;
    });
    setCardList((updateList) => [...updateList]);
  };

  return (
    <div className="card-item-list">
      {cardList.map((item) => {
        return (
          <CardItem
            key={item.id}
            id={item.id}
            image={item.pic}
            onClick={onClickHandler}
            isOpen={item.isOpen}
          ></CardItem>
        );
      })}
    </div>
  );
};
