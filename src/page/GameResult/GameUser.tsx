import { UserWrapper, UserName, UserImg } from "./GameResultStyle";
import { UserProp } from "./type";

function User({ src }: UserProp) {
  return (
    <>
      <UserWrapper>
        <UserImg src={src}></UserImg>
        <UserName>user</UserName>
      </UserWrapper>
    </>
  );
}
export default User;
