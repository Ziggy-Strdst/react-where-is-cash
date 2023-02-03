import CostItem from './CostItem';

import './Costs.css';

const Costs = ({ costs }) => {
  return (
    <div className="costs">
      {costs.map((cost) => (
        <CostItem cost={cost} key={cost.id} />
      ))}
    </div>
  );
};

export default Costs;
