export function increase(idTodo) {  
    return {
        type: 'INCREASE_TODO',
        idTodo
    }
}

export function descrease(idTodo) {  
    return {
        type: 'DESCREASE_TODO',
        idTodo
    }
}

export function checkout() {  
    return {
        type: 'CHECKOUT'
    }
}

export function resetPizza() {  
    return {
        type: 'RESET'
    }
}