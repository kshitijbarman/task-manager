// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AllTask = () => {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchUserTasks = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:6969/task/getAll", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       // console.log(res.data);

//       setTasks(res.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Fetch error:", error);
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (taskId) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete("http://localhost:6969/task/delete", {
//         headers: { Authorization: `Bearer ${token}` },
//         data: { taskId },
//       });
//       alert("Task deleted successfully.");
//       fetchUserTasks(); // Refresh tasks
//     } catch (error) {
//       console.error("Delete error:", error);
//       alert(error.response?.data?.message || "Delete failed.");
//     }
//   };

//   const handleUpdate = (taskId) => {
//     navigate(`/update/${taskId}`);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("isLogin");
//     navigate("/");
//   };

//   const handleCreateTask = () => {
//     navigate("/add-task");
//   };

//   useEffect(() => {
//     fetchUserTasks();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <div className="flex justify-between items-center bg-blue-600 text-white px-6 py-4">
//         <h1 className="text-2xl font-bold">Task Manager</h1>
//         <div className="space-x-4">
//           <button
//             className="bg-white text-blue-600 px-4 py-2 rounded"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Section */}
//       <div className="p-6 flex justify-between">
//         {/* User Info and Task Cards */}
//         <div className="w-3/4">
//           {/* <h2 className="text-xl font-semibold mb-4">
//             Welcome, {userData.name}
//           </h2>
//           <h2 className="text-xl font-semibold mb-4">Role, {userData.role}</h2> */}

//           {loading ? (
//             <p className="text-gray-600">Loading tasks...</p>
//           ) : tasks.length === 0 ? (
//             <p>No tasks found.</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//               {tasks.map((task) => (
//                 <div
//                   key={task._id}
//                   className="bg-white w-full rounded-2xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-xl transition-all duration-300"
//                 >
//                   {/* Left section: Task Info */}
//                   <div className="w-full md:w-3/4 space-y-1">
//                     <h3 className="text-2xl font-semibold text-blue-700 mb-2">
//                       📝 Title : {task.title}
//                     </h3>
//                     <p>
//                       <span className="font-semibold text-gray-700">
//                         🧑🏻‍💼 Created By:
//                       </span>{" "}
//                       {task.userId.name}
//                     </p>
//                     <p>
//                       <span className="font-semibold text-gray-700">
//                         🔰 Role:
//                       </span>{" "}
//                       {task.userId.role}
//                     </p>
//                     <p>
//                       <span className="font-semibold text-gray-700">
//                         📂 Category:
//                       </span>{" "}
//                       {task.category}
//                     </p>
//                     <p>
//                       <span className="font-semibold text-gray-700">
//                         🗒️ Description:
//                       </span>{" "}
//                       {task.description}
//                     </p>
//                     <p>
//                       <span className="font-semibold text-gray-700">
//                         📅 Due Date:
//                       </span>{" "}
//                       {new Date(task.dueDate).toLocaleDateString()}
//                     </p>
//                     <p>
//                       <span className="font-semibold text-gray-700">
//                         📌 Status:
//                       </span>{" "}
//                       <span
//                         className={`px-2 py-0.5 rounded text-white text-sm ${
//                           task.status === "pending"
//                             ? "bg-yellow-500"
//                             : "bg-green-600"
//                         }`}
//                       >
//                         {task.status}
//                       </span>
//                     </p>
//                     <p>
//                       <span className="font-semibold text-gray-700">
//                         🕒 Created At:
//                       </span>{" "}
//                       {new Date(task.createdAt).toLocaleString()}
//                     </p>
//                   </div>

//                   {/* Right section: Buttons */}
//                   <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-1/4">
//                     <button
//                       onClick={() => handleUpdate(task._id)}
//                       className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded w-full"
//                     >
//                       ✏️ Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(task._id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
//                     >
//                       🗑️ Remove
//                     </button>
//                     {task.status === "pending" && (
//                       <button
//                         onClick={() => handleMarkDone(task._id)}
//                         className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
//                       >
//                         ✅ Mark as Done
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllTask;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const AllTask = () => {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");

//   const fetchUserTasks = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:6969/task/getAll", {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setTasks(res.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Fetch error:", error);
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (taskId) => {
//     try {
//       const token = localStorage.getItem("token");
//       await axios.delete("http://localhost:6969/task/delete", {
//         headers: { Authorization: `Bearer ${token}` },
//         data: { taskId },
//       });
//       alert("Task deleted successfully.");
//       fetchUserTasks(); // Refresh tasks
//     } catch (error) {
//       console.error("Delete error:", error);
//       alert(error.response?.data?.message || "Delete failed.");
//     }
//   };

//   const handleUpdate = (taskId) => {
//     navigate(`/update/${taskId}`);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("isLogin");
//     navigate("/");
//   };

//   const handleCreateTask = () => {
//     navigate("/add-task");
//   };

//   useEffect(() => {
//     fetchUserTasks();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navbar */}
//       <div className="flex justify-between items-center bg-blue-600 text-white px-6 py-4">
//         <h1 className="text-2xl font-bold">Task Manager</h1>
//         <div className="space-x-4">
//           <button
//             className="bg-white text-blue-600 px-4 py-2 rounded"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Main Section */}
//       <div className="p-6 flex flex-col md:flex-row gap-6">
//         {/* Task Display Section */}
//         <div className="w-full">
//           {/* Search Bar */}
//           <div className="mb-6">
//             <input
//               type="text"
//               placeholder="🔍 Search by title..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           {loading ? (
//             <p className="text-gray-600">Loading tasks...</p>
//           ) : tasks.length === 0 ? (
//             <p>No tasks found.</p>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//               {tasks
//                 .filter((task) =>
//                   task.title.toLowerCase().includes(searchTerm.toLowerCase())
//                 )
//                 .map((task) => (
//                   <div
//                     key={task._id}
//                     className="bg-white w-full rounded-2xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-xl transition-all duration-300"
//                   >
//                     {/* Left section: Task Info */}
//                     <div className="w-full md:w-3/4 space-y-1">
//                       <h3 className="text-2xl font-semibold text-blue-700 mb-2">
//                         📝 Title : {task.title}
//                       </h3>
//                       <p>
//                         <span className="font-semibold text-gray-700">
//                           🧑🏻‍💼 Created By:
//                         </span>{" "}
//                         {task.userId.name}
//                       </p>
//                       <p>
//                         <span className="font-semibold text-gray-700">
//                           🔰 Role:
//                         </span>{" "}
//                         {task.userId.role}
//                       </p>
//                       <p>
//                         <span className="font-semibold text-gray-700">
//                           📂 Category:
//                         </span>{" "}
//                         {task.category}
//                       </p>
//                       <p>
//                         <span className="font-semibold text-gray-700">
//                           🗒️ Description:
//                         </span>{" "}
//                         {task.description}
//                       </p>
//                       <p>
//                         <span className="font-semibold text-gray-700">
//                           📅 Due Date:
//                         </span>{" "}
//                         {new Date(task.dueDate).toLocaleDateString()}
//                       </p>
//                       <p>
//                         <span className="font-semibold text-gray-700">
//                           📌 Status:
//                         </span>{" "}
//                         <span
//                           className={`px-2 py-0.5 rounded text-white text-sm ${
//                             task.status === "pending"
//                               ? "bg-yellow-500"
//                               : "bg-green-600"
//                           }`}
//                         >
//                           {task.status}
//                         </span>
//                       </p>
//                       <p>
//                         <span className="font-semibold text-gray-700">
//                           🕒 Created At:
//                         </span>{" "}
//                         {new Date(task.createdAt).toLocaleString()}
//                       </p>
//                     </div>

//                     {/* Right section: Buttons */}
//                     <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-1/4">
//                       <button
//                         onClick={() => handleUpdate(task._id)}
//                         className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded w-full"
//                       >
//                         ✏️ Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(task._id)}
//                         className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
//                       >
//                         🗑️ Remove
//                       </button>
//                       {task.status === "pending" && (
//                         <button
//                           onClick={() => handleUpdate(task._id)}
//                           className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
//                         >
//                           ✅ Mark as Done
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllTask;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AllTask = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest"); // "latest" or "oldest"

  const fetchUserTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:6969/task/getAll", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Fetch error:", error);
      setLoading(false);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete("http://localhost:6969/task/delete", {
        headers: { Authorization: `Bearer ${token}` },
        data: { taskId },
      });
      alert("Task deleted successfully.");
      fetchUserTasks();
    } catch (error) {
      console.error("Delete error:", error);
      alert(error.response?.data?.message || "Delete failed.");
    }
  };

  const handleUpdate = (taskId) => {
    navigate(`/update/${taskId}`);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLogin");
    navigate("/");
  };

  const handleCreateTask = () => {
    navigate("/add-task");
  };

  const handleMarkDone = async (taskId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:6969/task/update`,
        { taskId, status: "completed" },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      fetchUserTasks();
    } catch (error) {
      console.error("Mark done error:", error);
      alert(error.response?.data?.message || "Update failed.");
    }
  };

  useEffect(() => {
    fetchUserTasks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="flex justify-between items-center bg-blue-600 text-white px-6 py-4">
        <h1 className="text-2xl font-bold">Task Manager</h1>
        <div className="space-x-4">
          <button
            className="bg-white text-blue-600 px-4 py-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="p-6">
        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="🔍 Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full md:w-1/2"
          />

          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="font-semibold text-gray-700">Sort by:</label>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="latest">📅 Latest First</option>
              <option value="oldest">📜 Oldest First</option>
            </select>
          </div>
        </div>

        {/* Task Cards */}
        {loading ? (
          <p className="text-gray-600">Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {tasks
              .filter((task) =>
                task.title.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .sort((a, b) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
              })
              .map((task) => (
                <div
                  key={task._id}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-xl transition-all duration-300"
                >
                  {/* Task Info */}
                  <div className="w-full md:w-3/4 space-y-1">
                    <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                      📝 Title : {task.title}
                    </h3>
                    <p>
                      <span className="font-semibold text-gray-700">
                        🧑🏻‍💼 Created By:
                      </span>{" "}
                      {task.userId.name}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        🔰 Role:
                      </span>{" "}
                      {task.userId.role}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        📂 Category:
                      </span>{" "}
                      {task.category}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        🗒️ Description:
                      </span>{" "}
                      {task.description}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        📅 Due Date:
                      </span>{" "}
                      {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        📌 Status:
                      </span>{" "}
                      <span
                        className={`px-2 py-0.5 rounded text-white text-sm ${
                          task.status === "pending"
                            ? "bg-yellow-500"
                            : "bg-green-600"
                        }`}
                      >
                        {task.status}
                      </span>
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        🕒 Created At:
                      </span>{" "}
                      {new Date(task.createdAt).toLocaleString()}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-1/4">
                    <button
                      onClick={() => handleUpdate(task._id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded w-full"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(task._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
                    >
                      🗑️ Remove
                    </button>
                    {task.status === "pending" && (
                      <button
                        onClick={() => handleMarkDone(task._id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
                      >
                        ✅ Mark as Done
                      </button>
                    )}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTask;
