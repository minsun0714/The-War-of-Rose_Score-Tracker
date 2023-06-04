import { useDispatch, useSelector } from "react-redux";
import { UserWrapper, UserName, UserImg } from "./GameResultStyle";
import { UserProp } from "./type";
import { RootState } from "../../store/rootStore";
import { getWhoseTurnItIs } from "../../store/TapTurnStore";

function User({ userNumber, src, userName }: UserProp) {
  const dispatch = useDispatch();
  const currentGameTurn = useSelector(
    (store: RootState) => store.tapTurnStore.tapTurn
  );
  const onClick = () => {
    dispatch(getWhoseTurnItIs({ tapTurn: userNumber }));
  };
  console.log(userNumber, currentGameTurn === userNumber);
  return (
    <>
      <UserWrapper onClick={onClick} isMyTurn={currentGameTurn === userNumber}>
        <UserImg src={src}></UserImg>
        <UserName>{userName}</UserName>
      </UserWrapper>
    </>
  );
}
export default User;
