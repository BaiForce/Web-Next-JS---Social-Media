"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";
import { constants } from "buffer";
import { z } from "zod";
import { profile } from "console";

export const switchFollow = async (userId: string) => {
  const authResult = await auth(); // Tunggu hasil dari auth()
  const currentUserId = authResult.userId; // Ambil userId dari hasil auth()

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    const exitingFollow = await prisma.follower.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId,
      },
    });

    if (exitingFollow) {
      await prisma.follower.delete({
        where: {
          id: exitingFollow.id,
        },
      });
    } else {
      const exitingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentUserId,
          recieverId: userId,
        },
      });

      if (exitingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: exitingFollowRequest.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentUserId,
            recieverId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const switchBlock = async (userId: string) => {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    const exitingBlock = await prisma.block.findFirst({
      where: {
        blockerId: currentUserId,
        blockedId: userId,
      },
    });

    if (exitingBlock) {
      await prisma.block.delete({
        where: {
          id: exitingBlock.id,
        },
      });
    } else {
      await prisma.block.create({
        data: {
          blockerId: currentUserId,
          blockedId: userId,
        },
      });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const acceptFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    const exitingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        recieverId: currentUserId,
      },
    });

    if (exitingFollowRequest) {
      await prisma.follower.create({
        data: {
          followerId: currentUserId,
          followingId: userId,
        },
      }); // Membuat follower baru
      await prisma.followRequest.delete({
        where: {
          id: exitingFollowRequest.id,
        },
      }); // Menghapus follow request
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const declineFollowRequest = async (userId: string) => {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated!");
  }

  try {
    const exitingFollowRequest = await prisma.followRequest.findFirst({
      where: {
        senderId: userId,
        recieverId: currentUserId,
      },
    });

    if (exitingFollowRequest) {
      await prisma.follower.delete({
        where: {
          id: exitingFollowRequest.id,
        },
      }); // Membuat follower baru
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const updateProfile = async (
  prevState: { success: boolean; error: boolean },
  payload: { formData: FormData; cover: string }
) => {
  const { formData, cover } = payload;
  const fields = Object.fromEntries(formData);

  const filterFields = Object.fromEntries(
    Object.entries(fields).filter(([_, value]) => value !== "")
  );

  const Profile = z.object({
    cover: z.string().optional(),
    name: z.string().max(60).optional(),
    surname: z.string().max(60).optional(),
    description: z.string().max(255).optional(),
    city: z.string().max(60).optional(),
    school: z.string().max(60).optional(),
    work: z.string().max(60).optional(),
    website: z.string().max(60).optional(),
  });

  const validateFields = Profile.safeParse({ cover, ...filterFields });

  if (!validateFields.success) {
    console.log(validateFields.error.flatten().fieldErrors);
    return { success: false, error: true };
  }

  const { userId } = await auth();

  if (!userId) {
    return { success: false, error: true };
  }

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...validateFields.data,
      },
    });
    return { success: true, error: false };
  } catch (error) {
    console.log(error);
    return { success: false, error: true };
  }
};
