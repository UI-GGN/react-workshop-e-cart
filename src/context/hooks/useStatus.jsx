import { useState, useMemo } from "react"

const useStatus = (initialState)=>{
    const [state, setStatus] = useState(initialState);

    const Status = (props)=> props[state];

    return useMemo(()=>{
        return {Status,setStatus}
    }, [state]) 

}

export default useStatus;