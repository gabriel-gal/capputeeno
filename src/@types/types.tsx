export enum FilterType {
    ALL = 'all',
    SHIRT = 't-shirts',
    MUG = 'mugs',
  }
  
  export enum PriorityType {
    POPULARITY = 'popularity',
    NEWS = 'newest',
    MINOR_PRICE = 'lower-price',
    BIGGEST_PRICE = 'higher-price',
  }

export type Product = {
    id: string
    name: string
    price_in_cents: number
    image_url: string
    description: string
    category: string
}

export type ProductFetchResponse = {
    Product: Product
}

export type ProductsFetchResponse = {
    allProducts: Product[]
}

export type Products = {
    id: string,
    name: string,
    price_in_cents: number,
    image_url: string,
    description?: string,
    category?: string,
}


export interface ProductInCart extends Products {
    quantity: number
}