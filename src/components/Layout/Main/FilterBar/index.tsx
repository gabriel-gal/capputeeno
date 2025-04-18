"use client"
import FilterFiled from "./filter-field"
import FilterOrder from "./filter-order"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`

export default function FilterBar() {
    return (
        <Container>
            <FilterFiled />
            <FilterOrder />
        </Container>
    )
}