import React, { createContext, useEffect, useState } from 'react'
import useAxiosPublic from '../hooks/useAxios';
export const WebContext = createContext(null);


const WebProvider = ({children}) => {


    const [webData, setWebData] = useState([]);

    const axios = useAxiosPublic();
  
    useEffect(() => {
      axios("/users/get-web-data").then((res) => {
        setWebData(res.data.data);
      });
    }, []);

  return (
    <WebContext.Provider value={{webData}}>
      {children}
    </WebContext.Provider>
  )
}

export default WebProvider