

function renderUser(users) {
    const newContainer=document.getElementById('user-list')
    users.forEach(user => {
        const h2 = document.createElement('h2')
        h2.innerHTML=user.name;
        newContainer.appendChild(h2);
    })
}

document.addEventListener('DOMContentLoaded', function() {
let form = document.querySelector('#github-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const search = document.getElementById("search").value;
    const originalName = search.split(' ').join('');
    return fetch(`https://api.github.com/search/users?q=${search}`, {
        method: "get",
        headers: {
            "Accept": "application/vnd.github.v3+json"
        },
        body: JSON.stringify()
        
    })
    .then(result => result.json())
    .then((data) => {
        console.log(data)
        let final;
        for (let i = 0; i<20; i++) {
            final = final + `<img src="${data.items[i].avatar_url}"/> 
            <h1>${data.items[i].login}</h1>
            <a target="_blank" href="https://www.github.com/${originalName}"><h1>${data.items[i].url}</h1></a>`
        }
        document.getElementById("result").innerHTML = final;
    })
})   
})