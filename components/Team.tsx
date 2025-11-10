import React from 'react';

const TeamMemberCard: React.FC<{ name: string; title: string; imageUrl: string; }> = ({ name, title, imageUrl }) => (
    <div className="text-center flex flex-col items-center">
        <img
            className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg border-4 border-white bg-gray-200"
            src={imageUrl}
            alt={`Portrait of ${name}`}
            loading="lazy"
        />
        <h3 className="mt-6 text-xl font-bold text-gray-900">{name}</h3>
        <p className="mt-1 text-teal-600 font-medium">{title}</p>
    </div>
);


const Team: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        The passionate architects behind the mission to make smiles happen.
                    </p>
                </div>
                <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">
                    <TeamMemberCard
                        name="Kathryn D. Chitwood"
                        title="Founder & Chief Structural Architect"
                        imageUrl="https://ui-avatars.com/api/?name=Kathryn+D+Chitwood&background=0d9488&color=fff&size=256"
                    />
                    <TeamMemberCard
                        name="Avishek Bhattacharjee"
                        title="Co-Founder & Chief Technical Architect"
                        imageUrl="https://ui-avatars.com/api/?name=Avishek+Bhattacharjee&background=0f766e&color=fff&size=256"
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;