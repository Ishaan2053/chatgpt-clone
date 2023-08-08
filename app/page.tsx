import {
  BoltIcon,
  ExclamationTriangleIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import NewChat from "../components/NewChat";

function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-gray-100 overflow-hidden">
      <div className="absolute top-6 flex rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-black/40">
        <ul className="flex w-full list-none gap-1 sm:w-auto">
          <li
            className="group/toggle w-full"
            data-testid="text-davinci-002-render-sha"
          >
            <button
              type="button"
              id="radix-:req:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              className="w-full cursor-pointer"
            >
              <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-500/40 dark:text-gray-100">
                <span className="relative max-[370px]:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-4 w-4 transition-colors text-green"
                    width="16"
                    height="16"
                    stroke-width="2"
                  >
                    <path
                      d="M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="truncate text-sm font-medium md:pr-1.5 pr-1.5">
                  GPT-3.5
                </span>
              </div>
            </button>
          </li>
          <li className="group/toggle w-full">
            <button
              type="button"
              id="radix-:res:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              className="w-full cursor-pointer"
            >
              <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100">
                <span className="relative max-[370px]:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="h-4 w-4 transition-colors group-hover/button:text-brand-purple"
                    width="16"
                    height="16"
                    stroke-width="2"
                  >
                    <path
                      d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <span className="truncate text-sm font-medium md:pr-1.5 pr-1.5">
                  GPT-4
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  stroke-width="2"
                  className="h-4 w-4 transition-colors sm:ml-0 group-hover/options:text-gray-500 !text-gray-500 -ml-2 group-hover/button:text-brand-purple"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </li>
        </ul>
      </div>
      <h1 className="text-4xl font-bold mt-14 mb-16">ChatGPT</h1>

      <div className="flex space-x-2 text-center mx-4">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-6 w-6" />
            <h2 className="text-xl">Examples</h2>
          </div>
          <div className="space-y-3">
            <p className="infoText">
              Explain quantum computing in simple terms
            </p>
            <p className="infoText">
              Got any creative ideas for a 10 year old's birthday?
            </p>
            <p className="infoText hidden md:flex ">
              How do I make an HTTP request in Javascript?
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-6 w-6" />
            <h2 className="text-xl">Capabilties</h2>
          </div>
          <div className="space-y-3">
            <p className="infoText">
              Remembers what user said earlier in the conversation
            </p>
            <p className="infoText">
              Allows user to provide follow-up corrections
            </p>
            <p className="infoText hidden md:flex">
              Trained to decline inappropriate requests
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-6 w-6" />
            <h2 className="text-xl">Limitations</h2>
          </div>
          <div className="space-y-4">
            <p className="infoText hidden md:flex">
              May occasionally generate incorrect information
            </p>
            <p className="infoText flex md:hidden">Sometimes Incorrect</p>
            <p className="infoText hidden md:flex">
              May occasionally produce harmful instructions or biased content
            </p>
            <p className="infoText hidden md:flex">
              Limited knowledge of world and events after 2021
            </p>
            <p className="infoText flex md:hidden">
              Limited knowledge of events upto 2021 only
            </p>
          </div>
        </div>
      </div>

      <div className=" py-5 px-10 font-bold">
        <NewChat  />
      </div>
      <sub className="absolute mb-9 text-gray-300">
        Free Research Preview. ChatGPT may produce inaccurate information about
        people, places, or facts.
        <a
          className="underline"
          href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
          target="_blank"
        >
          ChatGPT August 3 Version
        </a>
      </sub>
    

      <div
        className="group absolute bottom-5 right-4 z-10" >
        <button
          className="invisible flex items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 dark:border-white/10 dark:bg-white/10 dark:text-gray-200 md:visible mr-2"
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div className="h-6 w-6">?</div>
            <span
                className="absolute transition-all hidden group-hover:flex -left-24 -top-3 -translate-y-full max-w-32 px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:translate-x-3/4 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">This tooltip doesn't go anywhere</span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
