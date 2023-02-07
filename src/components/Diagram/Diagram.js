import DiagramBar from './DiagramBar';

import './Diagram.css';

const Diagram = (props) => {
  const dataSetsValues = props.dataSet.map((data) => data.value);

  const maxMonthCost = Math.max(...dataSetsValues);
  return (
    <div className="diagram">
      {props.dataSet.map((data) => (
        <DiagramBar
          key={data.id}
          value={data.value}
          maxValue={maxMonthCost}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
