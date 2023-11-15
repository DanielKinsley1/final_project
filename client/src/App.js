import Routed from "./components/Routes";

export const loggedInUser = JSON.parse(localStorage.getItem("user"));
console.log("user logged in", loggedInUser);


function App() {
  return (
    <div className="App">

      <Routed />
    </div>
  );
}

export default App;
