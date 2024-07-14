import "./SearchBar.css";
const SearchBar = () => {
  return (
    <form className="search" onSubmit="{handleSubmit}">
      <input
        type="text"
        className="search__input"
        placeholder="Search..."
        value="{query}"
        onChange="{handleInputChange}"
      />
      {/* <button type='submit' className='search__button'>
        Search
      </button> */}
    </form>
  );
};

export default SearchBar;
