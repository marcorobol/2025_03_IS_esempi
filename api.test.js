// ./api.test.js
const fetch = require("node-fetch-commonjs");
const url = "http://localhost:8080" //process.env.API_URL || "https://easy-lib.onrender.com/api/v1"

test('works with get', async () => {
    expect.assertions(1);
    expect( ( await fetch(url+"/api/v1/books") ).status ).toEqual(200)
}) // TODO: try up to here with the GET!

test('works with post', async () => {
    expect.assertions(1)
    var response = await fetch(url+'/api/v1/books', {
        method: 'POST', body: JSON.stringify({title: 'Testing with jest'}),
        headers: { 'Content-Type': 'application/json' }
    })
    expect( response.status ).toEqual(201)
})