import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const View = () => {
  const [allEmp, setAllEmp] = useState(() => {
    let employees = localStorage.getItem("emp");
    return employees ? JSON.parse(employees) : [];
  });

  const [perPage, setPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [virtualEmp, setVirtualEmp] = useState([]);

  useEffect(() => {
    let lastIndex = perPage * currentPage;
    let firstIndex = lastIndex - perPage;

    let newEmp = [...allEmp];
    let pages = Math.ceil(newEmp.length / perPage);
    setTotalPages(pages);
    setVirtualEmp(newEmp.slice(firstIndex, lastIndex));
  }, [currentPage, allEmp]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    let updatedEmp = JSON.parse(localStorage.getItem("emp"));
    updatedEmp = updatedEmp.filter((emp) => emp.id !== id);
    setAllEmp(updatedEmp);
    localStorage.setItem("emp", JSON.stringify(updatedEmp));
  };

  const handleFilter = (e) => {
    let data = localStorage.getItem("emp");
    data = data ? JSON.parse(data) : [];

    const filterVal = e.target.value.toLowerCase();
    if (filterVal) {
      data = data.filter((emp) =>
        emp.name.toLowerCase().includes(filterVal)
      );
    }

    setAllEmp(data);
  };

  const handleSorting = (e) => {
    e.preventDefault();
    let sorted = [...allEmp];

    if (e.target.value === "asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (e.target.value === "desc") {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (e.target.value === "reset") {
      sorted.sort((a, b) => a.id - b.id);
    }

    setAllEmp(sorted);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Employee Data</h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            onChange={handleFilter}
            className="w-full md:w-1/3 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            name="sorting"
            onChange={handleSorting}
            className="w-full md:w-1/4 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" selected disabled >-- Sort --</option>
            <option value="asc">Ascending (A-Z)</option>
            <option value="desc">Descending (Z-A)</option>
            <option value="reset">Reset</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-700 text-gray-300">
              <tr>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Gender</th>
                <th className="px-4 py-3 text-left">Hobby</th>
                <th className="px-4 py-3 text-left">City</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {virtualEmp.map((emp, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-700 hover:bg-gray-700 transition"
                >
                  <td className="px-4 py-2"><img src={emp.image} alt="" width={100} height={100}/></td>
                  <td className="px-4 py-2">{emp.name}</td>
                  <td className="px-4 py-2">{emp.email}</td>
                  <td className="px-4 py-2">{emp.gender}</td>
                  <td className="px-4 py-2">{emp.hoby?.join(", ")}</td>
                  <td className="px-4 py-2">{emp.city}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={(e) => handleDelete(e, emp.id)}
                      className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white text-sm"
                    >
                      Delete
                    </button>
                    <Link
                      to={`/edit/${emp.id}`}
                      className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white text-sm"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span className="text-gray-300">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              currentPage !== totalPages && setCurrentPage(currentPage + 1)
            }
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
