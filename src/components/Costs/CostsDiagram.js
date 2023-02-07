import Diagram from '../Diagram/Diagram';

const CostsDiagram = (props) => {
  const diagramDataSets = [
    { id: 1, value: 0, label: 'янв' },
    { id: 2, value: 0, label: 'фев' },
    { id: 3, value: 0, label: 'мар' },
    { id: 4, value: 0, label: 'апр' },
    { id: 5, value: 0, label: 'май' },
    { id: 6, value: 0, label: 'июн' },
    { id: 7, value: 0, label: 'июл' },
    { id: 8, value: 0, label: 'авг' },
    { id: 9, value: 0, label: 'сен' },
    { id: 10, value: 0, label: 'окт' },
    { id: 11, value: 0, label: 'ноя' },
    { id: 12, value: 0, label: 'дек' },
  ];

  for (const cost of props.costs) {
    const month = cost.date.getMonth();
    diagramDataSets[month].value += cost.amount;
  }
  return <Diagram dataSet={diagramDataSets} />;
};

export default CostsDiagram;
