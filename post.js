
const loadPost = () =>{
    const url="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then( response => response.json())
    .then(data => {
        postDisplay(data)
    })
}
 

    const postDisplay = (posts) =>{

        // 1. get parent;
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML="";

       posts.forEach(post => {
        
        // 2. create a child ;
        const child = document.createElement('div');
        child.className='post-card'
        
        child.innerHTML=`
            <p><span>body:</span> ${post.body}</p>
             <h3><span>id:</span> ${post.id}</h3>
             <p><span>title:</span> ${post.title}</p>
             <h3><span>userId:</span> ${post.userId}</h3>
        `
      

        //3. append child to postContainer;
        postContainer.appendChild(child);
        
       });
    }
