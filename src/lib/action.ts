"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

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
    }else {
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
