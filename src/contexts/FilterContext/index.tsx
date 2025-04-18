"use client"
import { PropsWithChildren, createContext, useContext, useState } from "react"
import { FilterType, PriorityType } from "@/@types/types"

interface FilterContextType {
    search: string;
    page: number;
    type: FilterType;
    priority: PriorityType;
    setSearch: (value: string) => void;
    setPage: (value: number) => void;
    setType: (value: FilterType) => void;
    setPriority: (value: PriorityType) => void;
}

const FilterContext = createContext<FilterContextType>({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityType.NEWS,
    setSearch: () => {},
    setPage: () => {},
    setType: () => {},
    setPriority: () => {},
});

export function FilterContextProvider({ children }: PropsWithChildren) {

    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.ALL)
    const [priority, setPriority] = useState(PriorityType.NEWS)

    return (
        <FilterContext.Provider value={{
            search,
            page,
            type,
            priority,
            setSearch,
            setPage,
            setType,
            setPriority
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export function useFilter() { return (useContext(FilterContext)) }