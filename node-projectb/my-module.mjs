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

export const users = [
    {
      id: 1,
      username: 'user1',
      password: 'password1'
    },
    {
      id: 2,
      username: 'user2',
      password: 'password2'
    },
    {
      id: 3,
      username: 'user3',
      password: 'password3'
    },
    {
      id: 4,
      username: 'user4',
      password: 'password4'
    },
    {
      id: 5,
      username: 'user5',
      password: 'password5'
    }
  ];
