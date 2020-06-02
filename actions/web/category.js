import * as Types from '../../constant/category';

var initialCategory = [
]

export const actFetchCategoriesRequestWeb = () => {
    if(localStorage && localStorage.getItem('categories')) {
        var categories = JSON.parse(localStorage.getItem('categories'))
    }else {
        var categories = initialCategory
        localStorage.setItem('categories', JSON.stringify(categories))
    }

    return dispatch => {
        dispatch(actFetchCategories(categories));
    };
}

export const actFetchCategories = (categories) => {
    return {
        type : Types.FETCH_CATEGORY,
        categories
    }
}