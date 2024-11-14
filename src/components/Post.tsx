import Image from "next/image";

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER  */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26087617/pexels-photo-26087617/free-photo-of-the-hike-to-hoodoos-in-banff-national-park.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Gerson Wissaluno</span>
        </div>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      {/* DEXC  */}
      <div className="flex flex-col gap-4">
        <div className="w-full min-h-96 relative">
          <Image
            src="https://images.pexels.com/photos/1978126/pexels-photo-1978126.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p>
          Tahun ini, untuk pertama kalinya, aku merasakan salju di luar negeri.
          Suasana yang begitu magis, saat butiran salju pertama kali menyentuh
          kulit, seolah dunia berhenti sejenak dan segala yang ada di sekitar
          terasa begitu berbeda. Suara langkah yang tertinggal di atas salju,
          udara yang lebih dingin dari biasanya, semuanya membawaku ke dalam
          pengalaman yang tak terlupakan.
        </p>
      </div>
      {/* INTERACTION  */}
      <div className="flex items-center justify-between text-sm mt-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt=""
              width={16}
              height={16}
              className="curson-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              135 <span className="hidden md:inline"> Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt=""
              width={16}
              height={16}
              className="curson-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              135 <span className="hidden md:inline"> Comments</span>
            </span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt=""
              width={16}
              height={16}
              className="curson-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              135 <span className="hidden md:inline"> Share</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
