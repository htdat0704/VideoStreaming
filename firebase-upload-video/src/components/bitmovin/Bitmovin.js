import React, { useEffect, useRef, useState } from "react";
import { Player } from "bitmovin-player";
import { UIFactory } from "bitmovin-player/bitmovinplayer-ui";
import "bitmovin-player/bitmovinplayer-ui.css";

const Bitmovin = () => {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  const playerConfig = {
    key: "cf1c42de-2ebb-47f0-a170-4ae5268f977a",
    ui: false,
  };

  const playerSource = {
    dash: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
    hls: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    progressive:
      "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4",
    // poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
  };

  const playerDiv = useRef();
  console.log("this is player " + typeof player);
  console.log(playerDiv);
  useEffect(() => {
    function setupPlayer() {
      const playerInstance = new Player(playerDiv.current, playerConfig);
      UIFactory.buildDefaultUI(playerInstance);
      playerInstance.load(playerSource).then(
        () => {
          var enSubtitle = {
            id: "sub1",
            lang: "en",
            label: "English",
            url: "https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt",
            kind: "subtitle",
          };
          playerInstance.subtitles.add(enSubtitle);
          setPlayer(playerInstance);

          console.log("Successfully loaded source");
        },
        () => {
          console.log("Error while loading source");
        }
      );
    }

    setupPlayer();

    return () => {
      function destroyPlayer() {
        if (player != null) {
          player.destroy();
          setPlayer(null);
        }
      }

      destroyPlayer();
    };
  }, []);
  return (
    <>
      {playerDiv !== null && !loading ? (
        <div id="player" ref={playerDiv} />
      ) : (
        <div className="disabled-div">
          Loading
          <div id="player" ref={playerDiv} />
        </div>
      )}
    </>
  );
};

export default Bitmovin;
