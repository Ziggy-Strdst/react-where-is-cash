import CostDate from './CostDate';
import Card from '../UI/Card';

import './CostItem.css';

const CostItem = ({ cost }) => {
  return (
    <Card className="cost-item">
      <CostDate date={cost.date} />
      <div className="cost-item__description">
        <h2>{cost.description}</h2>
        <div className="cost-item__price">{cost.amount}$ </div>
      </div>
    </Card>
  );
};

export default CostItem;
