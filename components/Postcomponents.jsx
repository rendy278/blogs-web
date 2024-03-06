"use client";
import { useState, useEffect } from "react";
import PostsCard from "../components/Postcard";
import PostFilter from "../components/Postfilter";
import { posts } from "../constants/posts";

const Postcomponents = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filtered, setFiltered] = useState(posts);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [notFound, setNotFound] = useState(false);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 6);
  };

  useEffect(() => {
    if (activeCategory === "all") {
      setFiltered(posts);
    } else {
      const filteredPosts = posts.filter((post) =>
        post.tags?.includes(activeCategory)
      );
      setFiltered(filteredPosts);
    }
  }, [activeCategory]);

  useEffect(() => {
    const filteredPosts = filtered.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setNotFound(filteredPosts.length === 0);
  }, [filtered, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = filtered.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-fit">
      <form className="mx-auto flex justify-center gap-2 px-3">
        <input
          type="search"
          placeholder="Search"
          className="w-80 p-3 rounded-md outline-none placeholder:text-sky-400"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit" className="p-3 bg-sky-400 text-white rounded-md">
          Search
        </button>
      </form>
      <div className="wrapper">
        <PostFilter
          setFiltered={setFiltered}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {notFound ? (
          <p className="text-center text-red-500 my-4">
            Maaf, artikel yang Anda cari tidak ada.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
            {filteredPosts.slice(0, visiblePosts).map((post, index) => (
              <PostsCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <div className="py-10">
          {visiblePosts < filteredPosts.length && (
            <div className="text-center mt-4">
              <button
                onClick={loadMorePosts}
                className="bg-sky-400 hover:bg-sky-200 py-2 px-4 text-white rounded-md"
              >
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Postcomponents;
