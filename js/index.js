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
        alert.textContent = 'All fields must be numbers';
        setTimeout(function () {
            alert.style.display = 'none';
        }, 5000)
    } else {
        
        const totalTipAmount = (selectStatus.value / 100) * billStatus.value;

        console.log(totalTipAmount);

        const totalTipAmountPerPerson = totalTipAmount / peopleStatus.value;

        document.querySelector('.tipAnswer').textContent = totalTipAmountPerPerson.toFixed(2);

        console.log(totalTipAmountPerPerson);

        const billAmountPerPerson = billStatus.value / peopleStatus.value;

        console.log(billAmountPerPerson);

        document.querySelector('.totalAnswer').textContent = (billAmountPerPerson + totalTipAmountPerPerson).toFixed(2);


        
    }

    

})
clearButton.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(billStatus.value, selectStatus.value, peopleStatus.value);
    billStatus.value = '';
    selectStatus.value = '';
    peopleStatus.value = '';
})





