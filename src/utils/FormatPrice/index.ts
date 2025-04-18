export default function formatPrice(valor: number) {
    const valorReais = valor / 100
    return valorReais.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
}
