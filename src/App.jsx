import Sidebar from './Sidebar';
import './App.css'

function App() {
  return (
    <div className="container">
      <Sidebar />
      <main className="main-content">
        <h1>Welcome</h1>
        <p>This is the main content.</p>
      </main>
    </div>
  );
}

export default App