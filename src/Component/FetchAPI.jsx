import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const FetchAPI = () => {

    const [data, setData] = useState([{}])
    const [countries, setCountry] = useState([])

    const fetchData = async() => {
        const res = await axios.get('/api')
        console.log(res.data)
        setData(res.data)
    }

    const fetchCountry = async() => {
        const res = await axios.get('/country')
        console.log(res.data)
        setCountry(res.data)
    }
    useEffect(() => {
        fetchData()
        fetchCountry()
    },[])
  return (
    <div>
        {(typeof data.country === 'undefined') ? (
            <p>Loading ....</p>
        ) : (
            data.country.map((user,i) => (
                <p key={i}>{user}</p>
            ))
        )
        
        }

        {
            countries.map((val,i) => (
               <> <p key={i}>{val.name}</p>
                <p>{val.sport}</p>
                
                </>
            ))
        }

    </div>
  )
}
