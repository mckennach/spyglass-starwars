import React from 'react';

interface PlanetDataLoadingProps {
  message: string;
}

const PlanetDataLoading: React.FC<PlanetDataLoadingProps> = ({ message }) => {
  return (
    <div className="container mx-auto max-w-3xl w-full animate-pulse">
      <div className="px-4 sm:px-0 flex justify-between">
        <div>
          <h1 className="text-xl font-bold leading-7 text-neutral-950 dark:text-white"></h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500"></p>
        </div>
        <div>
          {/* <button onClick={() => router.push(`/planet/${Number(id) + 1}`)} className="btn-primary">Next Planet</button> */}
        </div>
      </div>
      <div className="mt-6 border-t  ">
        <dl className="divide-y space-y-2  ">
          <div className="px-4 py-6 bg-saber-blue/60 dark:bg-saber-red/60 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red ">Planet Name</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0"></dd> */}
          </div>
          <div className="px-4 py-6 bg-saber-blue/60 dark:bg-saber-red/60 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Terrain</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0 capitalize"></dd> */}
          </div>
          <div className="px-4 py-6 bg-saber-blue/60 dark:bg-saber-red/60 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red ">Planet Name</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0"></dd> */}
          </div>
          <div className="px-4 py-6 bg-saber-blue/60 dark:bg-saber-red/60 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Terrain</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0 capitalize"></dd> */}
          </div>
          <div className="px-4 py-6 bg-saber-blue/60 dark:bg-saber-red/60 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red ">Planet Name</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0"></dd> */}
          </div>
          <div className="px-4 py-6 bg-saber-blue/60 dark:bg-saber-red/60 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Terrain</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0 capitalize"></dd> */}
          </div>
          <div className="px-4 py-6 bg-saber-blue/60 dark:bg-saber-red/60 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red ">Planet Name</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0"></dd> */}
          </div>
          <div className="px-4 py-6 bg-saber-blue/60 dark:bg-saber-red/60 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            {/* <dt className="text-sm font-medium leading-6 text-saber-blue dark:text-saber-red">Terrain</dt>
            <dd className="flex sm:justify-end sm:text-right mt-1 text-sm font-semibold leading-6 text-gray-900 dark:text-white sm:col-span-2 sm:mt-0 capitalize"></dd> */}
          </div>
        </dl>
      </div>
    </div>
  );
};

export default PlanetDataLoading;
