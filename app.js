const form = document.querySelector('form')
const nameFirm = document.querySelector('#name') 
const date = document.querySelector('#date') 
const amount = document.querySelector('#amount')
const tFoot = document.querySelector('tfoot')
const table = document.querySelector('table')
const newCl = document.querySelector('.me')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    newTab = document.createElement('tbody');
    row_2 = document.createElement('tr')
    row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = nameFirm.value;
    row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = date.value;
    row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = amount.value;
    row_2_data_4 = document.createElement('td');
    newBtn = document.createElement('button');
    newBtn.style.padding = '.8rem 3rem';
    newBtn.style.backgroundColor = 'green';
    newBtn.style.color = 'white';
    newBtn.style.borderRadius = '5px';
    newBtn.style.border = '1px solid green';
    newBtn.innerHTML = 'remove';
    row_2_data_4.appendChild(newBtn);
    newBtn.setAttribute('class', "me");
    
    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    row_2.appendChild(row_2_data_4);
    newTab.appendChild(row_2);
    table.appendChild(newTab);
    
    nameFirm.value = '';
    date.value = '';
    amount.value = '';

    if(tFoot.value === ""){
        tFoot.style.display = 'block';
    }else{
        tFoot.style.display = 'none';
    }
})

newCl.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('him')
})