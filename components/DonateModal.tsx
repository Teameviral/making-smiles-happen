
import React, { useState } from 'react';

interface DonateModalProps {
    onClose: () => void;
}

const DonateModal: React.FC<DonateModalProps> = ({ onClose }) => {
    const [amount, setAmount] = useState(100);
    const [customAmount, setCustomAmount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAmountClick = (value: number) => {
        setAmount(value);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        setCustomAmount(value);
        if (value) {
            setAmount(parseInt(value, 10));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would integrate with a payment gateway
        console.log({ name, email, amount });
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
                        <h2 className="text-2xl font-bold text-gray-900 mt-4">Thank You!</h2>
                        <p className="mt-2 text-gray-600">Your generous donation makes a world of difference. A receipt has been sent to your email.</p>
                        <button onClick={onClose} className="mt-6 w-full px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors">
                            Close
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
                            <p className="mt-2 text-gray-600">Your support helps us provide life-changing surgeries.</p>
                            
                            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[25, 50, 100, 250].map((val) => (
                                    <button type="button" key={val} onClick={() => handleAmountClick(val)} className={`p-4 rounded-lg text-lg font-bold border-2 transition-colors ${amount === val && customAmount === '' ? 'bg-teal-600 text-white border-teal-600' : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-teal-400'}`}>
                                        ${val}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-4">
                                <label htmlFor="custom-amount" className="sr-only">Custom Amount</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
                                    <input
                                        type="text"
                                        id="custom-amount"
                                        value={customAmount}
                                        onChange={handleCustomAmountChange}
                                        placeholder="Or enter custom amount"
                                        className="w-full pl-7 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                                    />
                                </div>
                            </div>

                             <div className="mt-6 space-y-4">
                                <div>
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 px-8 py-4 rounded-b-2xl flex flex-col sm:flex-row-reverse gap-3">
                            <button type="submit" className="w-full sm:w-auto px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors">
                                Donate ${amount}
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

export default DonateModal;
