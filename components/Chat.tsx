"use client";

import { ArrowDownCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "../components/Message";
import HomePage from "@/app/page";

type Props = {
  chatId?: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();
  let docMessage;
  if (chatId) {
    const [messages] = useCollection(
      session &&
        query(
          collection(
            db,
            "users",
            session?.user?.email!,
            "chats",
            chatId,
            "messages"
          ),
          orderBy("createdAt", "asc")
        )
    );

    docMessage = messages;
  }

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden py-5 " id="chats">
      {docMessage?.empty && (
       <HomePage />
      )}
      {docMessage?.docs.map((message) => {
        return <Message key={message.id} message={message.data()} />;
      })}
    </div>
  );
}

export default Chat;
