export default function ProjectList() {
    const fetcher = (...args) => fetch(...args).then((res) => res.JSON());

const getProjectHandeler = (event) => {

    event.preventDefault();

    const getList = (event) => {
        const endpoint = 'http://localhost:8080/api/projects';
    }

    const options = {
        method:'GET',
        headers:{
            'Content-type':'application/json',
        }
     };
     const { response, error } = useSWR(endpoint, fetcher);

}

return(
    <div>
    <h1>List of projects</h1>
        <div>{response}</div>
    </div>
);

}