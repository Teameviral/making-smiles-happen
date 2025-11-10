import React from 'react';
import { ArrowRightIcon, SearchIcon } from '../components/icons';

const blogPosts = [
    {
        id: 1,
        title: "The Ripple Effect: How One Donated Room Creates a Thousand Smiles",
        excerpt: "Discover the incredible journey of a single hotel room donation, from a simple act of generosity to a life-changing surgery and beyond. We trace the path of impact and show how our community works together.",
        author: "Kathryn D. Chitwood",
        date: "October 17, 2024",
        imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        featured: true,
    },
    {
        id: 2,
        title: "Hotels with Heart: Our Inaugural Partners Leading the Charge",
        excerpt: "Meet the pioneering hotels and casinos who were the first to join our mission. Learn why they chose to partner with us and how they are setting a new standard for corporate social responsibility in the hospitality industry.",
        author: "Avishek Bhattacharjee",
        date: "October 10, 2024",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: 3,
        title: "Beyond the Chair: Training the Next Generation of Oral Surgeons",
        excerpt: "Our scholarships do more than just fund surgeries—they're an investment in the future of healthcare. Explore how each 6-week cycle provides invaluable hands-on training for students and professionals.",
        author: "Dr. Emily Carter",
        date: "October 3, 2024",
        imageUrl: "https://images.unsplash.com/photo-1579684385127-6c1d73503f26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
];

const FeaturedPost = ({ post }) => (
     <div className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="overflow-hidden rounded-xl">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div>
            <p className="text-sm text-teal-600 font-semibold">{post.date}</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                <a href="#">{post.title}</a>
            </h2>
            <p className="mt-4 text-lg text-gray-600">{post.excerpt}</p>
            <p className="mt-4 text-sm font-medium text-gray-800">By {post.author}</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 font-semibold text-teal-600 group-hover:text-teal-800 transition-colors">
                Read Full Story <ArrowRightIcon />
            </a>
        </div>
    </div>
);

const PostCard = ({ post }) => (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <div className="h-48 overflow-hidden">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-6">
             <p className="text-xs text-teal-600 font-semibold">{post.date}</p>
            <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                <a href="#">{post.title}</a>
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">{post.excerpt}</p>
            <div className="mt-4 flex items-center justify-between">
                <p className="text-xs font-medium text-gray-800">By {post.author}</p>
                 <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 group-hover:text-teal-800 transition-colors">
                    Read More <ArrowRightIcon className="h-4 w-4" />
                </a>
            </div>
        </div>
    </div>
);

const Blog = () => {
    const featuredPost = blogPosts.find(p => p.featured);
    const recentPosts = blogPosts.filter(p => !p.featured);

    return (
        <div className="bg-gray-50">
            <header className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-6 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">From the Blog</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Stories of impact, community, and the journey to create a million smiles.
                    </p>
                    <div className="mt-8 max-w-lg mx-auto">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                                placeholder="Search for articles..."
                                aria-label="Search for articles"
                            />
                        </div>
                    </div>
                </div>
            </header>
            
            <main className="container mx-auto px-6 py-20">
                {/* Featured Post */}
                {featuredPost && (
                    <section className="mb-20">
                        <FeaturedPost post={featuredPost} />
                    </section>
                )}
                
                {/* Recent Posts */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Stories</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {recentPosts.map(post => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Blog;