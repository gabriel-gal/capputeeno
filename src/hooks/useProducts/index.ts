import { FilterType, PriorityType, Product, ProductsFetchResponse } from "@/@types/types"
import { useFilter } from "@/contexts/FilterContext"
import { useQuery } from "@tanstack/react-query"
import { useDeferredValue } from "react"
import { products } from "@/lib/products"

function sortProducts(products: any, priority: PriorityType) {

    if (priority === "higher-price") {
        return products.sort((a: any, b: any) => b.price_in_cents - a.price_in_cents)
    }
    if (priority === "lower-price") {
        return products.sort((a: any, b: any) => a.price_in_cents - b.price_in_cents)
    }
    if (priority === "newest") {
        return products.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    }
    return products
}

const fetchFilteredProducts = async (type: FilterType, priority: PriorityType, search: string): Promise<ProductsFetchResponse> => {
    let filtered = [...products]

    if (type !== FilterType.ALL) {
        filtered = filtered.filter(p => p.category === type)
    }

    if (search) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    }

    filtered = sortProducts(filtered, priority)

    return { allProducts: filtered }
}

export default function useProducts() {
    const { type, priority, search } = useFilter()
    const searchDefer = useDeferredValue(search)

    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchFilteredProducts(type, priority, searchDefer),
        queryKey: ['products', type, priority, searchDefer],
        staleTime: 1000 * 60 * 5,
    })

    return {
        data: data?.allProducts,
        isLoading,
        error
    }
}
