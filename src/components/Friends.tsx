import Image from "next/image";
import Link from "next/link";

const Friends = () => {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between ">
        <span className="text-gray-500">Friends Request</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 ">
          <Image
            src="https://images.pexels.com/photos/1724376/pexels-photo-1724376.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Gemiati</span>
        </div>
        <div className="flex jestify-end gap-3">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 ">
          <Image
            src="https://images.pexels.com/photos/1724376/pexels-photo-1724376.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Gemiati</span>
        </div>
        <div className="flex jestify-end gap-3">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 ">
          <Image
            src="https://images.pexels.com/photos/1724376/pexels-photo-1724376.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Gemiati</span>
        </div>
        <div className="flex jestify-end gap-3">
          <Image
            src="/accept.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            alt=""
            width={20}
            height={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Friends;
