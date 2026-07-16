import React, { useState } from "react";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {

  const [page, setPage] = useState("book");

  return (

    <div style={{ padding: "20px" }}>

      <h1>Blogger Application</h1>

      <button onClick={() => setPage("book")}>
        Books
      </button>

      <button onClick={() => setPage("blog")}>
        Blogs
      </button>

      <button onClick={() => setPage("course")}>
        Courses
      </button>

      <hr />

      {page === "book" && <BookDetails />}

      {page === "blog" && <BlogDetails />}

      {page === "course" && <CourseDetails />}

    </div>

  );
}

export default App;