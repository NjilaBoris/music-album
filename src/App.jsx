import React, { useState } from "react";

import { songs } from "./components/Song";
import { SongPreview } from "./components/SongPreview";
import { DetailView } from "./components/DetailView";
import { AnimatePresence } from "motion/react";

const App = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  return (
    <AnimatePresence>
      <div className="relative mx-auto aspect-[9/16] w-full max-w-[400px] rounded-3xl border border-white/10 bg-neutral-400 text-white p-2 sm:p-4 overflow-clip">
        <div className="mb-6 flex aspect-video flex-col items-start rounded-2xl bg-white/10 p-4 text-2xl font-bold md:p-8">
          <p>Trending music</p>
          <a className="mt-auto rounded-full bg-white/10 p-2 text-md font-normal">
            Explore now ▸
          </a>
        </div>
        <p className="mb-3 text-xl font-bold">Your favorites</p>
        <div className="grid grid-cols-1 gap-4">
          {songs.map((song) => (
            <SongPreview
              key={song.id}
              song={song}
              setSelectedSong={setSelectedSong}
            />
          ))}
        </div>
        {selectedSong && (
          <DetailView
            onClose={() => setSelectedSong(null)}
            song={selectedSong}
          />
        )}
      </div>
    </AnimatePresence>
  );
};

export default App;
