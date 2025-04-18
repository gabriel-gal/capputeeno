import { useRouter } from "next/navigation"
import { styled } from "styled-components"
import BackIcon from "../Icons/back"

const Container = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    color: var(--secondary-text);
`

export function BtnBack() {

    const router = useRouter()
    const handleNavigate = () => { router.push("/") }

    return (
        <Container onClick={handleNavigate}>
            <BackIcon />
            Voltar
        </Container>
    )
}