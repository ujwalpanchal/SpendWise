// Handle the income form submission
document.getElementById('incomeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const incomeAmount = document.getElementById('incomeAmount').value;
    const incomeSource = document.getElementById('incomeSource').value;
    const incomeDate = document.getElementById('incomeDate').value;

    if (incomeAmount && incomeSource && incomeDate) {
        alert(`Income added: ${incomeAmount} from ${incomeSource} on ${incomeDate}`);
    } else {
        alert('Please fill out all the fields.');
    }
});

// Handle the want list form submission
document.getElementById('wantListForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const wantListItems = document.querySelectorAll('input[name="wantList"]:checked');
    const selectedItems = Array.from(wantListItems).map(item => item.value);

    if (selectedItems.length > 0) {
        alert(`You want to save for: ${selectedItems.join(', ')}`);
    } else {
        alert('Please select at least one item from the want list.');
    }
});
