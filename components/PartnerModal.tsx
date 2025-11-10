import React, { useState } from 'react';

interface PartnerModalProps {
    onClose: () => void;
}

const PartnerModal: React.FC<PartnerModalProps> = ({ onClose }) => {
    const [companyName, setCompanyName] = useState('');
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would use a service like EmailJS or a backend endpoint.
        // For this demo, we'll just log the data and show a success message.
        console.log({
            companyName,
            contactName,
            email,
            phone,
            message
        });
        setIsSubmitted(true);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg transform transition-all" onClick={(e) => e.stopPropagation()}>
                {isSubmitted ? (
                    <div className="p-8 md:p-12 text-center">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2 className="text-2xl font-bold text-gray-900 mt-4">Thank You for Your Interest!</h2>
                        <p className="mt-2 text-gray-600">Our team has received your inquiry and will be in touch shortly to discuss a potential partnership.</p>
                        <button onClick={onClose} className="mt-6 w-full px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors">
                            Close
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-gray-900">Become a Partner</h2>
                            <p className="mt-2 text-gray-600">Join us in our mission. Fill out the form below and we'll get in touch.</p>
                            
                             <div className="mt-6 space-y-4">
                                <div>
                                    <label htmlFor="companyName" className="text-sm font-medium text-gray-700">Company / Hotel Name</label>
                                    <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
                                </div>
                                <div>
                                    <label htmlFor="contactName" className="text-sm font-medium text-gray-700">Contact Full Name</label>
                                    <input type="text" id="contactName" value={contactName} onChange={(e) => setContactName(e.target.value)} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
                                </div>
                                 <div>
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Message (Optional)</label>
                                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-8 py-4 rounded-b-2xl flex flex-col sm:flex-row-reverse gap-3">
                            <button type="submit" className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors">
                                Submit Inquiry
                            </button>
                            <button type="button" onClick={onClose} className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors">
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PartnerModal;