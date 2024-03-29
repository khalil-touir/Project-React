import * as React from "react";
import List from './List';
import Search from "./Search";


const App = () => {
  const stories = [
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
  const [searchTerm,setSearchTerm] = React.useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
  <div>
    <h1>My Hacker Stories </h1>

    <Search onSearch={handleSearch} />
    <p>
      Searching for <strong>{searchTerm}</strong>
      </p>
    <hr />
    <List list ={stories} />
  </div>
  );};
export default App;
