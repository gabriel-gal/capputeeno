"use client"
import useProducts from "@/hooks/useProducts"
import ProductCard from "./product-card"
import styled from "styled-components"

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 256px);
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;

    @media (min-width: ${props => props.theme.phoneBP}){
        grid-template-columns: repeat(2, 256px);
    }

    @media (min-width:  ${props => props.theme.desckTopBP}){
        grid-template-columns: repeat(3, 256px);
    }


`

export default function ListProducts() {

    const { data } = useProducts()

    return (
        <Container>
            {data?.map((product) => (
                <ProductCard
                    key={product.id}
                    title={product.name}
                    image={product.image_url}
                    price={product.price_in_cents}
                    id={product.id}
                />
            ))}
        </Container>
    )
}