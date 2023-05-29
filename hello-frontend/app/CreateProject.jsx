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
        <div>
        <h2>Create Project</h2>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required/>

            <label htmlFor="descriptoin">Description</label>
            <input type="text" id="description" name="description" required/>

            <label htmlFor="type">Type</label>
            <select>
                <option value="Experiment">Experiment</option>
                <option value="Ops">Ops</option>
                <option value="Data analysis">Opel</option>
            </select>
          <button type="submit">Submit</button>  
        </form>         
        </div>
    );
}