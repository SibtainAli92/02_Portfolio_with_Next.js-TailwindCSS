export default function Contact() {
    return (
      <div className="bg-[#7b7d7e] p-12 font-sans text-gray-900">
        <div className="max-w-2xl mx-auto bg-[#454646] animate-fadeInUp hover:translate-y-[-5px] rounded-lg shadow-lg p-8 [box-shadow:0px_0px_20px_black]">
          <h2 className="font-serif text-3xl text-black font-bold text-center mb-8">Get in Touch</h2>
          
          <form className="flex flex-col items-center mb-10">
            <div className="w-full mb-5 animate-fadeIn">
              <label htmlFor="name" className="block font-medium mb-1 text-black">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-600 rounded"
              />
            </div>
            <div className="w-full mb-5 animate-fadeIn">
              <label htmlFor="email" className="block font-medium mb-1 text-black">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-gray-600 rounded"
              />
            </div>
            <div className="w-full mb-5 animate-fadeIn">
              <label htmlFor="message" className="block font-medium mb-1 text-black">Message:</label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full p-2 border border-gray-600 rounded h-40"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#2c2c2c] text-black py-3 px-6 rounded transition duration-300 ease-in-out hover:bg-[#242525]"
            >
              Send Message
            </button>
          </form>
          
          <div className="flex justify-center animate-fadeIn">
            <a
              href="https://github.com/SibtainAli92"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img
                src="https://img.shields.io/badge/GitHub-Profile-red?style=for-the-badge&logo=github"
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/sibtain-ali-data-pro-4404ba2b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2"
            >
              <img
                src="https://img.shields.io/badge/LinkedIn-Profile-red?style=for-the-badge&logo=linkedin"
                alt="LinkedIn"
              />
            </a>
            <a
              href="mailto:sibtainali.data.pro@gmail.com"
              className="mx-2"
            >
              <img
                src="https://img.shields.io/badge/Gmail-Contact%20Me-green?style=for-the-badge&logo=gmail"
                alt="Gmail"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }