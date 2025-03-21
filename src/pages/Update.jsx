import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [data,setData] = useState({})


  useEffect(()=>{
    const list = JSON.parse(localStorage.getItem("formdataList"));
    setData(list[params.index]);
      
      
  },[setData])

  const handleChange =(e)=>{
    let name = e.target.name
    let value = e.target.value
    // console.log(name,value);

    setData({...data,[name]:value})
    
  }

  const handlesubmit = (e)=>{
    e.preventDefault();
    // console.log(data);
    let list = JSON.parse(localStorage.getItem("formdataList"));
    list[params.index] = data 

    // console.log(list);
    localStorage.setItem("formdataList",JSON.stringify(list))
    navigate("/show")
    
  }

  return (
    <div>
     <div className="flex items-center justify-center min-h-screen bg-zinc-700 text-white">
      <div className="bg-zinc-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-center text-4xl font-bold text-cyan-300 mb-6"> Update Form </h1>
        <form className="space-y-4" onSubmit={handlesubmit}>
          <div>
            <label className="block text-lg text-start font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={data.name?data.name:""}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-zinc-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-lg text-start font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={data.email?data.email:""}
              onChange={handleChange}
              className="w-full p-2 rounded-lg bg-zinc-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 rounded-lg transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Update
