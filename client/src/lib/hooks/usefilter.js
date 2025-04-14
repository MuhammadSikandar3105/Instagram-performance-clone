import { useState } from "react"

export const usefilter = (data = []) => {
    const [filteredData, setFilteredData] = useState(data)

    const applyFilters = (filters = []) => {
        if (!Array.isArray(filteredData)) {
            return 'Please use array for filter it.'
        }
        if (filters.length === 0) {
            return setFilteredData(data)
        }
        if (data.length === 0) {
            return []
        }
        const result = filteredData.filter((item) => {
            return filters.every((filter) => filter(item))
        })
        return setFilteredData(result)
    }

    return [filteredData, applyFilters]
};