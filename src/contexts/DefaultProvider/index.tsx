"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { FilterContextProvider } from "../FilterContext"
import { ThemeProvider } from "styled-components"
import { ReactNode } from "react"

interface IDefaultProviders { children: ReactNode }

const theme = {
    desckTopBP: "1170px",
    phoneBP: "700px",
}

export default function DefaultProvider({ children }: IDefaultProviders) {

    const client = new QueryClient()

    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
} 