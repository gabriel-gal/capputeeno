import { useFilter } from "@/contexts/FilterContext"
import ArrowIcon from "@/components/Icons/arrow"
import { PriorityType } from "@/@types/types"
import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    button {
        border: none;
        background: transparent;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        cursor: pointer;
        line-height: 22px;
        color: var(--text-dark);
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            margin-left: 5px;
        }
    }
`

const PriorityFilter = styled.ul`
    position: absolute;
    width: 200px;
    padding: 12px 16px;
    background: #FFF;
    box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
    border-radius: 4px;
    list-style: none;
    top: 100%;
    right: 8px;
    z-index: 2;

    li {
        color: var(--text-dark);
        line-height: 22px;
        font-weight: 400;
        font-size: 14px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }

`

export default function FilterOrder() {

    const { setPriority } = useFilter()
    const [open, SetOpen] = useState(false)
    const handleOpen = () => SetOpen(prev => !prev)

    const hadleUpdatePriority = (value: PriorityType) => {
        setPriority(value)
        SetOpen(false)
    }

    return (
        <Container>
            <button onClick={handleOpen}>
                Organizar por
                <ArrowIcon />
            </button>
            {open &&
                <PriorityFilter>
                    <li onClick={() => hadleUpdatePriority(PriorityType.NEWS)}>Novidades</li>
                    <li onClick={() => hadleUpdatePriority(PriorityType.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                    <li onClick={() => hadleUpdatePriority(PriorityType.MINOR_PRICE)}>Preço: Menor - maior</li>
                    <li onClick={() => hadleUpdatePriority(PriorityType.POPULARITY)}>Mais vendidos</li>
                </PriorityFilter>
            }
        </Container>
    )
}