
import type { ProductsResponse } from '../types/Product'

const PRODUCTS_URL =
  '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export async function getProducts(): Promise<ProductsResponse> {
  console.log('Iniciando busca dos produtos...')

  const response = await fetch(PRODUCTS_URL)

  console.log('Status da requisição:', response.status)
  console.log('Tipo de conteúdo:', response.headers.get('content-type'))

  if (!response.ok) {
    throw new Error('Erro ao carregar produtos.')
  }

  const data: ProductsResponse = await response.json()

  console.log('Produtos recebidos:', data)

  return data
}
