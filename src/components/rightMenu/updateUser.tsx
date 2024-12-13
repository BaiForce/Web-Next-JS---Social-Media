"use client";

import { updateProfile } from "@/lib/action";
import { User } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CldUploadWidget } from "next-cloudinary";
import { error } from "console";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import UpdateButton from "./UpdateButton";

const UpdateUser = ({ user }: { user: User }) => {
  const [open, setOpen] = useState(false);
  const [cover, setCover] = useState<any>(false);

  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    error: false,
  });

  const router = useRouter();
  const handleClose = () => {
    setOpen(false);
    state.success && router.refresh();
  };

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
            action={(formData) =>
              formAction({ formData, cover: cover?.secure_url || "" })
            }
            className="p-6 md:p-12 bg-white rounded-lg shadow-md flex flex-col gap-6 w-full md:w-2/3 xl:w-1/2 relative"
          >
            {/* TITLE */}
            <h1 className="text-xl font-semibold">Update User Profile</h1>
            <p className="text-sm text-gray-500">
              Use the form below to update your profile details
            </p>
            {/* COVER PIC UPLOAD */}

            <CldUploadWidget
              uploadPreset="BaiForceSocial"
              onSuccess={(result) => setCover(result.info)}
            >
              {({ open }) => {
                return (
                  <div className="flex flex-col gap-2" onClick={() => open()}>
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
                );
              }}
            </CldUploadWidget>
            {/* INPUT FIELDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">First Name</label>
                <input
                  type="text"
                  placeholder={user.name || "Enter your first name"}
                  defaultValue={user.name || ""}
                  className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                  name="name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">Surname</label>
                <input
                  type="text"
                  placeholder={user.surname || "Enter your surname"}
                  defaultValue={user.surname || ""}
                  className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                  name="surname"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-600">Description</label>
              <input
                type="text"
                placeholder={
                  user.description || "Share something about yourself"
                }
                defaultValue={user.description || ""}
                className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                name="description"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">City</label>
                <input
                  type="text"
                  placeholder={user.city || "Enter your city"}
                  defaultValue={user.city || ""}
                  className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                  name="city"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">School</label>
                <input
                  type="text"
                  placeholder={user.school || "Enter your school"}
                  defaultValue={user.school || ""}
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
                  placeholder={user.work || "Enter your work"}
                  defaultValue={user.work || ""}
                  className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                  name="work"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-600">Website</label>
                <input
                  type="text"
                  placeholder={user.website || "Enter your website"}
                  defaultValue={user.website || ""}
                  className="ring-1 ring-gray-300 p-2 rounded-md text-sm"
                  name="website"
                />
              </div>
            </div>
            <UpdateButton />
            {state.success && (
              <p className="text-green-500">Profile has been updated</p>
            )}
            {state.error && (
              <p className="text-red-500">Something went wrong!</p>
            )}
            {/* Close Button */}
            <div
              className="absolute top-3 right-3 cursor-pointer text-xl"
              onClick={handleClose}
            >
              <AiOutlineClose />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateUser;
