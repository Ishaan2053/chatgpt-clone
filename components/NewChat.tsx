"use client";

import {
  PlusIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { db } from "../firebase";

type ButtonText = {
  text?: string;
};

function NewChat({ text }: ButtonText) {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        messges: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };

  // FOR CLOSING SIDEBAR
  const xHandler = () => {
    const sideBar: HTMLElement | null = document.getElementById("side-bar");
    const xButton: HTMLElement | null = document.getElementById("x-button");
    const topBar: HTMLElement | null = document.getElementById("top-bar");
    sideBar!.style.display = "none";
    xButton!.style.display = "none";
    topBar!.style.display = "";
  };

  return (
    <div className="mb-1 flex flex-row gap-2">
      <a
        onClick={createNewChat}
        className="flex p-3 items-center gap-3 font-semibold transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 flex-shrink-0 flex-grow"
      >
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="h-4 w-4"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
        New chat
      </a>
      <span className="relative" data-state="open">
        <a
          className="flex p-3 gap-3 transition-colors duration-200 text-white cursor-pointer text-sm rounded-md border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center"
          onClick={xHandler}
          id="x-button"
        >
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>

          <span className="absolute bg-black hidden group-hover:flex border width-1 height-1 p-0 m-1 whitespace-nowrap overflow-clip z-10">
            Close sidebar
          </span>
        </a>
      </span>
    </div>
  );
}

export default NewChat;
