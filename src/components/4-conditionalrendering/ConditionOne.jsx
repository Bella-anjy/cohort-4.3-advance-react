const isRainy = false;
const isLogged = true;
const username = "Thomas";

const ConditionOne = () => {
  return (
    <div>
      <div>
        <h1>Rainy</h1>
        {isRainy ? <p>Take your umbrella</p> : <p>Keep your umbrella</p>}
      </div>
      <div>
        <h1>User Dashboard</h1>
        {isLogged ? (
          <div>
            <p>Welcome {username}</p>
            <p>Dashboard</p>
            <button>Profile</button>
            <button>Logout</button>
          </div>
        ) : (
          <div>
            <p>Please Login</p>
            <button>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ConditionOne;
