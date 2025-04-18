import { DefaultPage } from "@/components/DefaultPage"
import Product from "@/components/Layout/Product"

export default function ProductPage({ searchParams }: { searchParams: { id: string } }) {

    return (
        <DefaultPage>
            <Product searchParams={searchParams}/>
        </DefaultPage>
    );
}
