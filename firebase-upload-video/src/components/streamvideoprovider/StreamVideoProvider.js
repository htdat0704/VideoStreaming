import React from "react";
import useScript from "./useScript";

const StreamingVideoPlayer = () => {
  const props = {
    clip_id: "8706d19ipdkw",
    transparent: "true",
    pause: "1",
    repeat: "",
    bg_color: "#ffffff",
    fs_mode: "2",
    no_controls: "",
    start_img: "0",
    start_volume: "34",
    close_button: "",
    brand_new_window: "1",
    auto_hide: "1",
    stretch_video: "",
    player_align: "NONE",
    offset_x: "0",
    offset_y: "0",
    player_color_ratio: 0.6,
    skinAlpha: "50",
    colorBase: "#250864",
    colorIcon: "#ffffff",
    colorHighlight: "#7f54f8",
    direct: "false",
    is_responsive: "true",
    viewers_limit: 0,
    cc_position: "bottom",
    cc_positionOffset: 70,
    cc_multiplier: 0.03,
    cc_textColor: "#ffffff",
    cc_textOutlineColor: "#ffffff",
    cc_bkgColor: "#000000",
    cc_bkgAlpha: 0.1,
    aspect_ratio: "16:9",
    play_button: "1",
    play_button_style: "pulsing",
    sleek_player: "1",
    auto_play: "0",
    auto_play_type: "unMute",
    floating_player: "none",
  };
  useScript("//play.streamingvideoprovider.com/js/dplayer.js");
  let id = "svp_player" + props.clip_id;
  React.useEffect(
    function () {
      // eslint-disable-next-line no-undef
      let player = new SVPDynamicPlayer(
        id,
        "",
        "100%",
        "100%",
        { use_div: id, skin: "3" },
        props
      );
      console.debug(player);
      player.execute();
    },
    [props.clip_id]
  );

  return (
    <>
      <div id={id} style={{ width: "50%", position: "relative" }} />
    </>
  );
};

export default StreamingVideoPlayer;