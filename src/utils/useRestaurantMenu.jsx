/*
 *  Let's try  to write the code to create your own hook
 */

import { useState,useEffect } from "react";
import { PROXY_URL, SWIGGY_RES_URL } from "./constants";

const useRestaurantMenu = (resId)=>{
    // Let's try to write the fetch logic over here
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        const data = await fetch(PROXY_URL+SWIGGY_RES_URL+resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;