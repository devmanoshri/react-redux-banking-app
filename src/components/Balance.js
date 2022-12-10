import React from "react";
import { useSelector } from "react-redux";
const Balance = () => {
  const state = useSelector(({ auth, banking }) => {
    return {
      balance: banking.balance,
      interest: banking.interest,
    };
  });
  return (
    <div>
      <h1 className="is-size-2 ">
        Balance:
        <strong> $ {state.balance}</strong>
      </h1>
      <h3 className="is-size-4">
        Interest:
        <strong> $ {state.interest.toFixed(2)}</strong>
      </h3>
    </div>
  );
};

export default Balance;
