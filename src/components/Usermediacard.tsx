import Image from "next/image";
import Link from "next/link";

const Usermediacard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between ">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      {/* BOTTOM */}
      <div className="flex gap-4 justify-between flew-wrap">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/1724376/pexels-photo-1724376.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            className="object-cover rounded-md"
            rounded-md
          />
        </div>
      </div>
    </div>
  );
};

export default Usermediacard;
