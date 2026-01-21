import { DynamicIcon } from "lucide-react/dynamic";
import { useState, useRef } from "react";

function HeroBanner() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/paramed-intro-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 max-w-2xl">
          ParaMed is helping people live better at home.
        </h1>
        <a
          href="#"
          title="See Paramed Careers"
          className="bg-custom-purple hover:bg-custom-purple text-white px-6 py-3 rounded-md transition-colors z-4"
        >
          Careers
        </a>
      </div>

      {/* Play / Pause Button (bottom-center) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
        <button
          onClick={togglePlay}
          className="bg-black/70 text-white px-2 py-1 rounded-md hover:bg-black/40 transition-colors"
        >
          {isPlaying ? (
            <DynamicIcon name="pause" className="opacity-40" />
          ) : (
            <DynamicIcon name="play" />
          )}
        </button>
      </div>
    </section>
  );
}

export default HeroBanner;
