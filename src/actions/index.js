let nextCategoryId = 1
export const addCategory = (text) => ({
        type: 'ADD_CATEGORY',
        id: nextCategoryId++,
        text 
})