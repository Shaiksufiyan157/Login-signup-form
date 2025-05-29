import './styles/createpage.css'
import  { useState } from 'react';
import { Link } from 'react-router';


const SignupForm = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        agency: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // You can add API call or validation here
    };

    return (
        <div className="signup-container">
            <h1>Create your PopX account</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">Full Name*</label>
                <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter your full name"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="phone">Phone Number*</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email Address*</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Password*</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="company">Company Name*</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Enter company name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                />

                <div className="radio-group">
                    <label>Are you an Agency?*</label><br />
                    <input
                        type="radio"
                        id="agency-yes"
                        name="agency"
                        value="yes"
                        checked={formData.agency === 'yes'}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="agency-yes">Yes</label>
                    <input
                        type="radio"
                        id="agency-no"
                        name="agency"
                        value="no"
                        checked={formData.agency === 'no'}
                        onChange={handleChange}
                    />
                    <label htmlFor="agency-no">No</label>
                </div>

               <Link to='/account'> <button type="submit">Create Account</button></Link>
            </form>
        </div>
    );
};

export default SignupForm;

