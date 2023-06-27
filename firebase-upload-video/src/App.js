import "./App.css";
import Streamable from "./components/Streamable/Streamable";
import Bitmovin from "./components/bitmovin/Bitmovin";
import ChessGame from "./components/chessGame/ChessGame";
import StreamingVideoPlayer from "./components/streamvideoprovider/StreamVideoProvider";
import StreamVideoProviderWithChat from "./components/streamvideoprovider/StreamVideoProviderWithChat";
import Vimeo from "./components/vimeo/Vimeo";
import Wistia from "./components/wistia/Wistia";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="bg-slate-300">
      <Helmet>
        <script src="//play.streamingvideoprovider.com/js/dplayer.js"></script>
        <script src="//play.streamingvideoprovider.com/js/vapp.js"></script>
      </Helmet>
      <div className="flex flex-col  items-center gap-4">
        <div className="w-1/2 h-1/2">
          <Bitmovin />
        </div>
        <Wistia />
        <Streamable />
        <Vimeo />
        <ChessGame />
        {/* <StreamingVideoPlayer /> */}
        {/* <StreamVideoProviderWithChat /> */}
      </div>
    </div>
  );
}

export default App;
