import { ChangeEvent } from "react"
import { styled } from "styled-components"
import { ProductInCart } from "@/@types/types"
import { DeleteIcon } from "../../Icons/delete"
import formatPrice from "@/utils/FormatPrice"
import Image from "next/image"

interface CartItemProps {
    product: ProductInCart
    handleUpdateQuantity(id: string, quantity: number): void
    handleDelete(id: string): void
}

const Container = styled.li`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    height: auto;

    border-radius: 8px;
    background-color: white;

    > img {
        border-end-end-radius: 10px;
        border-end-start-radius: 10px;
    }

    > div {
        display: flex;
        width: 100%;
        height:100%;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        padding: 16px 24px;
        line-height: 150%;
        color: var(--text-dark-2);

        div {
            button {
                top: 16px;
                right: 24px;

                border: none;
                background: transparent;
                cursor: pointer;
            }
            h4 {
                font-weight: 300;
                font-size: 20px;
            }
        }

        p {
            font-weight: 400;
            font-size: 12px;
            max-height: 50%;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;

            span {
                font-weight: 600;
                font-size: 16px;
                color: var(--shapes-dark);
            }
        }
    }
    
    @media (min-width: ${props => props.theme.phoneBP}) {
        flex-direction: row;
        > img {
        border-end-end-radius: 0px;
        border-end-start-radius: 0px;
    }
    }
`

const SelectQuantity = styled.select`
    padding: 8px;
    border: 1.5px solid var(--border-color);
    border-radius: 8px;
    background-color: var(--bg-secondary);
    color: var(--text-dark);
    font-weight: 400;
    font-size: 16px;
`

export function CartItem({ product, handleUpdateQuantity, handleDelete }: CartItemProps) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        handleUpdateQuantity(product.id, Number(e.target.value))
    }
    return (
        <Container>
            <Image
                alt={product.name}
                width={256}
                height={210}
                src={product.image_url}
            />
            <div>
                <div>
                    <h4>{product.name}</h4>
                    <button onClick={() => handleDelete(product.id)} aria-label="Deletar">
                        <DeleteIcon />
                    </button>
                </div>
                <p>{product.description}</p>
                <div>
                    <SelectQuantity value={product.quantity} onChange={handleChange}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </SelectQuantity>
                    <span>{formatPrice(product.price_in_cents)}</span>
                </div>
            </div>
        </Container>
    )
}