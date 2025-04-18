import { ProductFetchResponse } from "@/@types/types"
import { useQuery } from "@tanstack/react-query"
import { products } from "@/lib/products"

const fetchProduct = async (productId: string): Promise<ProductFetchResponse> => {
    const product = products.find(p => p.id === productId)

    if (!product) {
        throw new Error('Produto não encontrado')
    }

    return { Product: product }
}

export default function useProduct(id: string) {
    const { data, isLoading, error } = useQuery({
        queryFn: () => fetchProduct(id),
        queryKey: ['product', id],
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    })

    return {
        data: data?.Product,
        isLoading,
        error
    }
}