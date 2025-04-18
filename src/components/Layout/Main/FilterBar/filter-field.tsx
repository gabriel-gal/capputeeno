"use client"
import { useFilter } from "@/contexts/FilterContext"
import { FilterType } from '@/@types/types'
import styled from "styled-components"

interface IFilterFieldProps {
    selected: boolean
}

const Container = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    list-style: none;

    @media (min-width: ${props => props.theme.phoneBP}) {
        gap: 30px;
    }

    @media (min-width: ${props => props.theme.desckTopBP}) {
        gap: 40px;
    }
`

const FilterItem = styled.li<IFilterFieldProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    color: var(--text-dark);
    cursor: pointer;
    border-bottom: ${props => props.selected ? '4px solid var(--color-oragen)' : ''};

    @media (min-width: ${props => props.theme.phoneBP}) {
        font-size: 14px;
        line-height: 20px;
    }

    @media (min-width: ${props => props.theme.desckTopBP}) {
        font-size: 16px;
        line-height: 22px;
    }
`

export default function FilterFiled() {

    const { type, setType } = useFilter()
    const hadleChangeType = (value: FilterType) => { setType(value) }

    return (
        <Container>
            <FilterItem
                selected={type === FilterType.ALL}
                onClick={() => hadleChangeType(FilterType.ALL)}
            >
                Todos os produtos
            </FilterItem>

            <FilterItem
                selected={type === FilterType.SHIRT}
                onClick={() => hadleChangeType(FilterType.SHIRT)}
            >
                Camisetas
            </FilterItem>

            <FilterItem
                selected={type === FilterType.MUG}
                onClick={() => hadleChangeType(FilterType.MUG)}
            >
                Canetas
            </FilterItem>
        </Container>
    )
}