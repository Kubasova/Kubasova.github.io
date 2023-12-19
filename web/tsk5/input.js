const inputANode=document.querySelector('.js-input-a');
const selectNode=document.querySelector('.js-select-operation')
const btnResultNode=document.querySelector('.js-btn-result');
const outputNode=document.querySelector('.js-output');

btnResultNode.addEventListener('click',function() {
    const a=Number(inputANode.value);
    const operation=selectNode.value;

    const result=calculate({a,operation});

    outputNode.innerHTML=result;
    console.log(result);

});
