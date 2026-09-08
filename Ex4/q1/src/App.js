import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* //Q1 */}
      <div className="App">
        <p style={{ fontSize: '100px' }}>Hello <span style={{ color: 'blue', fontWeight: 'bold' }}>React</span></p>
      </div>

      {/* Q3 */}
      <div>
        <div style={{ display: 'flex', gap: '10px', backgroundColor: 'darkgray', padding: '10px' }}>
          <button className="navbar-first-button">Home</button>
          <button className="navbar-button">Search</button>
          <button className="navbar-button">Contact</button>
          <button className="navbar-last-button">Login</button>
        </div>
      </div>

      {/* Q4 */}
      <div className="App">
        <p style={{ color: 'blue', fontWeight: 'bold', fontSize: '100px' }}>This is JSX</p>
      </div>

      {/* Q5 */}
      <div style={{ padding: '10px' }}>
        <p style={{ fontWeight: 'bold', fontSize: '50px' }}>Course Names</p>
        <ul style={{ fontSize: '30px' }}>
          <li>React</li>
          <li>ReactNative</li>
          <li>NodeJs</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
