'use client'

import React, { useEffect, useState } from 'react';
import { PaperclipIcon } from "lucide-react"
import { PlanetProps } from '@/utils/types/types.planets';
import { useRouter } from 'next/navigation';
import PlanetDataLoading from './planet-data-loading';
const fetchPlanet = async (id: string) => {
  const response = await fetch(`/api/planets/${id}`);
  const data = await response.json();
  return data;
}


export default function PlanetData({ id }: { id: string } ) {
  const router = useRouter();
  const [films, setFilms] = useState<string[] | null>(null);
  const [filmList, setFilmList] = useState<any[] >([]);
  const [planet, setPlanet] = useState<PlanetProps | null>(null);

  const [residents, setResidents] = useState<string[] | null>(null);
  const [residentList, setResidentList] = useState<any[] >([]);
  const [hasFetchedResidents, setHasFetchedResidents] = useState<boolean>(false);
  const [hasFetchedFilms, setHasFetchedFilms] = useState<boolean>(false);


  
  useEffect(() => {
    if(id) {
      fetchPlanet(id).then((data) => {
        setPlanet(data?.data);
      });
    } 
  }, [id]);

  useEffect(() => {
    if(planet?.films) {
      setFilms(planet?.films);
      setResidents(planet?.residents);
    }
  }, [planet]);
 
  useEffect(() => {
        if(!hasFetchedFilms && films && films.length > 0) {
          setHasFetchedFilms(true);
          const filmIds = films.map((film) => {
            const filmId = film.split('/').filter(Boolean).pop();
            return filmId;
          });
          fetchFilms(filmIds);
        }
  }, [films, hasFetchedFilms]);

  useEffect(() => {
    if(!hasFetchedResidents && residents && residents.length > 0) {
      setHasFetchedResidents(true);
      const residentIds = residents.map((resident) => {
        const residentId = resident.split('/').filter(Boolean).pop();
        return residentId;
      });
      fetchResidents(residentIds);
    }
}, [residents, hasFetchedResidents]);

  const fetchFilms = async (filmIds: any) => {
    filmIds.forEach(async (filmId: any) => {
      const response = await fetch(`/api/films/${filmId}`);
      const data = await response.json();
      setFilmList((prev) => [...prev, data?.data]);
    }); 
  }

  const fetchResidents = async (residentIds: any) => {
    residentIds.forEach(async (residentId: any) => {
      const response = await fetch(`/api/people/${residentId}`);
      const data = await response.json();
      setResidentList((prev) => [...prev, data?.data]);
    }); 
  }
  
  
 
  if(!planet) return <PlanetDataLoading message="Loading planet data..." />;



  return (
    <div className="container mx-auto ">
      <div className="px-4 sm:px-0 flex justify-between">
        <div>
          <h1 className="text-xl font-bold leading-7 text-neutral-950 dark:text-white">{planet?.name}</h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">More info on {planet?.name}</p>
        </div>
        <div>
          <button onClick={() => router.push(`/planet/${Number(id) + 1}`)} className="btn-primary">Next Planet</button>
        </div>
      </div>
      <div className="mt-6 border-t  border-neutral-800 dark:border-neutral-100">
        <dl className="divide-y divide-neutral-800 dark:divide-neutral-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red ">Planet Name</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">{planet?.name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Terrain</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0 capitalize">{planet?.terrain}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Climate</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0 capitalize">{planet?.climate}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Gravity</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0 capitalize">{planet?.gravity}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Diameter</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">{new Intl.NumberFormat().format(Number(planet?.diameter))} km</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Population</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">{new Intl.NumberFormat().format(Number(planet?.population))}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Orbital Period</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">{new Intl.NumberFormat().format(Number(planet?.orbital_period))} days</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Surface Water</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">{ planet?.surface_water === '1' ? 'Yes' : 'No' }</dd>
          </div>
          {filmList && filmList.length > 0 && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Shown in</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
              <ul>
                {filmList.map((film, index) => {
                  return (
                    <li className="sm:text-right" key={index}>{film?.title}</li>
                  )
                })}
              </ul>
            </dd>
          </div>
          )}
          {residentList && residentList.length > 0 && (
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Residents</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0">
              <ul>
                {residentList.map((resident, index) => {
                  return (
                    <li className="sm:text-right" key={index}>{resident?.name}</li>
                  )
                })}
              </ul>
            </dd>
          </div>
          )}
          
          
          
          
        </dl>
      </div>
    </div>
  )
}
