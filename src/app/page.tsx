import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#7b7d7e] font-sans text-gray-700 p-5">
      <header className="flex justify-center items-center py-16 px-5">
        <div className="flex flex-col md:flex-row items-center animate-fadeInUp hover:translate-y-[-5px] bg-[#454646] border-2 border-gray-800 rounded-lg shadow-lg p-10 max-w-4xl w-full animate-fadeIn [box-shadow:0px_0px_20px_black]">
          <div className="flex-1 md:mr-5 text-center md:text-left">
            <h1 className="font-serif text-4xl font-bold text-black mb-5">Sibtain's Portfolio</h1>
            <p className="font-serif text-lg mb-7 text-gray-300">
              Welcome to my digital space! I am a passionate professional dedicated to excellence in my work. Here, you can explore my expertise and creative projects.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              className="rounded-full shadow-lg  [box-shadow:0px_0px_20px_white]"
              src="/sibtain.png"
              alt="Sibtain's Profile Picture"
              width={300}
              height={300}
              style={{ objectFit: "cover" }} // Ensures the image fits well in the circle
            />
          </div>
        </div>
      </header>
    </div>
  );
}