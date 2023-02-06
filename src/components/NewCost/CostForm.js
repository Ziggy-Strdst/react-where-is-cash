import { useState } from 'react';

import './CostForm.css';

const CostForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      name: name,
      amount: amount,
      date: new Date(date),
    };
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input type="number" onChange={amountChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="1989-01-12"
            max="2024-24-02"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-cost__actions">
        <button type="submit">Add cost</button>
        <button>Cancel</button>
      </div>
    </form>
  );
};

export default CostForm;
