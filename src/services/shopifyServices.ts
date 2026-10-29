import type { ProductsResponse } from "src/types/product";
import type { CartCreateResponse, CartFetchResponse, CartUpdateResponse, CartLinesAddResponse, CartRemoveResponse } from "src/types/cart";

const STORE_ENDPOINT: string = import.meta.env.VITE_STORE_URL;
const ACCESS_TOKEN: string = import.meta.env.VITE_ACCESS_TOKEN


const cartCreateQuery = (quantity: number, merchandiseId: string, sellingPlanId?: string) => `
mutation {
  cartCreate(
    input: {
      lines: [
        {
          quantity: ${quantity}
          merchandiseId: "${merchandiseId}"
          ${sellingPlanId ? `sellingPlanId: "${sellingPlanId}"` : ''}
        }
      ],
    }
  ) {
    cart {
      id
      createdAt
      updatedAt
      checkoutUrl
      lines(first: 10) {
        edges {
          node {
            id
            quantity
            merchandise {
              ... on ProductVariant {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
                product {
                  title
                  handle
                }
              }
            }
            cost {
              totalAmount {
                amount
                currencyCode
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
      }
    }
  }
}
`


const cartLinesFragment = `
  id
  checkoutUrl
  totalQuantity
  lines(first: 10) {
    edges {
      node {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            priceV2 {
              amount
              currencyCode
            }
            product {
              title
              handle
              images(first: 1) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
  cost {
    totalAmount {
      amount
      currencyCode
    }
    subtotalAmount {
      amount
      currencyCode
    }
  }
`

const fetchCartQuery = (cartId: string) => `
{
  cart(id: "${cartId}") {
    ${cartLinesFragment}
  }
}
`

const removeCartLinesQuery = (cartId: string, lineIds: string[]) => `
mutation {
  cartLinesRemove(
    cartId: "${cartId}"
    lineIds: [${lineIds.map(id => `"${id}"`).join(', ')}]
  ) {
    cart {
      ${cartLinesFragment}
    }
  }
}
`

const updateCartQuery = (cartId: string, lineId: string, quantity: number) => `
mutation {
  cartLinesUpdate(
    cartId: "${cartId}"
    lines: [{ id: "${lineId}", quantity: ${quantity} }]
  ) {
    cart {
      ${cartLinesFragment}
    }
  }
}
`
const addCartNote = (cartId: string, note: string) => `
  mutation {
  cartNoteUpdate(
    cartId: "${cartId}"
    note: "${note}" 
  ) {
    cart {
      id
      note
    }
  }
}
` 

const addCartLineQuery = (cartId: string, merchandiseId: string, quantity: number, sellingPlanId?: string) => `
mutation {
  cartLinesAdd(
    cartId: "${cartId}"
    lines: [{ merchandiseId: "${merchandiseId}", quantity: ${quantity}${sellingPlanId ? `, sellingPlanId: "${sellingPlanId}"` : ''} }]
  ) {
    cart {
      ${cartLinesFragment}
    }
  }
}
`


const sanaLymphProductQuery = `
          {
            products(first: 1, query:"title:SanaLymph") {
              edges {
                node {
                  id
                  title
                  description
                  handle
                  preorder: metafield(
                    namespace: "custom"
                    key: "preorder"
                  ) {
                    value  
                  }
                  release_date: metafield(
                    namespace: "custom"
                    key: "release_date"
                  ) {
                    value  
                  }
                  images(first: 1) {
                    edges {
                      node {
                        url
                        altText
                      }
                    }
                  }
                  variants(first: 1) {
                    edges {
                      node {
                        id
                        title
                        quantityAvailable
                        availableForSale
                        price {
                          amount
                          currencyCode
                        }
                      }
                    }
                  }
                  sellingPlanGroups(first: 5) {
                    edges {
                      node {
                        sellingPlans(first: 5) {
                          edges {
                            node {
                              id
                              name
                              priceAdjustments {
                                adjustmentValue {
                                  ... on SellingPlanPercentagePriceAdjustment {
                                    adjustmentPercentage
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `


export async function fetchProductData(): Promise<ProductsResponse> {
   const response = await fetch(STORE_ENDPOINT + '/api/2024-01/graphql.json',
       {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
               "X-Shopify-Storefront-Access-Token": ACCESS_TOKEN
           },
           body: JSON.stringify({ query: sanaLymphProductQuery })
       });
   return response.json() as Promise<ProductsResponse>;
}

async function shopifyFetch(query: string) {
    const response = await fetch(STORE_ENDPOINT + '/api/2024-01/graphql.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN,
        },
        body: JSON.stringify({ query }),
    });
    return response.json();
}

export async function createCart(merchandiseId: string, quantity: number, sellingPlanId?: string): Promise<CartCreateResponse> {
    return shopifyFetch(cartCreateQuery(quantity, merchandiseId, sellingPlanId));
}

export async function fetchCart(cartId: string): Promise<CartFetchResponse> {
    return shopifyFetch(fetchCartQuery(cartId));
}

export async function updateCart(cartId: string, merchandiseId: string, quantity: number): Promise<CartUpdateResponse> {
    return shopifyFetch(updateCartQuery(cartId, merchandiseId, quantity));
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<CartRemoveResponse> {
    return shopifyFetch(removeCartLinesQuery(cartId, lineIds));
}

export async function addLineToCart(cartId: string, merchandiseId: string, quantity: number, sellingPlanId?: string): Promise<CartLinesAddResponse> {
    return shopifyFetch(addCartLineQuery(cartId, merchandiseId, quantity, sellingPlanId));
}

export async function addNoteToCart(cartId: string, content: string){
  return shopifyFetch(addCartNote(cartId, content))
}
