import { useState } from 'react';

import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import CostItem from './CostItem';

import './Costs.css';

const Costs = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      {filteredCosts.map((cost) => (
        <CostItem cost={cost} key={cost.id} />
      ))}
    </Card>
  );
};

export default Costs;
