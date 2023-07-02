import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { NavigateCircleOutline, CogOutline, PersonCircleOutline } from 'react-ionicons'
import "./styles.css";

function App() {

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <div className="w-full ">
      <div className="grid grid-cols-12 gap-2 ">
        <div className="p-4 col-span-3 flex">
          <h1 className=" font-bold m-auto text-xl text-zinc-100 underline underline-offset-8">FCOMBO</h1>
        </div>
        <div className="p-4  col-span-7  flex">
          <input className="border-2 rounded-md border-slate-500 p-2 w-full m-auto  focus:p-3 ease-in duration-300 focus:bg-slate-300" maxLength={30} placeholder="Поиск" />

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
    </div>
  );
}

export default App;
