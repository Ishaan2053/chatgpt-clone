import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/outline";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

type props = {
  id: string;
};

function ChatRow({ id }: props) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [active, setActive] = useState(false);
  const [messages] = useCollection(
    collection(db, "users", session?.user?.email!, "chats", id, "messages")
  );
  useEffect(() => {
    if (!pathname) return;

    setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async () => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", id));
    router.replace("/");
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`rounded-lg px-5 py-3 text-sm flex items-center space-x-2 hover:bg-gray-700/70 cursor-pointer font-semibold text-gray-300 transition-all duration-200 ease-out justify-center ${active && "bg-gray-700"}  `}
    >
      <ChatBubbleLeftIcon className="h-5 w-5" />
      <p className="flex-1 truncate">
        {messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}
      </p>
      <TrashIcon
        onClick={removeChat}
        className="h-5 w-5 text-gray-300 hover:text-red-500"
      />
    </Link>
  );
}

export default ChatRow;
