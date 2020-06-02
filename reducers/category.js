import * as Types from '../constant/category';

var initialState = {
    categoriesList: null,
    totalCategories: 0,
    categoryEditting: null
}


var findIndex = (categories, id) => {
    var result = -1;
    categories.forEach((category, index) => {
        if (category.id === id) {
            result = index;
        }
    });
    return result;
}

const categories = (state = initialState, action) => {
    var { id, payload } = action;
    switch (action.type) {
        case Types.ADMIN_FETCH_CATEGORY:
            return {
                ...state,
                categoriesList: payload.items
            }
        case Types.ADMIN_DEL_CATEGORY_SUCCESS:
            return {
                ...state,
                categoriesList: state.categoriesList.filter(item => item.id != id)
            }
        case Types.ADMIN_DEL_CATEGORY_FALSE:
            return {...state}
        // case Types.ADMIN_ADD_CATEGORY:
        //     localStorage.setItem('categories', JSON.stringify(state))
        //     return state
        case Types.FETCH_CATEGORY:
            state = action.categories
            return state
        case Types.ADMIN_EDITTING_CATEGORY:
            return {
                ...state,
                categoryEditting: action.category
            }
        default:
            return state;
    }
};

export default categories;
