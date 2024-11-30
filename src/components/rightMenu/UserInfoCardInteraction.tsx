"use client";

const UserInfoCardInteraction = ({
  userId,
  currentuserId,
  isUserBlocked,
  isFollowing,
  isfollowingSent,
}: {
  userId: string;
  currentuserId: string;
  isUserBlocked: boolean;
  isFollowing: boolean;
  isfollowingSent: boolean;
}) => {
  return (
    <>
      <form action="">
        <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
          {isFollowing
            ? "Following"
            : isfollowingSent
            ? "Friend Request Sent"
            : "Follow"}
        </button>
      </form>
      <form action="" className="self-end">
        <span className="text-red-400 text-xs cursor-pointer">
          {isUserBlocked ? "Unblock User" : "Block User "}
        </span>
      </form>
    </>
  );
};

export default UserInfoCardInteraction;
