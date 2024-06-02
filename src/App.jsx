import * as React from "react";
import List from './List';
import './App.css'; 
//import Search from "./Search";

const API_ENDPOINT =
  "https://hn.algolia.com/api/v1/search?query=";

const initialStories = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clarck",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];
const App = () => {

  const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem('search') || 'React');
  const [stories, setStories] = React.useState(initialStories);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);
  const handleSearchSubmit = () => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
  };


  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );
    setStories(newStories);

  };

  React.useEffect(() => {
    if (!searchTerm) return;
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setIsLoading(false);
        setStories(result.hits);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      }, [url]);
  }, [searchTerm]);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchedStories = stories.filter((story) =>

    story.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Hacker Stories </h1>

        <InputWithLabel
          id="search"
          label="Search"
          value={searchTerm}
          onInputChange={handleSearch}
        >
          <strong>Search : </strong>
        </InputWithLabel>
        <br></br>
        <button
          type=
          "button"
          disabled={!searchTerm}
          onClick={handleSearchSubmit}
        >
       
          Submit
        </button>

        <p>
          Searching for <strong>{searchTerm}</strong>
        </p>
        <hr />
        {isError && <p>Something went wrong ...</p>}
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <List list={stories} onRemoveItem={handleRemoveStory} />
        )}

      </header>
    </div>
  );
};
const InputWithLabel = ({
  id,
  value,
  type = "texte",
  onInputChange,
  children,
}) => (
  <>
    <label htmlFor={id}>{children}</label>
    &nbsp;
    <input
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </>
);
export default App;
