
// const loadPost = () =>{
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) =>{
//         // console.log(data);
//         displayPost(data)
//     })
// }

// // --------------------------array of object;-------------------------
// const displayPost = (posts) =>{

//     //1. get the parent ;
//     const postContainer = document.getElementById('post-container');
//     postContainer.innerHTML="";

//     // for(let i = 0; i< posts.length; i++){
//     //     console.log(posts[i])
//     // }

//     // for(const post of posts){
//     //     console.log(post)
//     // }
//     posts.forEach(post =>{
//          // 2.  create HTML element;
        
//         const li = document.createElement('li');
//         li.innerText=post.title;
//         li.classList.add('post-style')
//         // 3. append child to container;
//         postContainer.appendChild(li);
//     })
// }