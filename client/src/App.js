import { useEffect } from 'react';
import axios from 'axios';
function App() {

  useEffect(() => {
    axios.get('http://localhost:4000/getUsers')
      .then((res) => res.data)
      .then((data) => console.log(data))
      .catch(err => console.log(err))
  });

  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
