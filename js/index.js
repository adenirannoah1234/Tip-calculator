const sumButton = document.querySelector('.calculate');
const alert = document.querySelector('.alert');
const billStatus = document.querySelector('#bill')
const selectStatus = document.querySelector('#selecting')
const peopleStatus = document.querySelector('#People')
const clearButton = document.querySelector('.resetbutton')


sumButton.addEventListener('click', function (e) {
    e.preventDefault()
    if (billStatus.value === '' || selectStatus.value === '' || peopleStatus.value === '') {
        alert.style.display = 'block';
        alert.textContent = 'Please Fill in the fields!';
        setTimeout(function () {
            alert.style.display = 'none';
        }, 5000)
    } else if (!Number(billStatus.value) || !Number(selectStatus.value) || !Number(peopleStatus.value)) {
        alert.style.display = 'block';
        alert.textContent = 'Both fields must be numbers';
        setTimeout(function () {
            alert.style.display = 'none';
        }, 5000)
    } else {
        
        const totalTipAmount = (selectStatus.value / 100) * billStatus.value;

        console.log(totalTipAmount);

        const totalTipAmountPerPerson = totalTipAmount / peopleStatus.value;

        document.querySelector('.tipAnswer').textContent = totalTipAmountPerPerson;

        console.log(totalTipAmountPerPerson);

        const billAmountPerPerson = billStatus.value / peopleStatus.value

        console.log(billAmountPerPerson);

        document.querySelector('.totalAnswer').textContent = billAmountPerPerson + totalTipAmountPerPerson;

        
    }

    

})
clearButton.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(billStatus.value, selectStatus.value, peopleStatus.value);
    billStatus.value = '';
    selectStatus.value = '';
    peopleStatus.value = '';
    
})




// number of person = 2
// bill amount = $200
// tip percentage = 10 %

//     10 % * 200 = 20
// 20 / 2 = 10

// 200 / 2 = 100

