import { BoltIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/24/outline";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
     
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-6 w-6 "></SunIcon>
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">234567</p>
            <p className="infoText">234567</p>
            <p className="infoText">23456</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-6 w-6 "></BoltIcon>
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">234567</p>
            <p className="infoText">234567</p>
            <p className="infoText">23456</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-6 w-6 "></ExclamationTriangleIcon>

            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">234567</p>
            <p className="infoText">234567</p>
            <p className="infoText">23456</p>
          </div>
        </div>
      </div>
    </div>
  );
}
