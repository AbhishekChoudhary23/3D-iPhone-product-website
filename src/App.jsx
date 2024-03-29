import Nav from "./components/Nav";
import Jumbtron from "./components/Jumbtron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import { useRef } from "react";
import Loader from "./components/Loader";

function App() {

  const WebgiViewerRef = useRef();

  const contentRef = useRef();

  const handlePreview = () =>{
    WebgiViewerRef.current.triggerPreview();
  }
  
  return (
    <div className="App">
      <Loader/>
      <div ref={contentRef} id="content">
      <Nav/>
      <Jumbtron/>
      <SoundSection/>
      <DisplaySection triggerPreview={handlePreview}/>
      </div>
      <WebgiViewer contentRef ={contentRef} ref={WebgiViewerRef}/>
    </div>
  );
}

export default App;
