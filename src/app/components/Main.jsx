"use client";
import React, { useState, useRef } from "react";
// import songs from "./songs.json";
const songs = [
  {
    title: "Sorry Sorry Sorry",
    artist: "Rahul Gandhi",
    imageSrc: "./images/rahul.png",
    bgColor: "bg-amber-200",
    textColor: "text-amber-900",
    linkColor: "text-amber-800",
    gradientToColor: "to-amber-600",
    audioSrc: "/music/rahul_gandhi.mp3",
  },
  {
    title: "Sorry",
    artist: "Justin Bieber",
    imageSrc:
      "https://raw.githubusercontent.com/Meschacirung/Tailus-website/main/public/images/singers/Justin-Bieber.png",
    bgColor: "bg-rose-200",
    textColor: "text-rose-900",
    linkColor: "text-rose-800",
    gradientToColor: "to-rose-600",
    audioSrc: "/music/justin_bieber_sorry.mp3",
  },
  {
    title: "Sorry Darling",
    artist: "Naveen Vishu",
    imageSrc: "/images/haryanvi.png",
    bgColor: "bg-fuchsia-200",
    textColor: "text-fuchsia-900",
    linkColor: "text-fuchsia-800",
    gradientToColor: "to-fuchsia-600",
    audioSrc: "/music/sorry_darling.mp3",
  },
  {
    title: "Haan main galat",
    artist: "Arjit Singh",
    imageSrc: "/images/haan_main_galat.png",
    bgColor: "bg-fuchsia-200",
    textColor: "text-fuchsia-900",
    linkColor: "text-fuchsia-800",
    gradientToColor: "to-fuchsia-600",
    audioSrc: "/music/haan_main_galat.mp3",
  },
  {
    title: "We don't talk anymore",
    artist: "Selena Gomez",
    imageSrc:
      "https://raw.githubusercontent.com/Meschacirung/Tailus-website/main/public/images/singers/Selena-Gomez.png",
    bgColor: "bg-orange-200",
    textColor: "text-orange-900",
    linkColor: "text-orange-800",
    gradientToColor: "to-orange-600",
    audioSrc: "/music/we_dont_talk_anymore.mp3",
  },
  {
    title: "Haan ho gyi galti",
    artist: "Shanky",
    imageSrc: "./images/indian_guy_guitar.png",
    bgColor: "bg-blue-200",
    textColor: "text-blue-900",
    linkColor: "text-blue-800",
    gradientToColor: "to-blue-600",
    audioSrc: "/music/haan_ho_gyi.mp3",
  },
];

function rand() {
  console.log("hi");
}
function Main() {
  const [playingSong, setPlayingSong] = useState(null);
  const audioRef = useRef(null);

  const handlePlaySong = (audioSrc) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(audioSrc);
    audioRef.current.play();
    setPlayingSong(audioSrc);

    audioRef.current.addEventListener("ended", () => {
      setPlayingSong(null);
    });
  };

  return (
    <div className="bg-blend-normal">
      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto sm:w-6/12 lg:w-5/12 xl:w-[30%]">
          <div>
            <h1 className="font-mono text-3xl flex justify-center">
              Sorry sorry sorry
            </h1>
            <p className="mt-2 text-gray-600 flex justify-center">
              You know I am the stupid one !!!!!!!!
            </p>
          </div>

          <div className="mt-4 space-y-6">
            {songs.map((song, index) => (
              <div
                key={index}
                className={`relative flex flex-col justify-end overflow-hidden rounded-b-xl pt-6 ${
                  index % 2 === 0 ? "" : "-mr-6 pr-6"
                }`}
                onClick={() => handlePlaySong(song.audioSrc)}
              >
                <div
                  className={`group relative flex cursor-pointer justify-between rounded-xl ${song.bgColor} before:absolute before:inset-y-0 before:right-0 before:w-1/2 before:rounded-r-xl before:bg-gradient-to-r before:from-transparent before:${song.gradientToColor} before:opacity-0 before:transition before:duration-500 hover:before:opacity-100`}
                >
                  <div className="relative space-y-1 p-4">
                    <h4 className={`text-lg ${song.textColor}`}>
                      {song.title}
                    </h4>
                    <div className={`relative h-6 ${song.linkColor} text-sm`}>
                      <span className="transition duration-300 group-hover:invisible group-hover:opacity-0">
                        {song.artist}
                      </span>
                      <a
                        href="#"
                        className="w-max flex items-center gap-3 invisible absolute left-0 top-0 translate-y-3 transition duration-300 group-hover:visible group-hover:translate-y-0"
                      >
                        <span>Listen now</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 -translate-x-4 transition duration-300 group-hover:translate-x-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <img
                    className="absolute bottom-0 right-6 w-[6rem] transition duration-300 group-hover:scale-[1.4]"
                    src={song.imageSrc}
                    alt={song.artist}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
