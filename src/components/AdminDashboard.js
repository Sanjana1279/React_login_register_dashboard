// AdminDashboard.js
import React, { useEffect, useState } from "react";
import api from "../api";

function AdminDashboard() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get("/employees").then(res => setEmployees(res.data)).catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <p>Welcome HR! You can manage employees here.</p>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>{emp.name} - {emp.role} - {emp.email}</li>
        ))}
      </ul>
    </div>
  );
}
export default AdminDashboard;
