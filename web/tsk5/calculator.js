const OPERATIONS ={
    apples:'a',
    bananas:'b',
    oranges:'o',
    kivi:'k'
};

function calculate({a,operation}){
    let result =null;

    switch(operation){
        case OPERATIONS.apples:
            result=a*37;
            break;

        case OPERATIONS.bananas:
            result =a*87;
            break;
            
        case OPERATIONS.oranges:
            result =a*42;
            break;
            
        case OPERATIONS.kivi:
            result =a*67;
            break;

        default:
            break;
    }


    return result;
}