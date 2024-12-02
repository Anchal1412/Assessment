import React from "react";
import DynamicForm from "./components/DynamicForm";

const App = () => {
  return (
    <div>
      <header style={{ textAlign: "center", padding: "10px", backgroundColor: "#282c34", color: "white" }}>
        <h1>Dynamic Form Application</h1>
      </header>
      <main>
        <DynamicForm />
      </main>
      <footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#f1f1f1", marginTop: "20px" }}>
        <p>&copy; 2024 Dynamic Form Inc.</p>
      </footer>
    </div>
  );
};

export default App;
