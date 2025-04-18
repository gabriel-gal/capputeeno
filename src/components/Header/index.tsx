"use client"
import { useFilter } from "@/contexts/FilterContext"
import { Saira_Stencil_One } from 'next/font/google'
import { CartControl } from "./cart-control"
import { InputWSearchIcon } from "./input"
import styled from "styled-components"

const saira_stencil = Saira_Stencil_One({
    subsets: ['latin'],
    weight: ['400'],
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px; 
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }

    @media (min-width: ${props => props.theme.phoneBP}) {
        padding: 16px 100px;
    }

    @media (min-width: ${props => props.theme.desckTopBP}) {
        padding: 20px 160px;
    }
`
const Logo = styled.a`
    color: var(--logo-color);
    font-size: 20px;
    line-height: 150%;
    text-decoration: none;

    @media (min-width: ${props => props.theme.phoneBP}) {
        font-size: 30px;
    }

    @media (min-width: ${props => props.theme.desckTopBP}) {
        font-size: 40px;
    }
`

export default function Header() {

    const { search, setSearch } = useFilter()

    return (
        <TagHeader>
            <Logo className={saira_stencil.className} href="/">Capputeeno</Logo>
            <div>
                <InputWSearchIcon
                    value={search}
                    hadleChange={setSearch}
                    placeholder="Procurando por algo específico?" />
                <CartControl />
            </div>
        </TagHeader>
    )
}