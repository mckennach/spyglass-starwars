'use client'

import { useEffect, useState } from "react";
import { PlanetsListProps, PlanetProps } from "@/utils/types/types.planets"
import { OrbitIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PlanetDataLoading from "./planet-data-loading";

const { NEXT_PUBLIC_URL } = process.env;


const fetchPlanets = async (pageCount: number) => {
  const response = await fetch(`/api/planets/page=${pageCount}`);
  const data = await response.json();
  return data;
}

export default function PlanetList( ) {
  const router = useRouter();
  const [pageCount, setPageCount] = useState<number>(1);
  const [planets, setPlanets] = useState<PlanetProps[] | null>(null);
  const [planetsList, setPlanetsList] = useState<PlanetsListProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [hasPrevious, setHasPrevious] = useState<boolean>(false);

  useEffect(() => {
    fetchPlanets(pageCount).then((data) => {
      setPlanetsList(data?.data);
    });
  }, [pageCount]);

  useEffect(() => {
    if(planetsList) {
      setHasNext(planetsList?.next ? true : false);
      setHasPrevious(planetsList?.previous ? true : false);
      setPlanets(planetsList?.results);
    }
  }, [planetsList]);
  


  if(!planets) return <PlanetDataLoading message="Loading planets..." />
 
  
  
  return (
    <div className="container mx-auto space-y-8">
      <ul role="list" className="divide-y divide-neutral-800 dark:divide-neutral-100 w-full">
        {planets.map((planet, index) => {
          const planetId = planet.url.split('/').filter(Boolean).pop();
          
          return (
            <li key={index} className="flex">
              <button onClick={() => router.push(`/planet/${planetId}`)}  className="flex justify-between gap-x-6 py-5 items-center w-full hover:bg-neutral-800/10 dark:hover:bg-neutral-100/10 px-4">
                <div className="flex min-w-0 gap-x-4 items-center">
                  <div className="h-8 w-8 flex-none flex items-center justify-center rounded-md bg-gray-50 dark:bg-neutral-600">
                    <OrbitIcon className="h-6 w-6 flex-none" />
                  </div>
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-neutral-900 dark:text-white">{planet.name}</p>
                  </div>
                </div>
                <div className="shrink-0 sm:flex sm:flex-col sm:items-end items-center">
                  <Link href={`/planet/${planetId}`} className="text-sm leading-6 text-neutral-900 dark:text-white hover:text-saber-blue dark:hover:text-saber-red">Learn More</Link>
                </div>
              </button> 
            </li>
          )
        })}
      </ul>
      <div className="flex items-center justify-between">
        <button className="btn-primary" onClick={() => setPageCount(pageCount - 1)} disabled={!hasPrevious}>Previous</button>
        <button className="btn-primary" onClick={() => setPageCount(pageCount + 1)} disabled={!hasNext}>Next</button>
      </div>
    </div>
    
  )
}
