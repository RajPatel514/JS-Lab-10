

document.getElementById('fetch').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayData(data) {
    const tableBody = document.getElementById('outputData');
    tableBody.innerHTML = '';

    const row = document.createElement('tr');
    const celluserId = document.createElement('td');
    celluserId.textContent = data.userId;
    const cellId = document.createElement('td');
    cellId.textContent = data.id;
    const cellTitle = document.createElement('td');
    cellTitle.textContent = data.title;
    const cellBody = document.createElement('td');
    cellBody.textContent = data.body;

    row.appendChild(celluserId);
    row.appendChild(cellId);
    row.appendChild(cellTitle);
    row.appendChild(cellBody);
    tableBody.appendChild(row);

}
