"use client";

import { XCircleIcon } from "@heroicons/react/24/outline";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession, signOut } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import DevelopedBy from "./DevelopedBy";
import Modelselection from "./ModelSelection";
import NewChat from "./NewChat";

function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  
  const xHandler = () => {
    const sideBar: HTMLElement | null = document.getElementById("side-bar");
    const xButton: HTMLElement | null = document.getElementById("x-button");
    const topBar: HTMLElement | null = document.getElementById("top-bar");
    sideBar!.style.display = "none";
    xButton!.style.display = "none";
    topBar!.style.display = "";
  };

  return (
    <div id="side-bar" className="p-2 hidden md:flex flex-col h-screen ">
      <div className="flex-1">
        <div>
          <div
            onClick={xHandler}
            id="x-button"
            className=" bg-[#202123] pl-5 float-right md:hidden "
          >
            <XCircleIcon className="w-10 h-10 text-white " />
          </div>
          <NewChat />
          {/* modal selection  */}
          <div className="inline">
            <Modelselection />
          </div>

          {/* map through the chat rows  */}
          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {chats?.docs.map((chat) => {
              return <ChatRow key={chat.id} id={chat.id} />;
            })}
          </div>
        </div>
      </div>
      {session && (
        //   <div className="w-6 h-6 py-2 px-6 text-sm text-white my-5 border border-gray-700 rounded-lg ">
        //     <button onClick={() => signOut()}>Sign Out</button>
        //   </div>

        <div className="border-t border-white/20 pt-2 empty:hidden">
          <a className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-800 rounded-md">
            <span className="flex w-full flex-row justify-between">
              <span className="gold-new-button flex items-center gap-3">
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
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Upgrade to Plus
              </span>
              <span className="rounded-md bg-yellow-200 px-1.5 py-0.5 text-xs font-medium uppercase text-gray-800">
                NEW
              </span>
            </span>
          </a>

          {/* SECOND COLUMN */}

          <div className="group relative">
            <button
              className="flex w-full items-center gap-2.5 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-600/80 group-ui-open:bg-gray-800"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="flex-shrink-0">
                <div className="relative flex">
                  <img
                    src={
                      session?.user?.image! ||
                      `https://ui-avatars.com/api/?name=${session?.user?.name} `
                    }
                    alt="profile pic"
                    className="h-6 w-6 md:h-15 md:w-15 rounded cursor-pointer mx-auto  hover:opacity-50"
                  />
                </div>
              </div>
              <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-white font-semibold">
                {/* session?.user?.id! || `https://ui-avatars.com/api/?name=${session?.user?.email}  */}
                Ishaan2053@gmail.com
              </div>
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-4 w-4 flex-shrink-0 text-gray-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>


{/* HOVER COLUMNS */}


              <div className="absolute bottom-full left-0 z-20 mb-2 w-full overflow-hidden rounded-md bg-black pb-1.5 pt-1 outline-none opacity-100 translate-y-0" id="group dropdown">
                <nav>
                  <button className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-700 w-full">
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
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    Settings
                  </button>
                  <div className="my-1.5 h-px bg-white/20"></div>
                  <button
                    onClick={() => signOut()}
                    className="flex p-3 items-center gap-3 transition-colors duration-200 text-white cursor-pointer text-sm hover:bg-gray-700 w-full"
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
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Log out
                  </button>
                </nav>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideBar;
