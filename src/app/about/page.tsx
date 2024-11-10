export default function About() {
    return (
      <div className="flex justify-center items-center h-screen bg-[#7b7d7e] px-5">
        <div className="bg-[#454646] border-2 border-gray-800 animate-fadeInUp hover:translate-y-[-5px] shadow-lg animate-fadeIn lg:p-7 p-3 rounded-lg flex flex-col justify-center items-center text-center lg:space-y-5 space-y-2 [box-shadow:0px_0px_20px_black]">
          <h1 className="text-center font-bold lg:text-6xl text-2xl text-black font-serif">About</h1>
          <p className="text-sm md:text-xl text-justify text-white max-w-lg font-serif">
            I am a dedicated learner with a strong foundation in data science and artificial intelligence. My journey includes comprehensive training in Python and Pandas, along with various machine learning courses ranging from introductory to intermediate levels. I have developed skills in data visualization, feature engineering, and SQL, including both introductory and advanced techniques, through projects on platforms like Kaggle.
          </p>
          <p className="text-sm md:text-xl text-justify text-white max-w-lg font-serif">
            Currently, I am expanding my knowledge in the fields of Artificial Intelligence, Web 3.0, and the Metaverse through ongoing studies at the Governor House in Karachi. My passion for technology and data drives me to continuously seek new learning opportunities, equipping me with the skills necessary to tackle complex challenges in the evolving digital landscape.
          </p>
        </div>
      </div>
    );
  }