import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Xlogo from "./XLogo.jpg";
import TG from "./TG.png";

const fortunes = [
  "You will be rugged today by an Indian.",
  "A great fortune awaits you.",
  "You will buy the next cabal coin within the next 24 hours.",
  "All your bags shall pumpeth!",
  "You will fade a 10x today.",
  "A forgotten friend will reach out soon.",
  "You will restlessly shill this coin today."
];

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
  </svg>
);

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [fortune, setFortune] = useState("");
  const [audio, setAudio] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const audioElement = new Audio('/s.mp3');
    setAudio(audioElement);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('soon...');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Hide the message after 2 seconds
  };

  const handleSpiritClick = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
    setModalVisible(true);
    if (audio) {
      audio.play();
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  return (
    <div
      className="relative h-screen w-screen overflow-clip"
      style={{
        backgroundImage: `url('/bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: 0,
        padding: 0,
      }}
    >
      <div className='text-6xl md:text-8xl font-custom absolute bottom-5 left-5 text-white invisible md:visible'>
        SENDOOOR
      </div>
      <div className='absolute left-5 top-5 flex justify-center rounded-full'>
        <div className='rounded-xl flex-col justify-center bg-slate-100 z-10 items-center space-y-2 px-5 py-3 max-w-full border-2'>
          <button
            onClick={handleCopy}
            className="rounded-xl text-xs bg-orange-500 text-white py-2 px-4 md:hover:bg-orange-600 transition-colors duration-300 z-10 whitespace-nowrap"
          >
            {copied ? 'Copied!' : <CopyIcon />}
          </button>
          <div className='text-xs md:text-sm overflow-x-auto whitespace-nowrap font-custom'>
            coming soon...
          </div>
        </div>
      </div>

      <div className="absolute md:top-5 bottom-5 right-5 flex flex-col items-center z-10">
        <div className="flex flex-row">
          <a href="https://x.com/sendorsolana" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={Xlogo} alt="Xlogo" className="w-12 h-12 rounded-lg" />
          </a>
          <a href="https://t.me/SENDORONSOLANA" className="p-2 hover:scale-110 transition ease-in-out duration-200">
            <img src={TG} alt="Tg logo" className="w-12 h-12" />
          </a>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center -translate-x-2 md:-translate-x-4">
        <motion.img
          src="/dog.png"
          alt="Dog"
          className="cursor-pointer max-w-[60%] md:max-w-[45%]"
          animate={{
            y: [0, -20, 0], // Hover up and down
            rotate: [0, -7, 7, 0], // Shaking effect
            x: [0, 3, -3, 0] // Shaking effect
          }}
          transition={{
            duration: 0.2, // Duration of one shake cycle
            repeat: Infinity, // Repeat infinitely
            ease: 'easeInOut', // Smooth ease-in-out transition
          }}
        />
      </div>
    </div>
  );
}

export default App;