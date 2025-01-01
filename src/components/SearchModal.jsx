import { useState } from "react";
import { getCollection } from "astro:content";

import { Search } from "lucide-react";

const posts = await getCollection("posts");

const SearchModal = () => {
    const [filteredPosts, setFilteredPosts] = useState(posts);

    const handleSearch = (query) => {
        if (query.trim() == "") {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(
                posts.filter((post) =>
                    post.data.title.toLowerCase().includes(query) ||
                    post.data.description.toLowerCase().includes(query)
                )
            );
        }
    };

    return (
        <>
            <div id="search-modal-backdrop" className="fixed top-0 left-0 z-40 w-screen h-screen bg-surface-900 opacity-90 backdrop-blur transition-all duration-500 animate-fade-out" />

            <div id="search-modal" className="fixed top-0 left-0 z-50 w-screen h-screen flex flex-col items-center justify-center gap-4 p-4 pointer-events-none transition-all duration-500 animate-offscreen-up">
                <div className="w-full max-w-2xl flex items-center gap-4 p-4 bg-surface-800 border-2 border-surface-700 rounded shadow-3xl pointer-events-auto">
                    <Search />
                    <input type="text" placeholder="Search For Something" className="w-full bg-transparent" onChange={e => handleSearch(e.target.value)} />
                </div>

                <div className="w-full max-w-2xl flex flex-col gap-4 pointer-events-auto">
                    {filteredPosts.length > 0 ? (
                        <div className="max-h-60 flex flex-col gap-2 p-2 bg-surface-800 border-2 border-surface-700 rounded shadow-3xl">
                            {filteredPosts.map(post => (
                                <a href={`/posts/${post.slug}`} key={post.slug} className="p-4 rounded-md hover:bg-surface-700 focus:bg-primary-800">
                                    <h3 className="text-lg font-bold">{post.data.title}</h3>
                                    <p className="text-sm">
                                        {post.data.description || "No description available."}
                                    </p>
                                </a>
                            ))}
                        </div>
                    ) : (
                        <div className="p-4 bg-surface-800 border-2 border-surface-700 rounded shadow-3xl">
                            <p className="text-center text-surface-300">No results found.</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchModal;
