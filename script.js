
//Task 1 - Api interaction use GET requests
document.getElementById('fetch').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Unknown error, try again later.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayData(data);
        })
        .catch(error => console.error('Error fetching data:', error))
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

//Task 2 - api interaction using XMLHTTPrequest - XHR
document.getElementById('fetchxhr').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/2', true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                displayData(data);
            } else {
                console.error('Error fetching data:', xhr.statusText);
            }
        }
    };

    xhr.send();
});

//Task 3 - send data using POST
document.getElementById('createPost').addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('postTitle').value;
    const body = document.getElementById('postBody').value;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            title: title,
            body: body,
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error! Try again!');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                displayData(data);
            })
            .catch(error => console.error('Error posting data:', error))
    });
})

//Task 4 - update data using PUT
