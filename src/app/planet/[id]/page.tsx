'use client'

import PlanetData from '@/components/planets/planet-data';
import { PlanetProps } from '@/utils/types/types.planets';
import React, { useEffect, useState } from 'react';
import type { Metadata } from 'next'

const fetchPlanet = async (id: string) => {
  const response = await fetch(`/api/planets/${id}`);
  const data = await response.json();
  return data;
}



export default function PlanetPage({ params }: { params: { id: string } })  {
  
  return (
    <PlanetData id={params?.id} />
  );
};


