
import { useNavigate } from 'react-router-dom';

export const Dashboard = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await onLogout();
   
    // after Logout redirect from login 
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Facebook</h1>
          <div className="user-info">
            <span>Welcome, {user.displayName || user.email}!</span>
            <button onClick={handleLogout} className="logout-button">
              Log Out
            </button>
          </div>
        </div>
      </header>
      
      <main className="dashboard-main">
        <div className="welcome-card">
          <h2>Welcome to Facebook!</h2>
          <p>You have successfully logged in.</p>
          <div className="user-details">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Display Name:</strong> {user.displayName || 'Not set'}</p>
            <p><strong>User ID:</strong> {user.uid}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

