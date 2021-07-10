import React from "react";
import './App.css';
import SearchForm from "./components/SearchForm"
function App() {
  return ( //below is reactbootstrap imported for its components usage
    <div style={{backgroundColor: "#eae2b7"}}>
    <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/> 
          <SearchForm style={{backgroundColor:"#eae2b7"}}></SearchForm>
    </div>
  );
}

export default App;
 