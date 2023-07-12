import { useState, useEffect, useRef } from "react";
import "./styles.css";
import { useParams } from 'react-router-dom';
import IframeResizer from 'iframe-resizer-react'

interface Frame {
  source: string;
  translation: string;
  iframeUrl: string;
  quality: string;
  updatedAt: string;
};

function Player() {
  let { kpId } = useParams();
  const [iframesrc, setIframeSrc] = useState<Frame | null>(null);
  const [sources, setSources] = useState([]);
  const iframeRef = useRef(null)


  useEffect(() => {



    fetch("https://kinobox.tv/api/players/main?query=" + kpId)
      .then((response) => response.json())
      .then((json) => {
        setSources(json);
        setIframeSrc(json[1])
      }
      );

  }, [])

  return (
    <div className="w-full h-full  flex justify-center ">
      <div className="w-9/12 h-full blur-lg absolute z-0 bg-gradient-to-r from-[#1f2937] via-blue-500 to-[#1f2937] opacity-25" >
      </div>

      <div className="w-9/12 z-10 h-full absolute grid grid-cols-12 text-white gap-2 ">
        <div className="col-span-2">
          <a href="/" > BACK</a>
        </div>
        <div className="col-span-8 h-full">
          {iframesrc ? (
            <iframe src={iframesrc.iframeUrl} allowFullScreen />
            // <IframeResizer
            //   heightCalculationMethod={"max"}
            //   checkOrigin={false}
            //   log
            //   src={iframesrc.iframeUrl}
            //   style={{ width: '1px', minWidth: '100%', height: '50%' }}
            // />
          ) : (
            <>

            </>
          )}
        </div>
        <div className="col-span-2">

          <div className="flex flex-col">
            {
              sources.map((source: any) => (
                <button key={source.source} className={(source.source == iframesrc?.source ? "bg-slate-700 " : "hover:bg-blue-700 ") + "bg-transparent   font-semibold hover:text-white py-2 px-4   hover:border-transparent rounded mt-1"}>{source.source}</button>
              ))
            }
          </div>
        </div>

      </div>


    </div >
  );
}

export default Player;
