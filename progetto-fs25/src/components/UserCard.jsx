function UserCard({user}){
    return (
        <div className="card" key={user.id}>
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
        </div>
    )
}

export default UserCard;