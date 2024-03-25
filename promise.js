function promise(value){
     return new Promise((resolve,reject)=>{
        if(value%2==0)
        {
            resolve("resolved")
        }else{
            reject("rejected")
        }
    })
}

const res=promise()
res.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})


// // Two functions that return promises
// function fetchUserData() {
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         resolve({ name: "John", age: 30 });
//       }, 1000);
//     });
//   }
  
//   function fetchUserPosts() {
//     return new Promise((resolve,reject) => {
//       setTimeout(() => {
//         resolve(["Post 1", "Post 2", "Post 3"]);
//       }, 5000);
//     });
//   }
  
//   // Using Promise.all to wait for both promises to resolve
//   Promise.all([fetchUserData(), fetchUserPosts()])
//     .then((results) => {
//       const [userData, userPosts] = results;
//       console.log("User data:", userData);
//       console.log("User posts:", userPosts);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });

    // Two functions that return promises
function fetchUserData() {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        reject({ name: "John", age: 30 });
      }, 5000);
    });
  }

  function fetchUserPostss() {
        return new Promise((resolve,reject) => {
          setTimeout(() => {
            resolve(["Post 1", "Post 2", "Post 3"]);
          }, 7000);
        });
      }
  
  function fetchUserPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Failed to fetch user posts");
      }, 1000);
    });
  }
  
  // Using Promise.any to wait for either promise to resolve
  Promise.any([fetchUserData(), fetchUserPosts(),fetchUserPostss()])
    .then((result) => {
      console.log("Resolved:", result);
    })
    .catch((error) => {
      console.error("All promises were rejected:", error);
    });
  
  