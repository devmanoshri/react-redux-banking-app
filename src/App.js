import "bulma";
import Header from "./components/Header";
import Banking from "./components/Banking";
import Balance from "./components/Balance";
import AccountType from "./components/AccountType";
import Login from "./components/Login";
function App() {
  return (
    <div className="section">
      <Header />
      <Balance />
      <Banking />
      <AccountType />
      <Login />
    </div>
  );
}

export default App;
