import { createContext, useState } from 'react';

const SearchContext = createContext();
const initState = {
    min: 0,
    max: 999999,
    mainCategoryId: [],
    subCategoryId: [],
};

function SearchContextProvider({ children }) {
    const [search, setSearch] = useState(initState);
    return (
        <SearchContext.Provider value={{ search, setSearch, initState }}>
            {children}
        </SearchContext.Provider>
    );
}
export default SearchContextProvider;

export { SearchContext };
