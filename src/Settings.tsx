import { useState, useEffect } from "react";
import "./styles.css";
import { useParams } from 'react-router-dom';

function Settings() {
  let { user } = useParams();

  return (
    <div className="w-full   flex justify-center ">
      <div className="w-9/12 h-full blur-lg absolute z-0 bg-gradient-to-r from-[#1f2937] via-blue-500 to-[#1f2937] opacity-25" >
      </div>

      <div className="w-9/12 z-10 grid grid-cols-12 text-white">
        <div className="col-span-2">
          <h1>Настройки {user}</h1>
        </div>
        <div className="col-span-8">
        </div>
        <div className="col-span-2">
          <a href="/" > BACK</a>
        </div>

      </div>


    </div>
  );
}

export default Settings;
