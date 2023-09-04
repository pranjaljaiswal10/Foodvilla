import { useRouteError } from "react-router-dom";

const Error=()=>{
    const {status,statusText}=useRouteError()
    return(
        <>
    <h1>Something went's wrong</h1>
    <h2>{`${status}:${statusText}`}</h2>
    </>
    )
}
export default Error;