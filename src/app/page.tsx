"use client"
import ListProducts from "@/components/Layout/Main/ListProducts"
import FilterBar from "@/components/Layout/Main/FilterBar"
import { DefaultPage } from "@/components/DefaultPage"
import styled from "styled-components"

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function Home() {

    return (
        <DefaultPage>
            <Container>
                <FilterBar />
                <ListProducts />
            </Container>
        </DefaultPage>
    );
}
