import React from "react";
import SearchInput from "../../../../molecules/SearchInput";
const SearchPosition = React.lazy(() => import('./SearchPosition'));
import { islaptop, islarg } from "../../../../../store/slices/screensizeslice";


export { SearchInput, SearchPosition, islaptop, islarg }