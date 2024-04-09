import { useRecoilState } from "recoil";
import { toDoArrState } from "../../../atom";
import { EmptyList } from "../EmptyList/EmptyList";
import { ListItem } from "../ListItem/ListItem";
import "./FullList.scss";

export const FullList = () => {
  const [listArr] = useRecoilState(toDoArrState);
  return (
    <div className="full-list-container">
      {!listArr.length && <EmptyList />}
      {listArr.map((list) => {
        return (
          <ListItem content={list.content} key={list.idx} idx={list.idx} />
        );
      })}
    </div>
  );
};
