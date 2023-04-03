import React, { useState } from 'react';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const validateEmail = (email) => {
        // Simple email validation regex
        const emailRegex = /^\S+@\S+\.\S+$/;
        console.log(emailRegex.test(email))
        if (emailRegex.test(email)) {
            return emailRegex.test(email);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if all input fields are filled
        const formErrorsCopy = { ...formErrors };
        let hasErrors = false;
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                formErrorsCopy[key] = `${key} is required.`;
                hasErrors = true;
            } else {
                formErrorsCopy[key] = '';
            }
        });

        // Check if email is valid
        if (formData.email && !validateEmail(formData.email)) {
            formErrorsCopy.email = 'Email is not valid.';
            hasErrors = true;
        }

        if (hasErrors) {
            setFormErrors(formErrorsCopy);
            return;
        }

        // Submit form
        console.log('Form submitted:', formData);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Update form data
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

        // Clear error message for this input field
        setFormErrors((prevFormErrors) => ({ ...prevFormErrors, [name]: '' }));
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg sm:w-96 mx-auto">
            <div className="mb-4">
                <label htmlFor="firstName" className="block font-medium text-gray-700 mb-2">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`border rounded w-full py-2 px-3 ${formErrors.firstName && 'border-red-500'}`}
                />
                {formErrors.firstName && <span className="text-red-500">{formErrors.firstName}</span>}
            </div>

            <div className="mb-4">
                <label htmlFor="lastName" className="block font-medium text-gray-700 mb-2">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`border rounded w-full py-2 px-3 ${formErrors.lastName && 'border-red-500'}`}
                />
                {formErrors.lastName && <span className="text-red-500">{formErrors.lastName}</span>}
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`border rounded w-full py-2 px-3 ${formErrors.email && 'border-red-500'}`}
                />
                {formErrors.email && <span className="text-red-500">{formErrors.email}</span>}
            </div>

            <div className="mb-4">
                <label htmlFor="phoneNumber" className="block font-medium text-gray-700 mb-2">Phone Number:</label>
                <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={`border rounded w-full py-2 px-3 ${formErrors.phoneNumber && 'border-red-500'}`}
                />
                {formErrors.phoneNumber && <span className="text-red-500">{formErrors.phoneNumber}</span>}
            </div>

            <button type="submit" className="block font-medium text-gray-700 mb-2 bg-blue-600 text-white py-2 px-2 rounded">Submit</button>
        </form>
    );
};

export default FormComponent;