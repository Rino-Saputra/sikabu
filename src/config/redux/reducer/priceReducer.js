const initialPrice = {
    personalPrice: 15000,
    groupPrice: 13000,
    personalQuantity: 0,
    groupQuantity: 0,
    personalTotalPrice: 0,
    groupTotalPrice: 0,
    variant: 'Regular',
    date: 'Travel Date',
    grandTotal: 0
}

const priceReducer = ( state=initialPrice, action) => {

    switch(action.type){
        case 'RESET_PERSONAL_PRICE':
            return{
                ...state,
                personalQuantity: 0,
                grandTotal: state.grandTotal - state.personalTotalPrice,
                personalTotalPrice: 0,
            }

        case 'RESET_GROUP_PRICE':
            return{
                ...state,
                groupQuantity: 0,
                grandTotal: state.grandTotal - state.groupTotalPrice,
                groupTotalPrice: 0,
            }
        
        case 'ADD_PERSONAL_TICKET':
            return{
                ...state,
                personalQuantity: state.personalQuantity + 1,
                personalTotalPrice: state.personalTotalPrice + action.payload,
                grandTotal: state.grandTotal + action.payload
            }

        case 'SUB_PERSONAL_TICKET':
            return{
                ...state,
                personalQuantity: state.personalQuantity - 1,
                personalTotalPrice: state.personalTotalPrice + action.payload, //-integr from payload
                grandTotal: state.grandTotal + action.payload   //-integr from payload
            }
        case 'ADD_GROUP_TICKET':
            return{
                ...state,
                groupQuantity: state.groupQuantity + 1,
                groupTotalPrice: state.groupTotalPrice + action.payload,
                grandTotal: state.grandTotal + action.payload
            }
        case 'SUB_GROUP_TICKET':
            return{
                ...state,
                groupQuantity: state.groupQuantity - 1,
                groupTotalPrice: state.groupTotalPrice + action.payload,//-integerfrom payload
                grandTotal: state.grandTotal + action.payload   //-integr from payload
            }
        
        case 'ADD_DATE':
            return{
                ...state,
                date: action.payload
            }
        
    }
    return state;
}

export default priceReducer