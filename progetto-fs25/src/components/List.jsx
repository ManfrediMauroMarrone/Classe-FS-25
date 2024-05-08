import { useEffect, useState, useContext} from "react";
import './List.css'
import UserCard from "./UserCard";
import LanguageContext from "../LanguageContext";

function List() {
    const [usersArr, setUsersArr] = useState()
    const [value, setValue] = useState()
    const websiteLang = useContext(LanguageContext)

    async function getData(){
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await res.json()
            setUsersArr(users)
            console.log(users);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getData()
    }, [value])

  return (
    <div>
      <h2>Componente List</h2>
      <h3>Lingua sito = {websiteLang}</h3>
      <button onClick={() =>  setValue('ciao')}>Update</button>
      {usersArr ? usersArr.map((user) => {
        return <UserCard key={user.id} user={user}/>
      }): <p>Caricamento...</p>}
    </div>
  );
}

export default List;
