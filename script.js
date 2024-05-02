const expenseform=document.getElementById('expenseform')
const expenselist=document.getElementById('expenselist')


expenseform.addEventListener('submit',function(e){
     e.preventDefault();
     const description=document.getElementById('description').value;

     const category=document.getElementById('category').value;

     const amount=document.getElementById('amount').value;
     
     if(description!=='' && category!=='' && !isNaN(amount)){
        const newRow=document.createElement('tr')
        newRow.innerHTML=`<td>${description}</td> 
                          <td>${category}</td>
                          <td>${amount}</td>`

        expenselist.appendChild(newRow)
     }

})
