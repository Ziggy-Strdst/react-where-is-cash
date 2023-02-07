import NewCost from './components/NewCost/NewCost';
import Costs from './components/Costs/Costs';
import { useState } from 'react';

const INITIAL_COSTS = [
  {
    id: 1,
    date: new Date(2023, 0, 2),
    description: 'Playstation 5',
    amount: 999.99,
  },
  {
    id: 2,
    date: new Date(2020, 10, 12),
    description: 'XBox series X',
    amount: 850,
  },
  {
    id: 3,
    date: new Date(2021, 9, 25),
    description: 'Nintendo',
    amount: 450,
  },
  {
    id: 4,
    date: new Date(2022, 9, 25),
    description: 'Jeans',
    amount: 40,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts((prev) => [cost, ...prev]);
  };

  return (
    <>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </>
  );
};

export default App;
