const container = document.querySelector('.container')
const ul = document.createElement('ul')
const form = document.querySelector('form')

async function getData() {
    try {
        const res = await fetch('http://localhost:3000/users')
        const data = await res.json()

        console.log(data);

        data.forEach(element => {
            ul.innerHTML += `
            <li>${element.username}</li>
            `
        });

        container.appendChild(ul)
    } catch (error) {
        console.error(error);
    }
}

async function addUser(event) {
    try {
        event.preventDefault()
        const newUser = {
            username: event.target.username.value,
            password: event.target.password.value
        }

        const res = await fetch('http://localhost:3000/users/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })

        const data = await res.json()

        alert(data.msg)
    } catch (error) {
        console.error(error);
    }
}

form.addEventListener('submit', (event) => {
    addUser(event)
})

window.onload = () => {
    getData()
}