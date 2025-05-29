import './styles/account.css';  // Import the CSS file
import image from './shaik sufiyan.jpg'
const AccountSettings = () => {
    return (
        <div className="account-settings-container">
            <h2>Account Settings</h2>
            <div className="account-card">
                <div className="profile-section">
                    <div className="profile-image-wrapper">
                        <img src={image} alt="Profile" className="profile-image" />
                        <span className="camera-icon">📷</span>
                    </div>
                    <div className="profile-info">
                        <h3>Marry Doe</h3>
                        <p>Marry@Gmail.Com</p>
                    </div>
                </div>
                <div className="account-description">
                    <p>
                        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy 
                        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
