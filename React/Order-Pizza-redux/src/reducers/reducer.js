const stateDefault = {
    todos: [
        {
            id: 1,
            name: 'Cold cuts',
            src: "http://gourmetparkcatering.com/wp-content/uploads/2016/02/COLD-CUTS-PLATTER.jpg",
            price: 5,
            quantity: 0
        },
        {
            id: 2,
            name: 'Peperoni',
            src: "https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1810/bbtreesubmission181000461/109286486-peperoni-pizza.jpg",
            price: 3.5,
            quantity: 0
        },
        {
            id: 3,
            name: 'Feta',
            src: "https://theviewfromgreatisland.com/wp-content/uploads/2018/03/baked-feta-with-lemon-and-olives-1934-March-24-2018.jpg",
            price: 2.5,
            quantity: 0
        },
        {
            id: 4,
            name: 'Mozzarella',
            src: "https://annam-gourmet.com/wp-content/uploads/2017/01/Tomato-Mozzarella-Salad.jpg",
            price: 1.5,
            quantity: 0
        },
        {
            id: 5,
            name: 'Swiss cheese',
            src: "https://cdn.shopify.com/s/files/1/0150/0232/products/Pearl_Valley_Swiss_Slices_36762caf-0757-45d2-91f0-424bcacc9892_grande.jpg?v=1534871055",
            price: 3,
            quantity: 0
        },
        {
            id: 6,
            name: 'Spices',
            src: "https://gigawattspices.com/wp-content/uploads/2019/04/Spices.jpg",
            price: 0.5,
            quantity: 0
        },
        {
            id: 7,
            name: 'Vegetables',
            src: "https://images-gmi-pmc.edge-generalmills.com/cf1d9e60-c045-4f50-80be-f0dc4727277e.jpg",
            price: 1.25,
            quantity: 0
        }
    ]
}

export function reducer(state=stateDefault, action) {
    let newState = {...state};
    let todos = state.todos;
    switch (action.type){
        case 'INCREASE_TODO':
            let indexIncrease = todos.findIndex((item)=> item.id == action.idTodo);
            let itemIncrease = {...newState.todos[indexIncrease]};
            itemIncrease.quantity ++;
            newState.todos[indexIncrease] = itemIncrease;
            console.log('itemIncrease', itemIncrease);
            console.log('newState', newState);
            return {
                todos: [...newState.todos]
            };
        case 'DESCREASE_TODO':
            let indexDescrease = todos.findIndex((item)=> item.id == action.idTodo);
            let itemDescrease = {...newState.todos[indexDescrease]};
            if (itemDescrease.quantity <= 0) {
                alert('The number must be greater than 0 ');
            } else itemDescrease.quantity --;
            newState.todos[indexDescrease] = itemDescrease;
            return {
            todos: [...newState.todos]
            };
        case 'CHECKOUT':
            alert('Checkout is success');
            newState.todos = stateDefault.todos;
            for (let i = 0; i < newState.todos.length; i++) {
                newState.todos[i].quantity = 0;
            }
            return {
                todos: [...newState.todos]
            };
        case 'RESET':
            newState.todos = stateDefault.todos;
            for (let i = 0; i < newState.todos.length; i++) {
                newState.todos[i].quantity = 0;
            }
            return {
                todos: [...newState.todos]
            }
        default: 
            return state;
    }    
    return state;
}