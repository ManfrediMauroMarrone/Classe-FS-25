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

export const arr = [1,2,3,4,5,6,67]