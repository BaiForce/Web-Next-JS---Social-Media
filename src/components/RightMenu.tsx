import Ad from "./Ad";
import Birthdays from "./Birthdays";
import Friends from "./Friends";
import UserInfoCard from "./UserInfoCard";
import Usermediacard from "./Usermediacard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId} />
          <Usermediacard userId={userId} />
        </>
      ) : null}
      <Friends />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
