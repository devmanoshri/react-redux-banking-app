import React, { useState } from "react";
import { useDispatch } from "react-redux";

import {
  deposit,
  withDraw,
  collectInterest,
  deleteAccount,
  toggleAccount,
} from "../actions/index";

const Banking = () => {
  const [amount, setAmount] = useState(0);

  const dispatch = useDispatch();

  const handelChange = (event) => {
    setAmount(event.target.value);
  };

  const handelDeposit = () => {
    dispatch(deposit(+amount));
  };

  const withDrawAmount = () => {
    dispatch(withDraw(+amount));
  };
  const collect_interest = (amount) => {
    dispatch(collectInterest(+amount));
  };
  const handelDeleteAccount = () => {
    setAmount(0);
    dispatch(deleteAccount());
  };
  const handelToggleAccount = () => {
    dispatch(toggleAccount());
  };
  return (
    <div>
      <input
        type="number"
        className="input mb-3"
        placeholder="amount"
        value={amount}
        onChange={handelChange}
      />
      <button className="button is-success  mr-2" onClick={handelDeposit}>
        Deposit
      </button>
      <button className="button is-danger mr-2" onClick={withDrawAmount}>
        Withdraw
      </button>
      <button className="button is-link mr-2" onClick={collect_interest}>
        Collect Interest
      </button>
      <button className="button is-info mr-2" onClick={handelDeleteAccount}>
        Delete Account
      </button>
      <button className="button is-warning mr-2" onClick={handelToggleAccount}>
        Change Account Type
      </button>
    </div>
  );
};

export default Banking;
