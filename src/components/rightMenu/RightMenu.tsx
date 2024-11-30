import { User } from "@prisma/client";
import Ad from "../Ad";
import Birthdays from "./Birthdays";
import Friends from "./Friends";
import UserInfoCard from "./UserInfoCard";
import Usermediacard from "../Usermediacard";
import { Suspense } from "react";

const RightMenu = ({ user }: { user?: User }) => {
  return (
    <div className="flex flex-col gap-6">
      {user ? (
        <>
          <Suspense fallback="loading...">
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback="loading...">
            <Usermediacard user={user} />
          </Suspense>
        </>
      ) : null}
      <Friends />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
