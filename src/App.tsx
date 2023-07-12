import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { NavigateCircleOutline, CogOutline, PersonCircleOutline, ReloadOutline } from 'react-ionicons'
import FilmsBlock from "./FilmsBlock";
import "./styles.css";

function App() {

  const [det, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cat, setCategory] = useState("f");

  useEffect(() => {
    getData(cat)
  }, [])

  const getData = (category: string) => {
    setLoading(true);
    setData([]);
    setCategory(category);
    fetch("https://kinobox.tv/api/popular/" + (category === "f" ? "films" : "series"))
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      }
      );

  }


  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <div className="w-full   flex justify-center ">
      <div className="w-9/12 h-full blur-lg absolute z-0 bg-gradient-to-r from-[#1f2937] via-blue-500 to-[#1f2937] opacity-30" >

      </div>

      <div className="w-9/12 z-10 ">
        <div className="grid grid-cols-12 gap-2 ">
          <div className="p-4 col-span-3 flex">
            <h1 className=" font-bold m-auto text-xl text-zinc-100 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-bottom bg-no-repeat bg-[length:100%_4px] hover:bg-[length:100%_100%] transition-[background-size]">FCOMBO</h1>
          </div>
          <div className="p-4  col-span-7  flex">
            <input className="border-2 rounded-md shadow-lg z-10 border-slate-500 p-2 w-full m-auto  focus:scale-105 ease-in duration-300 focus:bg-slate-300 bg-transparent text-slate-500 placeholder-slate-200 focus:placeholder-slate-600 disabled:text-slate-300 " maxLength={30} placeholder="Поиск" />

          </div>
          <div className="p-4 col-span-2 flex items-center gap-2">
            <PersonCircleOutline
              color={'#fff'}
              height="25px"
              width="25px"
              cssClasses={"cursor-pointer "}
            />

            <a href={`/settings/1`}><CogOutline
              color={'#fff'}
              height="25px"
              width="25px"
              cssClasses={"cursor-pointer "}
            />
            </a>
            <a href="https://t.me/filmscombo" target="_blank"> <NavigateCircleOutline
              color={'#fff'}
              height="25px"
              width="25px"
              cssClasses={"cursor-pointer "}
              onClick={() => alert('Hi!')}
            /></a>
          </div>
        </div>

        {/* Category picker  */}
        <div className="grid grid-cols-12 gap-4  text-white p-4">
          <div className={(cat === "f" ? "bg-gradient-to-r from-gray-700 via-gray-900 to-black " : "") + "col-span-6 flex justify-center hover:bg-slate-500 rounded-md cursor-pointer p-2"} onClick={() => {

            getData("f");
          }}>
            <h3>Топ-20 фильмов</h3>
          </div>
          <div className={(cat === "s" ? "bg-gradient-to-r from-gray-700 via-gray-900 to-black " : "") + "col-span-6 flex justify-center hover:bg-slate-500 rounded-md cursor-pointer p-2"} onClick={() => {

            getData("s");
          }}>
            <h3>Топ-20 сериалов</h3>
          </div>
        </div>
        {/* Category picker END  */}

        {/*  Loader block  */}
        <div className={(loading ? "" : "hidden ") + "w-full flex justify-center "}>
          <ReloadOutline cssClasses={"animate-spin h-5 w-5 mt-10"} color={"white"} />
        </div>
        {/*  Loader block END  */}


        <FilmsBlock data={det}></FilmsBlock>


      </div>
    </div>
  );
}

export default App;
