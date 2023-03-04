axios.get("https://api.github.com/users/guilhermesouza48")

axios.get("https://api.github.com/users/guilhermesouza48")
.then(function (response) {
    console.log(response.data);
    console.log(response.data.login);
})
.catch(function (err) {
    console.log(err);
})