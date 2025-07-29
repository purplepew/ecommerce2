export const query = {
    products: `
    query {
        products {
            id
            title
            price
            image
            category
        }
    }
    `,
    productsByCategory: `
    query ($category: String!) {
        productsByCategory(category: $category) {
            id
            title
            price
            image
            category
        }
    }
    `
}