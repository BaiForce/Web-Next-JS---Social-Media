import Image from "next/image";
import Link from "next/link";

const Birthdays = () => {
  return (
    <div className="p-4 rounded-lg bg-white shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex items-center justify-between ">
        <span className="text-gray-500">Birthdays</span>
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
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      {/* UPPCOMING */}
      <div className="p-4 bg-slate-100 rounded-lg items-center gap-4  flex">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-500 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-600">
            See other 16 have upcoming birthdays{" "}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
