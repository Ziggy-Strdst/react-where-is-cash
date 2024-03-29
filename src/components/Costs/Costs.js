import { useState } from 'react';

import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import CostsDiagram from './CostsDiagram';
import CostList from './CostList';

import './Costs.css';

const Costs = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState('2023');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = costs.filter(
    (cost) => cost.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <CostsDiagram costs={filteredCosts} />
      <CostList costs={filteredCosts} />
    </Card>
  );
};

export default Costs;
