import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const DUMMY_DATA = [
    { name: "Binar", program: "fullstack", wave: "19" },
    { name: "Academy", program: "fullstack", wave: "19" },
  ];

  const [studentData, setStudentData] = useState(DUMMY_DATA);

  const addStudent = (data) => {
    setStudentData([...studentData, data]);
  };

  return (
    <div className="app">
      <Form onAddStudent={addStudent} />
      <Table students={studentData} />
    </div>
  );
}

export default App;
