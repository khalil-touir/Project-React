import * as React from "react";
import List from './List';
//import Search from "./Search";


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
  const [searchTerm,setSearchTerm] = React.useState(localStorage.getItem('search') || 'React');
  const [stories,setStories] = React.useState(initialStories);
  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      (story) => item.objectID !== story.objectID
    );
    setStories(newStories);

  };
  React.useEffect(()=> {
    localStorage.setItem('search',searchTerm);
  },[searchTerm]
  );
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const searchedStories =  stories .filter((story) =>

   story.title.toLowerCase ().includes(searchTerm.toLocaleLowerCase())
  );
  
  return (
    <div>
      <h1>My Hacker Stories </h1>

      <InputWithLabel
        id="search"
        label="Search"
         value={searchTerm}
          onInputChange={handleSearch}
          >
          <strong>Search : </strong>
          </InputWithLabel>
          
      <p>
      Searching for <strong>{searchTerm}</strong>
      </p>
      <hr />
      <List list ={searchedStories} onRemoveItem={handleRemoveStory} />
    </div>
  );};
  const InputWithLabel = ({ 
    id, 
    value, 
    type ="texte",
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
