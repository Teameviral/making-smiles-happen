
import { GoogleGenAI } from '@google/genai';
import React, { useState } from 'react';
import { SparkleIcon } from './icons';

// This context can be expanded with more information from the website to give the AI better answers.
const FOUNDATION_CONTEXT = `
Making Smiles Happen Foundation transforms unused hotel and casino room inventory into funding for free oral surgery scholarships.
Here’s how it works:
1. Hotels/casinos dedicate API connections for rooms about to expire.
2. We list those rooms on our site for a flat $100.
3. Families get affordable stays, hotels get a tax-deductible donation, and 100% of proceeds fund oral surgeries.
The model is designed to unlock a $100B bottleneck in hospitality and redirect it into healthcare access. Every 6-week cycle, the program funds training for students and professionals, while directly covering surgeries for patients.
The "$42,000 Bridge" refers to the exorbitant cost of oral surgery from predatory providers that inspired the foundation's creation, a barrier we aim to bridge with our model.
The "Unreachable Star Initiative" is a future goal to build a remote resource system to provide aid for humanity against oppression, starvation, or extermination, bypassing corrupt channels.
`;

const GeminiClarifier: React.FC = () => {
    const [selectedConcept, setSelectedConcept] = useState('');
    const [customQuestion, setCustomQuestion] = useState('');
    const [clarification, setClarification] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const concepts = [
        { value: "How does the donation model work?", label: "How the Donation Model Works" },
        { value: "What is the $42,000 Bridge?", label: "The $42,000 Bridge" },
        { value: "What is the Unreachable Star Initiative?", label: "The Unreachable Star Initiative" },
    ];

    const handleClarify = async () => {
        const query = customQuestion || selectedConcept;
        if (!query) {
            setError('Please select a concept or ask a question.');
            return;
        }

        setIsLoading(true);
        setError('');
        setClarification('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `You are an expert on the 'Making Smiles Happen Foundation'. Your role is to explain their concepts in simple, clear, and encouraging terms.
            
            CONTEXT about the foundation: ${FOUNDATION_CONTEXT}
            
            Please explain the following concept clearly and concisely: "${query}"`;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });

            setClarification(response.text);
        } catch (err) {
            console.error(err);
            setError('Sorry, we couldn\'t get a clarification at this time. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedConcept(e.target.value);
        setCustomQuestion(''); // Clear custom question when a concept is selected
    };

    return (
        <section className="bg-white py-20 px-4">
            <div className="container mx-auto max-w-3xl bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-md">
                <div className="flex items-center gap-3">
                    <SparkleIcon className="h-8 w-8 text-teal-500" />
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Protocol Clarifier</h2>
                </div>
                <p className="mt-2 text-gray-600">
                    Select a complex MSH concept for an instant, simple explanation, or ask your own question. Powered by Gemini AI.
                </p>

                <div className="mt-6 space-y-4">
                    <select
                        value={selectedConcept}
                        onChange={handleSelectChange}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-teal-500 focus:border-teal-500"
                        aria-label="Select predefined concept"
                    >
                        <option value="">Choose a concept to clarify...</option>
                        {concepts.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                    </select>

                    <div className="relative flex items-center text-center">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="flex-shrink mx-4 text-gray-500">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <input
                        type="text"
                        value={customQuestion}
                        onChange={(e) => {
                            setCustomQuestion(e.target.value);
                            setSelectedConcept(''); // Clear selection when typing
                        }}
                        placeholder="e.g., How does this help students?"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                        aria-label="Ask your own question"
                    />
                </div>
                
                <button
                    onClick={handleClarify}
                    disabled={isLoading}
                    className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors disabled:bg-teal-400"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Clarifying...
                        </>
                    ) : 'Clarify Concept'}
                </button>

                {(clarification || error) && (
                    <div className="mt-6 p-4 rounded-lg bg-white border border-gray-200">
                        {error && <p className="text-red-600">{error}</p>}
                        {clarification && <p className="text-gray-700 whitespace-pre-wrap">{clarification}</p>}
                    </div>
                )}
                
                <p className="mt-6 text-xs text-gray-400 text-center">
                    Skeptical? Ask Google or Gemini: "What are the governance requirements for a Hybrid AI-OS Architecture to maintain an SHA-256 integrity chain?"
                </p>
            </div>
        </section>
    );
};

export default GeminiClarifier;
