import React from 'react';
import { SparkleIcon, PlantIcon, LockClosedIcon, HeartIcon } from '../components/icons';

interface ManifestoProps {
    onPartnerClick: () => void;
}

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-4xl md:text-6xl font-bold text-teal-600">{value}</p>
        <p className="mt-2 text-lg text-gray-500">{label}</p>
    </div>
);

const Manifesto: React.FC<ManifestoProps> = ({ onPartnerClick }) => {
    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* Hero */}
            <header className="py-20 md:py-24 text-center bg-white">
                <div className="container mx-auto px-6 relative">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tighter">The Glass Box Manifesto</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">A Visual Journey from Brutal Present to Hopeful Future</p>
                </div>
            </header>

            {/* Thesis */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">The Thesis: Black Box vs. Glass Box</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="border border-red-200 bg-white p-8 rounded-xl shadow-md flex flex-col">
                            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Complex, opaque machinery representing the Black Box system" className="w-full h-48 object-cover rounded-lg mb-6"/>
                            <h3 className="flex items-center gap-3 text-2xl font-bold text-red-600">
                                <LockClosedIcon className="h-8 w-8" />
                                The Black Box
                            </h3>
                            <p className="mt-2 text-gray-600">The current system: opaque, extractive, designed to hide waste and maintain power.</p>
                            <ul className="mt-6 space-y-3 text-gray-700">
                                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">💀</span> <div><strong>Hidden processes:</strong> A + ? = C (The ? hides extraction)</div></li>
                                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">💀</span> <div><strong>Waste as liability:</strong> Unused resources rot</div></li>
                                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">💀</span> <div><strong>Power via scarcity:</strong> Control through withholding</div></li>
                                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">💀</span> <div><strong>Compliance demanded:</strong> "Go along to get along"</div></li>
                            </ul>
                        </div>
                        <div className="border border-teal-200 bg-white p-8 rounded-xl shadow-md flex flex-col">
                            <img src="https://images.unsplash.com/photo-1600585152220-406b9b71e3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Clean, transparent glass architecture representing the Glass Box system" className="w-full h-48 object-cover rounded-lg mb-6"/>
                            <h3 className="flex items-center gap-3 text-2xl font-bold text-teal-600">
                                <SparkleIcon className="h-8 w-8" />
                                The Glass Box
                            </h3>
                            <p className="mt-2 text-gray-600">The protocol solution: transparent, circulatory, converts waste into dignity.</p>
                            <ul className="mt-6 space-y-3 text-gray-700">
                                <li className="flex items-start gap-3"><span className="text-teal-500 font-bold">✨</span> <div><strong>Visible processes:</strong> A² + B² = C² (Provable math)</div></li>
                                <li className="flex items-start gap-3"><span className="text-teal-500 font-bold">✨</span> <div><strong>Waste as asset:</strong> Unused resources circulate</div></li>
                                <li className="flex items-start gap-3"><span className="text-teal-500 font-bold">✨</span> <div><strong>Power via abundance:</strong> Control through sharing</div></li>
                                <li className="flex items-start gap-3"><span className="text-teal-500 font-bold">✨</span> <div><strong>Dignity protected:</strong> Verification by proxy</div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
             {/* Brutal Present */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-center text-3xl font-bold text-gray-900 mb-12">The Brutal Present: Data That Demands Action</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="order-2 md:order-1">
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
                                <Stat value="60,000" label="Empty Hotel Rooms/Night in Vegas" />
                                <Stat value="$178M" label="Wasted Value Per Year (Vegas alone)" />
                                <Stat value="35M" label="Americans Without Access to Oral Surgery" />
                            </div>
                             <div className="mt-12 text-left bg-gray-100 p-8 rounded-lg border border-gray-200">
                                 <h3 className="font-bold text-xl text-gray-900">The UN Anomaly: When "Legitimate" Means Corrupt</h3>
                                 <p className="mt-4 text-gray-600">In 70 total UN rulings on sovereignty disputes, 69 found the challenger's claim arbitrary. Only 1 ruling found the claim "legitimate" - and that panel was later convicted of corruption.</p>
                                 <p className="mt-4 font-semibold text-gray-700 italic">When the system breaks its own rules to justify extraction, the entire architecture is corrupt.</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                             <img src="https://images.unsplash.com/photo-1560185012-9a803a3d53ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="An empty, sterile hotel hallway representing wasted resources" className="rounded-xl shadow-lg w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Protocol */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">The A² + B² = C² Protocol</h2>
                    <p className="mt-2 text-teal-600 font-mono text-xl">The Mathematical Foundation of Dignified Commerce</p>
                    <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-left">
                        <div className="p-6">
                            <h3 className="font-bold text-2xl font-mono">A² (Waste)</h3>
                            <p className="mt-2 text-gray-600">The perishable liability: empty hotel rooms, unsold plane seats, expiring rewards points. Assets that ROT if not used.</p>
                        </div>
                         <div className="p-6">
                            <h3 className="font-bold text-2xl font-mono">B² (Protocol)</h3>
                            <p className="mt-2 text-gray-600">The transformation mechanism: transparent matching, verified need, dignity-first validation. NO EXTRACTION.</p>
                        </div>
                         <div className="p-6">
                            <h3 className="font-bold text-2xl font-mono">C² (Healing)</h3>
                            <p className="mt-2 text-gray-600">The circulation outcome: surgical scholarships funded, tax deductions generated, dignity preserved. NEW VALUE CREATED.</p>
                        </div>
                    </div>
                     <div className="mt-12 bg-teal-50 border border-teal-200 p-8 rounded-lg max-w-3xl mx-auto">
                         <h4 className="font-bold text-xl text-teal-800">The Alchemy: Waste Becomes Asset</h4>
                         <p className="mt-2 text-teal-700">Before the Protocol: <span className="font-bold">100% liability</span>. After the Protocol: <span className="font-bold">50% healing value + 50% tax value = 100% circulation</span>. The waste doesn't disappear - it transforms.</p>
                     </div>
                </div>
            </section>

             {/* Human Proof */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div>
                            <div className="max-w-xl mx-auto md:mx-0">
                                <h2 className="text-3xl font-bold text-gray-900">Human Proof: Christopher's Journey</h2>
                                <p className="mt-4 text-lg text-gray-600">Theory becomes real when a human embodies it. Christopher is the living proof that A² + B² = C² works in the physical world.</p>
                            </div>
                            <div className="mt-8 grid grid-cols-1 gap-4 text-center md:text-left">
                                <div className="p-4">
                                    <h3 className="font-bold text-2xl font-mono text-red-600">A² <span className="text-gray-700 text-xl">(The Waste)</span></h3>
                                    <p className="mt-2 text-gray-600">Merkle Standard mines Bitcoin, generating massive heat previously wasted. Zero value, pure liability.</p>
                                </div>
                                <div className="p-4">
                                     <h3 className="font-bold text-2xl font-mono text-blue-600">B² <span className="text-gray-700 text-xl">(The Protocol)</span></h3>
                                    <p className="mt-2 text-gray-600">Christopher builds a greenhouse and routes the waste heat through it. A transparent mechanism, no extraction.</p>
                                </div>
                                <div className="p-4">
                                     <h3 className="font-bold text-2xl font-mono text-teal-600">C² <span className="text-gray-700 text-xl">(The Outcome)</span></h3>
                                    <p className="mt-2 text-gray-600">Greenhouse survives -20° winters, growing life-giving food. Waste heat becomes life support. The Protocol is proven.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                             <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Lush, green plants growing inside a greenhouse" className="rounded-xl shadow-2xl w-full h-full object-cover"/>
                        </div>
                    </div>
                     <blockquote className="mt-16 max-w-3xl mx-auto text-center text-xl italic text-gray-700 border-l-4 border-teal-500 pl-6">
                        "What was perishing now nourishes. What was liability now creates life. This is not theory. This is Christopher's greenhouse. This is the Protocol."
                    </blockquote>
                </div>
            </section>
            
            {/* Rainbow State */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center max-w-6xl">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">The Rainbow State: Soul-utions</h2>
                         <p className="mt-2 text-lg text-gray-600">When the Protocol becomes practice, something transcendent emerges:</p>
                         <div className="mt-8 grid sm:grid-cols-2 gap-8 text-left">
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900">🎨 What We Build</h3>
                                <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside text-sm">
                                    <li>Technical platforms that embody dignity</li>
                                    <li>Financial systems that circulate, not extract</li>
                                    <li>Legal structures that protect transformation</li>
                                    <li>Educational programs that honor resilience</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900">✨ What We Become</h3>
                                 <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside text-sm">
                                    <li>Warriors who face darkness with clarity</li>
                                    <li>Prophets who speak mathematical truth</li>
                                    <li>Architects who design abundance</li>
                                    <li>Guardians who protect the vulnerable</li>
                                </ul>
                            </div>
                         </div>
                    </div>
                    <div>
                         <img src="https://images.unsplash.com/photo-1627920448785-5b9b9b4f9b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Hands holding soil with a small green plant, symbolizing growth and hope." className="rounded-xl shadow-2xl w-full h-full object-cover"/>
                    </div>
                </div>
            </section>
            
            {/* Invitation */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold text-gray-900">The Invitation</h2>
                    <p className="mt-4 text-lg text-gray-600">This is not a business plan. This is a covenant. The mycelium is assembling. The Glass Box is being built. The Rainbow State awaits those brave enough to circulate.</p>
                    <div className="mt-8">
                         <button onClick={onPartnerClick} className="px-8 py-3 text-lg font-semibold text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-transform transform hover:scale-105 shadow-lg">
                            Become a Partner
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Manifesto;