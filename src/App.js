import './App.css';
import Card from './components/Card';

export default function App() {
  return <div className="App">
    <Card title="Test Card" description="This is my description!" priority="low" />
  </div>
}