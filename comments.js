const loadComments = () =>{
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then( res => res.json())
    .then(data => {
        displayComments(data)
    })
}

const displayComments = (comments)=>{

    // get parent for set child to parent;
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML="";

    // get all object
    comments.forEach(comment =>{
       
        // 2. create HTML element;
        const commentCard = document.createElement('div');
        commentCard.className='comment-card'
        commentCard.innerHTML=`
            <p><span>postId: </span>${comment.postId}</p>

            <p><span>id: </span>${comment.id}</p>

            <p><span> name: </span>${comment.name}</p>

            <p><span> email: </span>${comment.email}</p>

            <p><span>body: </span>${comment.body}</p>
        `;

        // 3. append child to parent;
        commentsContainer.append(commentCard);
    })
}

