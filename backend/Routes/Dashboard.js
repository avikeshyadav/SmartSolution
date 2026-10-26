
import { useNavigate, useLocation } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  // Get data passed through navigation state
  const { users, task } = location.state || {};


  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          padding: "24px",
          background: "#1e293b",
          color: "white",
          boxSizing: "border-box",
        }}
      >
        <h2>Dashboard</h2>
        <p>Home</p>
        <p>Users</p>
        <p>Settings</p>

        <button onClick={handleLogout}>Logout</button>
      </aside>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "30px",
          background: "#f1f5f9",
          minWidth: 0,
        }}
      >
        <h1>Dashboard</h1>

        {/* Welcome Message */}
        <p>
          Welcome {users?.name || "back, Mr."}
        </p>

        {/* Dashboard Cards */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <div style={cardStyle}>
            <h3>Total Users</h3>
            <h2>1,250</h2>
          </div>

          <div style={cardStyle}>
            <h3>Total Orders</h3>
            <h2>850</h2>
          </div>

          <div style={cardStyle}>
            <h3>Total Revenue</h3>
            <h2>$12,500</h2>
          </div>
        </div>

        {/* Task Details */}
        <section style={{ marginTop: "30px" }}>
          <h2>Task Details</h2>

          {task ? (
            <div
              key={task.id}
              style={{
                background: "#bbf7d0",
                padding: "16px",
                borderRadius: "8px",
                marginTop: "12px",
              }}
            >
              <h3>{task.title || "Untitled Task"}</h3>
              <p>Task ID: {task.id ?? "N/A"}</p>
            </div>
          ) : (
            <p>No tasks are available.</p>
          )}
        </section>
      </main>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "24px",
  borderRadius: "12px",
  minWidth: "150px",
  flex: 1,
  boxSizing: "border-box",
};
