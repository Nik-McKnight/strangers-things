import React from "react";

export default function Search(
  postList,
  searchTerm,
  setSearchTerm,
  filterPosts
) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        filterPosts(postList, searchTerm);
      }}
    >
      <input
        placeholder="Search"
        value={searchTerm}
        required={false}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
