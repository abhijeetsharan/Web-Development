// async function getData() {
//     setTimeout(function() {
//         console.log('Data received');
//     }, 3000);
// }

// getData();

async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.cpm/todos/1');
    let data = await response.json();
    console.log(response);
}