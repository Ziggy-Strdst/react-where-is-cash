import CostItem from './CostItem';
import Card from '../UI/Card';

import './Costs.css';

const Costs = ({ costs }) => {
  return (
    <Card className="costs">
      {costs.map((cost) => (
        <CostItem cost={cost} key={cost.id} />
      ))}
    </Card>
  );
};

export default Costs;
