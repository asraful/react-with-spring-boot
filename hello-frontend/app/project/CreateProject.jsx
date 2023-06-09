'use client'

import { useState } from 'react'
import { Listbox } from '@headlessui/react'

export default function CreateProejct() {

    const fetcher = (...args) => fetch(...args).then((res) => res.JSON());

    const handleSubmit = (event) => {

        alert('Hello');

        console.log('hello........');
        event.preventDefault();

         const data = {
            name: event.target.name.value,
            description: event.target.description.value,
           
         }
         alert(data);
         const JSONdata = JSON.stringify(data);

         const endpoint = 'http://localhost:8080/api/project/create';

         const options = {
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body:JSONdata,
         };

    
        const response =  fetch(endpoint, options);
 
    
        //const result =  response.json();
        alert(response);

        //  const { responseData, error } = useSWR(endpoint, fetcher);
        //  if (error) return <div>Project creation failed</div>;
        //  if (!responseData) return <div>{responseData}</div>;

    };
    

    return (

        <form class="w-full max-w-lg border-4 px-5 py-5" onSubmit={handleSubmit}>
        <div class="flex flex-wrap -mx-3 mb-6 ">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Proejct Name
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Project name"/>
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Description
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text-area" placeholder="Description"/>
          </div>
        </div>
        
        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
              Tag
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="ML"/>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
              Category
            </label>
            <div class="relative">
              <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>DevOps</option>
                <option>MlOps</option>
                <option>NA</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          
        </div>

    
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-gray-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
       Create
      </button>
    </div>
      </form>
       
                
    );
}