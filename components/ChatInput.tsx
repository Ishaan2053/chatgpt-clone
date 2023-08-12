"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { db } from "../firebase";
import useSWR from "swr";
import { useRouter } from "next/navigation";

type Props = {
  chatId?: string;
};

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  // useSWR to get model

  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt("");

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };
    //adding messages to collection
    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId!,
        "messages"
      ),
      message
    );

    // toast notification to say loading
    const notification = toast.loading("ChatGPT is thinking...");

    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    })
      .then(() => {
        // toast notification to say successful
        toast.success("ChatGPT has responded!", { id: notification });
      })
      .catch(() => console.log("Server is busy! Please try later."));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-400/10 text-gray-400 max-w-full rounded-lg text-sm absolute bottom-2 mt-2 mb-14 shadow-lg ">
      <form onSubmit={sendMessage} className="p-3 space-x-5 w-full">
        <input
          className="bg-transparent focus:outline-none flex-1 font-semibold disabled:cursor-not-allowed  disabled:text-gray-300 text-white"
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Send a message"
        />

        <button
          disabled={!prompt || !session}
          className=" p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-[#00A67E] text-white bottom-1.5 transition-colors disabled:opacity-40"
          type="submit"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              className="h-4 w-4 m-1 md:m-0"
              stroke-width="2"
            >
              <path
                d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </button>
      </form>
    </div>
  );
}

export default ChatInput;


