import { useState } from 'react';

import CostDate from './CostDate';
import Card from '../UI/Card';

import './CostItem.css';

const CostItem = ({ cost }) => {
  const [descr, setDescr] = useState(cost.description);
  const changeHandler = () => {
    setDescr('TUTU');
  };

  return (
    <Card className="cost-item">
      <CostDate date={cost.date} />
      <div className="cost-item__description">
        <h2>{descr}</h2>
        <div className="cost-item__price">{cost.amount}$ </div>
        <button onClick={changeHandler}>Change</button>
      </div>
    </Card>
  );
};

export default CostItem;
