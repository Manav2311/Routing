import React, { useState } from "react";

function Home() {
  const [formdata, setFormdata] = useState({});

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("formdataList")) || [];
    const updatedData = [...existingData, formdata];
    localStorage.setItem("formdataList", JSON.stringify(updatedData));
    setFormdata({});
    console.log(formdata);
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-700 text-white">
      <div className="bg-zinc-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-center text-4xl font-bold text-cyan-300 mb-6">
          Register
        </h1>
        <form onSubmit={handlesubmit} className="space-y-4">
          <div>
            <label className="block text-lg text-start font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formdata.name ? formdata.name : ""}
              className="w-full p-2 rounded-lg bg-zinc-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-lg text-start font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formdata.email ? formdata.email : ""}
              className="w-full p-2 rounded-lg bg-zinc-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-lg text-start font-semibold mb-1">
              Gander
            </label>
            <span className="p-2">
              <input
                type="radio"
                name="gander"
                onChange={handleChange}
                value="male"
              />
              Male
            </span>
            <span className="p-2">
              {" "}
              <input
                type="radio"
                name="gander"
                value="female"
                onChange={handleChange}
                className="p-2 "
              />
              Female
            </span>
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
  );
}

export default Home;
