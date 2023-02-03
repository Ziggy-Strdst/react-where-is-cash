import CostDate from './CostDate';
import './CostItem.css';

const CostItem = ({ cost }) => {
  return (
    <div className="cost-item">
      <CostDate date={cost.date} />
      <div className="cost-item__description">
        <h2>{cost.description}</h2>
        <div className="cost-item__price">{cost.amount}$ </div>
      </div>
    </div>
  );
};

export default CostItem;
