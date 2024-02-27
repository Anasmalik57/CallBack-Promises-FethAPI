/* Create an asynchronous function that retrieves data from two different API endpoints: "https://jsonplaceholder.typicode.com/todos/1" and "https://jsonplaceholder typicode.com/posts/1". The first API returns a to-do task, while the second API provides post details. The function should combine the results from both APIs and log them as an object, where the keys are "todo" and "post", and the corresponding values are the responses from the respective APIs */

async function TwoEndpointds(){
    try{
        const response1 = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data1 = response1.json();

    const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data2 = await response2.json();

    const combinedData = {todo: data1, post: data2};

    console.log(combinedData);
    }
    catch(err){
        console.log("An error Occured", err);
    }
}

TwoEndpointds()