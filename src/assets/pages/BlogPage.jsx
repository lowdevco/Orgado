import React from "react";
import Blog from "../components/Blog-components/Blog";
import SearchBox from "../components/common-components/SearchBox";

function BlogPage() {
  return (
    <div>
      <SearchBox />
      <Blog />
    </div>
  );
}

export default BlogPage;
