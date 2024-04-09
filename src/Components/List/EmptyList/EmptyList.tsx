import { BoxStyle } from "../../Styles/BoxStyles";
import "./EmptyList.scss";

export const EmptyList = () => {
  return (
    <div>
      <BoxStyle>
        <div className="empty">할 일을 추가해보세요!</div>
      </BoxStyle>
    </div>
  );
};
