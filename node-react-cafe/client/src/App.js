import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5100/api/cafe")
      .then((res) => setCafes(res.data))
      .catch((error) => console.error("모두 불러오기 실패 에러", error));
  }, []);
  return (
    <div>
      <h1>Cafe List</h1>
      <ul>
        {cafes.map((cafe) => (
          <li key={cafe.ID}>
            {cafe.NAME}
            {cafe.PRICE}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
