import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    // Let's try to write the logic to check whether the user is online or not
    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })

        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
    },[])

    return onlineStatus;
}

export default useOnlineStatus;