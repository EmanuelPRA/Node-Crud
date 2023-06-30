import { useSearchParams } from "react-router-dom";

const AllArticles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
    return(
      <>
       <h1>Blog Articles</h1>
       {searchParams.get("theme")}
      </>
    );
  };
  
  export default AllArticles