import './CostItem.css';

function CostItem({ cost }) {
  return (
    <div className="cost-item">
      <div>{cost.date.toDateString()}</div>
      <div className="cost-item__description">
        <h2>{cost.description}</h2>
        <div className="cost-item__price">{cost.amount}$ </div>
      </div>
    </div>
  );
}

export default CostItem;
