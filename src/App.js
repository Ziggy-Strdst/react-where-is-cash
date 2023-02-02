import CostItem from './components/CostItem';
const costs = [
  {
    id: 1,
    date: new Date(1989, 11, 1),
    description: 'Playstation 5',
    amount: 999.99,
  },
  {
    id: 2,
    date: new Date(1989, 10, 12),
    description: 'XBox series X',
    amount: 850,
  },
  {
    id: 3,
    date: new Date(1989, 9, 25),
    description: 'Nintendo',
    amount: 450,
  },
];

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      {costs.map((cost) => (
        <CostItem cost={cost} key={cost.id} />
      ))}
    </div>
  );
}

export default App;
