import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Show() {
  const [formData, setFormData] = useState([]);

  const handleDelete = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("formdataList"));
    console.log(data);
    let newData = data.filter((_, i) => i !== e);
    console.log(newData);
    localStorage.setItem("formdataList", JSON.stringify(newData));
  };

  useEffect(() => {
    const data = localStorage.getItem("formdataList");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, [setFormData]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-zinc-700 text-white p-6">
      <h1 className="text-4xl font-bold text-cyan-300 mb-6">SHOW PAGE</h1>
      <div className="w-full max-w-3xl bg-zinc-800 p-6 rounded-xl shadow-lg">
        <table className="w-full border-collapse border border-gray-500 text-lg">
          <thead>
            <tr className="bg-cyan-500 text-white">
              <th className="p-4 border border-gray-500">Name</th>
              <th className="p-4 border border-gray-500">Email</th>
              <th className="p-4 border border-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((v, i) => (
              <tr
                key={i}
                className={`${i % 2 === 0 ? "bg-zinc-600" : "bg-zinc-700"}`}
              >
                <td className="p-3 border border-gray-500">{v.name}</td>
                <td className="p-3 border border-gray-500">{v.email}</td>
                <td className="p-3 border border-gray-500">
                  <Link
                    className="px-4 mx-2 py-2 rounded-lg bg-cyan-300 hover:bg-red-500  transition duration-300"
                    onClick={(e) => handleDelete(i)}
                  >
                    Delete
                  </Link>
                  <Link
                    className="px-4 mx-2 py-2 rounded-lg bg-cyan-300 hover:bg-red-500  transition duration-300"
                    onClick={(e) => handleupdate(i)}
                    to={"/updateData/" + i}
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Show;
