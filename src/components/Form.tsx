const Form = () => {
  return (
    <form className="form">
      <div className="formGroup">
        <label htmlFor="cardholder">CARDHOLDER NAME</label>
        <input type="text" id="cardholder" placeholder="e.g. Jane Appleseed" />
      </div>
      <div className="formGroup">
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
        />
      </div>
      <div className="formGroup">
        <div>
          <label htmlFor="date">Exp. Date (MM/YY)</label>
          <div>
            <input type="text" id="date" placeholder="MM" />
            <input type="text" id="date" placeholder="YY" />
          </div>
        </div>
        <div>
          <label htmlFor="cvc">CVC</label>
          <input type="text" id="cvc" placeholder="e.g. 123" />
        </div>
      </div>
      <button className="confirmBtn">Confirm</button>
    </form>
  );
};

export default Form;
