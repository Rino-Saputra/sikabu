export const setAddPersonal = (payload) =>{
    return { type: 'ADD_PERSONAL_TICKET',payload}
}
export const setSubPersonal = (payload) =>{
    return { type: 'SUB_PERSONAL_TICKET',payload}
}
export const setAddGroup = (payload) =>{
    return { type: 'ADD_GROUP_TICKET',payload}
}
export const setSubGroup = (payload) =>{
    return { type: 'SUB_GROUP_TICKET',payload}
}
export const resetPersonalState = () =>{
    return { type: 'RESET_PERSONAL_PRICE'}
}
export const resetGroupState = () =>{
    return { type: 'RESET_GROUP_PRICE'}
}
export const setDate = (payload) =>{
    return { type: 'ADD_DATE',payload: payload}
}