export const queryCategories = `query allCategoriesSearch {
  allCategory{
    title
    id
  }
}`

export const queryProducts = `query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
  poc(id: $id) {
    products(categoryId: $categoryId, search: $search) {
      productVariants{
        title
        description
        imageUrl
        price
      }
    }
  }
}`
