import Ad from "./Ad";
import Birthdays from "./Birthdays";
import Friends from "./Friends";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <Friends />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
