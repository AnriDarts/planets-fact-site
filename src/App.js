import Main from "./pages/main/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router basename={"https://anridarts.github.io/planets-fact-site/"}>
        <Routes>
          <Route path="/" element={<Navigate to={"/planets/Mercury"} />} />
          <Route path="/planets" element={<Main />} />
          <Route path="/planets/:planet" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
