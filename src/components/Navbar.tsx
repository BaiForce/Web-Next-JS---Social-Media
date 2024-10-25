import MobileMenu from "./MobileMenu";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT  */}
      <div className="md:hidden lg;block">
        <Link href="/" className="font-bold text-xl text-blue-600">
          BAISOCIAL
        </Link>
      </div>
      {/* CENTER  */}
      <div className="hidden md:flex">
        {/* LINKS */}
        <div className="">
          <Link href="/" className="flex gap-6 text-gray-600">
            <Image src="/home.png" alt="HomePage" width={16} height={16} />
            <span>HomePage</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <Image src="/friends.png" alt="Friends" width={16} height={16} />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <Image src="/stories.png" alt="Stories" width={16} height={16} />
            <span>Home Page</span>
          </Link>
        </div>
      </div>
      {/* RIGHT  */}
      <div className="">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
