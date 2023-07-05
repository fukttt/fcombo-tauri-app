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
            <div className="col-span-2">
                MENU
            </div>
            <div className="col-span-10">
                <div className="grid grid-cols-12">
                    {
                        data.map((element: Film) => (
                            <div className="p-4 col-span-3 flex flex-col gap-2" key={element.id}>
                                <img className="rounded drop-shadow-md transition ease-in duration-300 hover:scale-105 cursor-pointer" src={element.posterUrl} />
                                <h1 className="text-slate-200">{element.primaryTitle} ({element.year})</h1>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}

export default FilmsBlock;