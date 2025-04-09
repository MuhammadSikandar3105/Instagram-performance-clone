import React from "react";
import SearchInput from "../../../../molecules/SearchInput";
const NotifiPosition = React.lazy(() => import('./NotifiPosition'));
import { islaptop, islarg } from "../../../../../store/slices/screensizeslice";


export { SearchInput, NotifiPosition, islaptop, islarg }