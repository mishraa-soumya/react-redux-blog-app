let nextCategoryId = 0
export const addCategory = (text) => ({
        type: 'ADD_CATEGORY',
        id: nextCategoryId++,
        text 
})