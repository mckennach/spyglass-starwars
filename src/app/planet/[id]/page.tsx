'use client'

import PlanetData from '@/components/planets/planet-data';
import { PlanetProps } from '@/utils/types/types.planets';
import React, { useEffect, useState } from 'react';

const fetchPlanet = async (id: string) => {
  const response = await fetch(`/api/planets/${id}`);
  const data = await response.json();
  return data;
}

export default function PlanetPage({ params }: { params: { id: string } })  {
  // const [planet, setPlanet] = useState<PlanetProps | null>(null);
  // useEffect(() => {
  //   if(params.id) {
  //     fetchPlanet(params.id).then((data) => {
  //       setPlanet(data?.data);
  //     });
  //   } 
    
  // }, [params.id]);

  // if(!planet) return null;

  return (
    <PlanetData id={params?.id} />
  );
};


