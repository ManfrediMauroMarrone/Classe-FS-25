export function hello(name){
    console.log(`Hello ${name}`);
}

export async function getData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

const numArr = [1,3,4,5,56,6,7,3,3,4,3]

export function total(){
    const sum = numArr.reduce((acc, curr) => acc + curr, 0)
    return sum
}
