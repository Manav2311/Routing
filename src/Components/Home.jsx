import React, { useEffect, useState } from "react";

const Home = () => {
  const [allEmp, setAllEmp] = useState(() => {
    let employees = localStorage.getItem("emp");
    return employees ? JSON.parse(employees) : [];
  });

  const [newEmp, setNewEmp] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    hoby: [],
    city: "",
  });

  const [hobby, setHobby] = useState([]);
  const [city] = useState(["Surat", "Vapi", "Tapi", "Ghandhinagar"]);

  useEffect(() => {
    localStorage.setItem("emp", JSON.stringify(allEmp));
  }, [allEmp]);

  const onInputChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (name === "hoby") {
      let updatedHobby = [...hobby];
      if (checked) {
        updatedHobby.push(value);
      } else {
        updatedHobby = updatedHobby.filter((h) => h !== value);
      }
      setHobby(updatedHobby);
      setNewEmp({ ...newEmp, hoby: updatedHobby });
    } else {
      setNewEmp({ ...newEmp, [name]: value });
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!newEmp.name || !newEmp.email) {
      alert("Fill all fields");
      return;
    }

    let newId =
      allEmp.length > 0 ? Math.max(...allEmp.map((emp) => emp.id)) + 1 : 1;

    setAllEmp([...allEmp, { ...newEmp, id: newId }]);
    setNewEmp({
      name: "",
      email: "",
      password: "",
      gender: "",
      hoby: [],
      city: "",
      image: "",
    });
    setHobby([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full min-h-52 max-w-4xl p-6 bg-gray-800 shadow-lg rounded-xl text-white ">
        <h2 className="text-4xl font-bold text-center text-white  mb-8">
          Enter Your Details
        </h2>

        <form onSubmit={onFormSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-white font-medium">Name:</label>
            <input
              name="name"
              type="text"
              value={newEmp.name}
              onChange={onInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-white  font-medium">Email:</label>
            <input
              name="email"
              type="email"
              value={newEmp.email}
              onChange={onInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-white  font-medium">
              Password:
            </label>
            <input
              name="password"
              type="password"
              value={newEmp.password}
              onChange={onInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-white  font-medium">
              Gender:
            </label>
            <div className="flex gap-6 mt-2">
              <label className="inline-flex items-center text-white ">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={newEmp.gender === "male"}
                  onChange={onInputChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="inline-flex items-center text-white ">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={newEmp.gender === "female"}
                  onChange={onInputChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-white  font-medium">Hobby:</label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {["Cricket", "Swiming", "Dancing", "Coding"].map((h) => (
                <label key={h} className="inline-flex items-center text-white ">
                  <input
                    type="checkbox"
                    name="hoby"
                    value={h}
                    checked={hobby.includes(h)}
                    onChange={onInputChange}
                    className="mr-2"
                  />
                  {h}
                </label>
              ))}
            </div>
          </div>

 
          <div>
            <label className="block mb-1 text-white  font-medium">City:</label>
            <select
              name="city"
              value={newEmp.city}
              onChange={onInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" selected disabled className="bg-gray-800 text-white">--- Select City ---</option>
              {city.map((c) => (
                <option key={c} value={c} className="bg-gray-800">
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 text-white  font-medium">
              {" "}
              Online Image:
            </label>
            <div className="flex justify-end">
              <img
                src={newEmp.image}
                alt="Profile"
                width="100px"
                height="100px"
                className="w-30 h-30 rounded-lg border-2 border-gray-600 mb-0.5 "
              />
            </div>
            <input
              name="image"
              type="text"
              value={newEmp.image}
              onChange={onInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
