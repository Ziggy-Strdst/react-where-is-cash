import { useState } from 'react';

import './CostForm.css';

const CostForm = (props) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [isClicked, setIsClicked] = useState(false);

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
      description: name,
      amount: amount,
      date: new Date(date),
    };

    props.onSavaData(costData);

    setName('');
    setAmount('');
    setDate('');
  };

  const buttonhandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      {!isClicked && (
        <button onClick={buttonhandler}>Добавить новую трату</button>
      )}
      {isClicked && (
        <form onSubmit={submitHandler}>
          <div className="new-cost__controls">
            <div className="new-cost__control">
              <label>Название</label>
              <input type="text" onChange={nameChangeHandler} value={name} />
            </div>
            <div className="new-cost__control">
              <label>Сумма</label>
              <input
                type="number"
                onChange={amountChangeHandler}
                value={amount}
              />
            </div>
            <div className="new-cost__control">
              <label>Дата</label>
              <input
                type="date"
                min="1989-01-12"
                max="2024-24-02"
                onChange={dateChangeHandler}
                value={date}
              />
            </div>
          </div>
          <div className="new-cost__actions">
            <button type="submit">Добавить</button>
            <button onClick={buttonhandler}>Закрыть</button>
          </div>
        </form>
      )}
    </>
  );
};

export default CostForm;
