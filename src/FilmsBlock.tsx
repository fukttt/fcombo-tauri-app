import { useEffect } from "react";
import "./styles.css";

interface Film {
    id: number;
    primaryTitle: string;
    alternativeTitle: string;
    year: number;
    rating: number;
    posterUrl: string;
};


function FilmsBlock({ data }: any) {



    return (
        <div className="grid grid-cols-12">

            {
                data.map((element: Film) => (

                    <div className="p-4 col-span-3 flex flex-col gap-2" key={element.id}>
                        <a href={"/player/" + element.id}><img className="rounded shadow-lg transition ease-in  delay-150 hover:-translate-y-1 duration-300 cursor-pointer" src={element.posterUrl} /></a>
                        <h1 className="text-slate-200">{element.primaryTitle} ({element.year})</h1>
                    </div>

                ))
            }

        </div >
    );
}

export default FilmsBlock;