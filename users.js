
const loadUsers = () =>{
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
    .then(res => res.json())
    .then(data => {
       displayUsers(data)
    })
}

const displayUsers = (users)=>{
    //1. get parent;
    const usersContainer = document.getElementById('users-container');
    usersContainer.innerHTML ="";

    users.forEach(user => {
        
        // create child;
        const userCard = document.createElement('div');
        userCard.className='user-card';
        userCard.innerHTML=`
           <p><span>id:</span> ${user.id}</p>
            <p><span>name:</span> ${user.name}</p>
            <p><span>username:</span> ${user.username}</p>
            <p><span>email:</span> ${user.email}</p>

            <dl><span>address:</span>

                <dd><span>street:</span> ${user.address.street}</dd>
                <dd><span>suite:</span> ${user.address.suite}</dd>
                <dd><span>city:</span> ${user.address.city}</dd>
                <dd><span>zipcode:</span> ${user.address.zipcode}</dd>

                <dd>
                    <dl><span>geo:</span>
                        <dd><span>lat:</span> ${user.address.geo.lat}</dd>
                        <dd><span>Ing:</span> ${user.address.geo.Ing}</dd>
                    </dl>
                </dd>
            </dl>

            <p><span>phone:</span> ${user.phone}</p>
            <p><span>website:</span> ${user.website}</p>

            <dl><span>company:</span>
                <dd><span>name:</span> ${user.company.name}</dd>
                <dd><span>catchPhrase:</span> ${user.company.catchPhrase}</dd>
                <dd><span>bs:</span> ${user.company.bs}</dd>
            </dl>
        `

        // 3. append child;
        usersContainer.append(userCard)
    });

}