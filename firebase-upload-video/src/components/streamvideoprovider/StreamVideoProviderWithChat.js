import React from "react";
import { Helmet } from "react-helmet";

const StreamVideoProviderWithChat = () => {
  const props = {
    clip_id: "6928483",
    player_id: "11ADAEB3I5HAF4G",
    playlist_id: "3667",
    transparent: "1",
    uk: "c0af7d1c2721e74c95dda4de92e2c576",
    live_id: "a8rw3e0ck80g",
    sel_playlist: "",
    sel_multiplaylist: "",
    use_html5: "true",
    layout: "default",
    theme: "light",
    is_responsive: "1",
    is_inversed: "",
    is_vertical: "",
    one_thumb_per_row: "",
    thumbs_size: "medium",
    disable_hash: "",
    widget_height_behavior: "0",
    hide_playlist: "1",
    hide_live_chat: "",
    hide_description: "1",
    playlist_position: "",
    chat_position: "",
    description_position: "",
    show_auto_play_next: "",
    auto_play_next: "",
    floating_player: "none",
  };
  let id = "dplayer_flash_" + props.live_id;
  React.useEffect(
    function () {
      // eslint-disable-next-line no-undef
      var vapp = new VappController(
        { use_div: id, player_width: "720", player_height: "800" },
        props
      );
      console.debug(vapp);
    },
    [props.live_id]
  );

  return (
    <>
      <div
        id={"dplayer_flash_a8rw3e0ck80g"}
        style={{ width: "720px", height: "800px", position: "relative" }}
      />
    </>
  );
};

export default StreamVideoProviderWithChat;