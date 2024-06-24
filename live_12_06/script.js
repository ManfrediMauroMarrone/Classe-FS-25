const container = document.querySelector(".container")
const ul = document.createElement("ul")


window.onload = async () => {
    try {
        const res = await fetch(`http://localhost:3000/users`)
        const data = await res.json()
        console.log(data);

        data.forEach((user) => {
            const li = document.createElement("li")
            li.textContent = user.username
            ul.appendChild(li)
        })
        container.appendChild(ul)

    } catch (error) {
        console.error(error);
    }
}

const form = document.querySelector(".form")
form.addEventListener("submit", async (event) => {
    try {
        event.preventDefault()
        const user = {
            username : event.target.username.value,
            passowrd : event.target.password.value
        }

        const res = await fetch(`http://localhost:3000/users/new`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        const data = await res.json()
        console.log(data);
        console.log(user);
    } catch (error) {
        console.error(error);
    }
})