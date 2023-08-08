"use client";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { db } from "../firebase";
import ModelSelection from "@/components/ModelSelection";
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
    <div className="absolute bg-gray-500/20 w-22 mx-52 items-center justify-center text-gray-400 rounded-xl text-sm bottom-14 mt-2 md:mx-24 shadow-lg">
      <form onSubmit={sendMessage} className="m-4 space-x-5 flex">
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed text-lg  disabled:text-gray-300  text-white overflow-y-auto"
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Send a message...."
        />

        <button
          disabled={!prompt || !session}
          className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40"
        >
          <span className="" data-state="closed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              className="h-4 w-4 m-1 md:m-0"
              stroke-width="2"
            >
              <path
                d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                fill="green"
              ></path>
            </svg>
          </span>
        </button>
      </form>
    </div>
  );
}

export default ChatInput;

<div className="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2 md:pl-2 md:w-[calc(100%-.5rem)]">
  <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
    <div
      className="relative flex h-full flex-1 items-stretch md:flex-col"
      role="presentation"
    >
      <div>
        <div className="h-full flex ml-1 md:w-full md:m-auto md:mb-4 gap-0 md:gap-2 justify-center">
          <div className="grow"></div>
        </div>
      </div>
      <div className="flex flex-col w-full py-[10px] flex-grow md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs">
        <textarea
          id="prompt-textarea"
          data-id="root"
          placeholder="Send a message"
          className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0 max-height: 200px; height: 24px; overflow-y-hidden"
        ></textarea>
      </div>
    </div>
  </form>
</div>;
