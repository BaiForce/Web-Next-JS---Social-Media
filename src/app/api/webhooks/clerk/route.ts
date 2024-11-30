import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/client";

export async function POST(req: Request) {
  console.log("Starting Webhook Handler");

  // Ambil secret dari environment variable
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("Error: WEBHOOK_SECRET is missing in environment variables");
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Ambil headers dari request
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  console.log("Headers received:", { svix_id, svix_timestamp, svix_signature });

  // Jika header tidak lengkap, kembalikan respons error
  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("Missing required svix headers");
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  // Ambil payload JSON dari request
  let body;
  try {
    body = await req.text(); // Ambil body mentah untuk parsing manual
    console.log("Raw body received:", body);
  } catch (err) {
    console.error("Error reading body:", err);
    return new Response("Failed to read request body", { status: 400 });
  }

  // Buat instance Svix dengan secret
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verifikasi payload dengan header
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
    console.log("Webhook verification successful");
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Webhook verification failed", {
      status: 400,
    });
  }

  // Parse body JSON
  let parsedBody;
  try {
    parsedBody = JSON.parse(body);
    console.log("Parsed body:", parsedBody);
  } catch (err) {
    console.error("Error parsing JSON body:", err);
    return new Response("Invalid JSON payload", { status: 400 });
  }

  // Log tipe event dan data
  const { id } = evt.data;
  const eventType = evt.type;
  console.log(`Event received: ${eventType} with ID: ${id}`);

  // Event: user.created
  if (eventType === "user.created") {
    try {
      await prisma.user.create({
        data: {
          id: evt.data.id,
          username: JSON.parse(body).data.username,
          avatar: JSON.parse(body).data.image_url || "/noAvatar.png",
          cover: "/noCover.png",
        },
      });
      console.log("User created successfully:", parsedBody.data.username);
      return new Response("User has been created!", { status: 200 });
    } catch (err) {
      console.error("Error creating user:", err);
      return new Response("Failed to create the user!", { status: 500 });
    }
  }

  // Event: user.updated
  if (eventType === "user.updated") {
    try {
      await prisma.user.update({
        where: {
          id: evt.data.id,
        },
        data: {
          username: JSON.parse(body).data.username,
          avatar: JSON.parse(body).data.image_url || "/noAvatar.png",
        },
      });
      console.log("User updated successfully:", JSON.parse(body).data.username);
      return new Response("User has been updated!", { status: 200 });
    } catch (err) {
      console.error("Error updating user:", err);
      return new Response("Failed to update the user!", { status: 500 });
    }
  }

  console.log("Unhandled event type:", eventType);
  return new Response("Webhook received", { status: 200 });
}
