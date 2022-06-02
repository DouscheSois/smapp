import Image from "next/image";
import SidebarLink from "./SidebarLink.js";
import { HomeIcon } from "@heroicons/react/solid";
import ImageOne from "../assets/ImageOne.png";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col items-center xl-items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image src={ImageOne} width={30} height={30} />
      </div>

      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" Icon={HomeIcon} active={true} />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#d65d7a] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:scale-110 duration-500">
        New Comment
      </button>
      <div className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
        <Image
          src={ImageOne}
          width={50}
          height={50}
          alt=""
          className="h-10 w-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5 ml-2 ">
          <h4 className="text-black">Roger Alexander</h4>
          <p className="text-slate-100">@Douschesois</p>
        </div>
        <DotsHorizontalIcon className="text-black h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
};

export default Sidebar;
