import Image from "next/image";

export default function Project() {
  return (
    <div className="p-5 bg-[#7b7d7e]">
      <h1 className="text-4xl font-serif text-center text-black mb-8">My Projects</h1>
      <div className="flex flex-wrap justify-center">
        <div className="bg-[#454646] animate-fadeInUp [box-shadow:0px_0px_20px_black] border-2 border-gray-900 rounded-lg shadow-lg overflow-hidden p-5 m-4 max-w-xs flex flex-col items-center transition-transform transform hover:translate-y-[-5px]">
          <Image
            src="/countdown_timer.png"
            alt="Countdown Timer"
            width={300}
            height={250}
            className="rounded-lg mb-4 shadow-md"
          />
          <h3 className="font-serif text-xl text-black mb-2">Countdown Timer</h3>
          <p className="text-white  text-sm mb-4 font-serif">
            A website powered by Next.js and TypeScript, featuring an interactive countdown function for tracking events.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700">
            <a href="https://01-countdown-timer-tau.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Timer
            </a>
          </button>
        </div>

        <div className="bg-[#454646] animate-fadeInUp [box-shadow:0px_0px_20px_black] border-2 border-gray-900 rounded-lg shadow-lg overflow-hidden p-5 m-4 max-w-xs flex flex-col items-center transition-transform transform hover:translate-y-[-5px]">
          <Image
            src="/cv.png"
            alt="Static Interactive Resume"
            width={300}
            height={250}
            className="rounded-lg mb-4 shadow-md"
          />
          <h3 className="font-serif text-xl text-black mb-2">Static Interactive Resume</h3>
          <p className="text-white text-sm mb-4 font-serif">
            An interactive resume built with TypeScript, HTML, and CSS, enabling users to dynamically showcase their skills.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700">
            <a href="https://static-interactive-resume-builder-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </button>
        </div>

        <div className="bg-[#454646] animate-fadeInUp border-2 border-gray-900 rounded-lg shadow-lg overflow-hidden p-5 m-4 max-w-xs flex flex-col items-center transition-transform transform hover:translate-y-[-5px] ">
          <Image
            src="/todo_list.png"
            alt="Todo List"
            width={300}
            height={250}
            className="rounded-lg mb-4 shadow-md"
          />
          <h3 className="font-serif text-xl text-black mb-2">Todo List</h3>
          <p className="text-white text-sm mb-4 font-serif">
            A task management application built with React and TypeScript, designed for efficient organization and productivity.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700">
            <a href="https://02-todo-list.vercel.app/" target="_blank" rel="noopener noreferrer">
              View List
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}