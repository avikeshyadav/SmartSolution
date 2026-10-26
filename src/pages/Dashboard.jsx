
import { useNavigate , useLocation} from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const {users, task} = location.state || {};
  console.log(users);
  console.log(task);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        style={{
          width: "220px",
          padding: "24px",
          background: "#1e293b",
          color: "white"
        }}
      >
        <h2>My Dashboard</h2>
        <p>Home</p>
        <p>Users</p>
        <p>Settings</p>
        <button onClick={handleLogout}>Logout</button>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: "30px", background: "#f1f5f9" }}>
        <h1>Dashboard</h1>
        <p>Welcome back!</p>
        {users ? (<p>{users?.name}</p>):(<></>)}

        <div> <h2 className="bg-green-200 justify-center p-5 text-black align-middle text-center">Tasks  Details</h2></div> 
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap"}}>
          {task? (<div>
            {task?.map((details,index)=>(
          <div style={cardStyle} id={details?.id}>
            <h3>{details?.title}</h3>
            <h2>{details?.description}</h2>
            <button className={details?.is_completed ?"bg-red-700 p-2" : "bg-green-400"}>{details?.is_completed ? "Delete Now": "Mark As Completed"}</button>
          </div>
            ))}

          </div>) 
          :(
          <div>No Task Avaliable</div>
          )}


        </div>
      </main>
    </div>
  );
}

const cardStyle = {
  background: "white",
  padding: "24px",
  borderRadius: "12px",
  minWidth: "150px",
  flex: 1
};
