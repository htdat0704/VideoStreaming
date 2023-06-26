import React from "react";
import ReactPlayer from "react-player";

const StreamingVideoPlayer = () => {
  const videoUrl =
    "https://play.streamingvideoprovider.com/popplayer.php?it=8706d19ipdkw&is_link=1&w=720&h=405&pause=1&title=Settings+Panel+Overview&skin=3&repeat=&brandNW=1&start_volume=34&bg_gradient1=%23ffffff&bg_gradient2=%23e9e9e9&fullscreen=1&fs_mode=2&skinAlpha=50&colorBase=%23250864&colorIcon=%23ffffff&colorHighlight=%237f54f8&direct=false&no_ctrl=&auto_hide=1&viewers_limit=0&cc_position=bottom&cc_positionOffset=70&cc_multiplier=0.03&cc_textColor=%23ffffff&cc_textOutlineColor=%23ffffff&cc_bkgColor=%23000000&cc_bkgAlpha=0.1&image=https%3A%2F%2Fmember.streamingvideoprovider.com%2Fpanel%2Fserver%2Fclip%3Fa%3DGenerateThumbnail%26clip_id%3D6928484%26size%3Dlarge&mainBg_Color=%23ffffff&aspect_ratio=16%3A9&play_button=1&play_button_style=pulsing&sleek_player=1&stretch=&auto_play=0&auto_play_type=unMute&floating_player=none";

  return (
    <ReactPlayer url={videoUrl} controls={true} width="100%" height="auto" />
  );
};

export default StreamingVideoPlayer;
