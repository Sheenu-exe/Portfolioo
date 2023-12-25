import HTML from "../img/icons8-html-logo-500.png";
import CSS from "../img/icons8-css-480 (1).png"
import Javascript from "../img/icons8-javascript-500.png";
import React from "../img/icons8-react-native-384.png";
import Tailwind from "../img/icons8-tailwind-css-480.png";
import Bootstrap from "../img/icons8-bootstrap-480.png";
import NextJs from "../img/icons8-next.js-480.png";
import MaterialUi from "../img/icons8-material-ui-480 (1).png";
import "../App.css"



export default function Timeline() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container  max-w-5xl px-4 py-12 mx-auto sm:w-full">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 ">
              <h3 className="text-3xl font-semibold">Tech Stack</h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="circle flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] ">
                <img
                  className="w-20 h-20 dark:text-violet-400"
                  src={HTML}
                  alt=""
                />
                <h3 className="text-xl w-fit flex justify-center mx-2 font-semibold tracki"> HTML </h3>
                </div>

                <div className="circle flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <img
                  className="w-20 h-20 dark:text-violet-400"
                  src={CSS}
                  alt=""
                />
                <h3 className="text-xl w-fit flex justify-center mx-2 font-semibold tracki"> CSS </h3>
                </div>
                <div className="circle flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <img
                  className="w-20 h-20 dark:text-violet-400"
                  src={Javascript}
                  alt=""
                />
                <h3 className="text-xl w-fit flex justify-center mx-2 font-semibold tracki"> Javascript</h3>
                </div>
                <div className="circle flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <img
                  className="w-20 h-20 dark:text-violet-400"
                  src={React}
                  alt=""
                />
                <h3 className="text-xl w-fit flex justify-center mx-2 font-semibold tracki"> React </h3>
                </div>
                <div className="circle flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <img
                  className="w-20 h-20 dark:text-violet-400"
                  src={Tailwind}
                  alt=""
                />
                <h3 className="text-xl w-fit flex justify-center mx-2 font-semibold tracki"> Tailwind </h3>
                </div>
                <div className="circle flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <img
                  className="w-20 h-20 dark:text-violet-400"
                  src={Bootstrap}
                  alt=""
                />
                <h3 className="text-xl w-fit flex justify-center mx-2 font-semibold tracki"> Bootstrap </h3>
                </div>
                <div className="circle flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <img
                  className="w-20 h-20 dark:text-violet-400"
                  src={NextJs}
                  alt=""
                />
                <h3 className="text-xl w-fit flex justify-center mx-2 font-semibold tracki"> Next.js </h3>
                </div>
                <div className="circle flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                <img
                  className="w-20 h-20 dark:text-violet-400"
                  src={MaterialUi}
                  alt=""
                />
                <h3 className="text-xl w-fit flex justify-center mx-2 font-semibold tracki">Material UI</h3>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
