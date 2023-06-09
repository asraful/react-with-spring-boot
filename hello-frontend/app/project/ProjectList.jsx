'use client'

export default function ProjectList() {

const fetcher = (...args) => fetch(...args).then((res) => res.JSON());

const getProjectHandeler = (event) => {

   // event.preventDefault();

    const getList = (event) => {
        const endpoint = 'http://localhost:8080/api/projects';
    }

    const options = {
        method:'GET',
        headers:{
            'Content-type':'application/json',
        }
     };
     const { data, error } = useSWR(endpoint, fetcher);

     if (error) return <div>Failed to load</div>;
     if (!data) return <div>Loading...</div>;

     return(
        <div>
        <h1>List of projects</h1>
            <div>{data}</div>
        </div>
    );
    }
}