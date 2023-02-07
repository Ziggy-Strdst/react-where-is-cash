import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {
  const saveDataHandler = (inputData) => {
    const costData = {
      ...inputData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };
  return (
    <div className="new-cost">
      <CostForm onSavaData={saveDataHandler} />
    </div>
  );
};

export default NewCost;
