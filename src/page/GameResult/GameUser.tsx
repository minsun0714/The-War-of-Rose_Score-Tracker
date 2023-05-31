import { UserWrapper, UserName, UserImg } from "./GameResultStyle";
import { UserProp } from "./type";

function User({ src, userName }: UserProp) {
  return (
    <>
      <UserWrapper>
        <UserImg src={src}></UserImg>
        <UserName>{userName}</UserName>
      </UserWrapper>
    </>
  );
}
export default User;
