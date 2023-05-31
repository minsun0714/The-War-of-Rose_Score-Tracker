import { UserWrapper, UserName, UserImg } from "./GameResultStyle";
import { UserProp } from "./type";

function User({ src, userNumber }: UserProp) {
  return (
    <>
      <UserWrapper>
        <UserImg src={src}></UserImg>
        <UserName>user {userNumber}</UserName>
      </UserWrapper>
    </>
  );
}
export default User;
