"use client";

import { updateProfile } from "@/lib/action";
import { User } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span
        className="text-blue-500 text-xs cursor-pointer"
        onClick={() => setOpen(true)}
      >
        Update
      </span>
      {open && (
        <div className="absolute w-screen h-screen top-0 left-0 bg-black bg-opacity-65 flex items-center justify-center z-50">
          <form
            action={updateProfile}
            className="p-6 md:p-12 bg-white rounded-lg shadow-md flex flex-col gap-6 w-full md:w-2/3 xl:w-1/2 relative"
          >
            {/* TITLE */}
            <h1 className="text-xl font-semibold">Update User Profile</h1>
            <p className="text-sm text-gray-500">
              Use the form below to update your profile details
            </p>

            {/* COVER PIC UPLOAD */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Cover Picture</label>
              <div className="flex items-center gap-2 cursor-pointer">
                <Image
                  src={user.cover || "/noCover.png"}
                  alt="cover"
                  width={48}
                  height={32}
                  className="w-12 h-8 rounded-md object-cover"
                />
                <span className="text-sm underline text-blue-500 cursor-pointer">
                  Change
                </span>
              </div>
            </div>

            {/* INPUT FIELDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">Surname</label>
                <input
                  type="text"
                  placeholder="Wissaluno"
                  className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                  name="surname"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Descripstion</label>
              <input
                type="text"
                placeholder="Share something about yourself"
                className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                name="desc"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">City</label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                  name="city"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">School</label>
                <input
                  type="text"
                  placeholder="MIT"
                  className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                  name="school"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">Work</label>
                <input
                  type="text"
                  placeholder="Space X"
                  className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                  name="work"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">Website</label>
                <input
                  type="text"
                  placeholder="BaiForce.dev"
                  className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                  name="website"
                />
              </div>
            </div>

            <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-600">
              Save Changes
            </button>

            <div
              className="absolute text-xl top-3 right-3 cursor-pointer"
              onClick={handleClose}
            ></div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
