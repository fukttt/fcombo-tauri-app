import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { NavigateCircleOutline, CogOutline, PersonCircleOutline } from 'react-ionicons'
import FilmsBlock from "./FilmsBlock";
import "./styles.css";

function App() {

  const [det, setData] = useState([]);

  useEffect(() => {
    fetch("https://kinobox.tv/api/popular/films")
      .then((response) => response.json())
      .then((json) => setData(json));

  }, [])


  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <div className="w-full   flex justify-center ">
      <div className="w-9/12 h-full blur-lg absolute z-0 bg-gradient-to-r from-[#1f2937] via-blue-500 to-[#1f2937] opacity-25" >

      </div>

      <div className="w-9/12 z-10 ">
        <div className="grid grid-cols-12 gap-2 ">
          <div className="p-4 col-span-3 flex">
            <h1 className=" font-bold m-auto text-xl text-zinc-100 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-bottom bg-no-repeat bg-[length:100%_4px] hover:bg-[length:100%_100%] transition-[background-size]">FCOMBO</h1>
          </div>
          <div className="p-4  col-span-7  flex">
            <input className="border-2 rounded-md border-slate-500 p-2 w-full m-auto  focus:scale-105 ease-in duration-300 focus:bg-slate-300 bg-transparent text-slate-500 placeholder-slate-200 focus:placeholder-slate-600 disabled:text-slate-300 " maxLength={30} placeholder="Поиск" />

          </div>
          <div className="p-4 col-span-2 flex items-center gap-2">
            <PersonCircleOutline
              color={'#fff'}
              height="25px"
              width="25px"
              cssClasses={"cursor-pointer "}
            />

            <CogOutline
              color={'#fff'}
              height="25px"
              width="25px"
              cssClasses={"cursor-pointer "}
            />
            <NavigateCircleOutline
              color={'#fff'}
              height="25px"
              width="25px"
              cssClasses={"cursor-pointer "}
              onClick={() => alert('Hi!')}
            />
          </div>
        </div>
        <FilmsBlock data={det}></FilmsBlock>


      </div>
    </div>
  );
}

export default App;
