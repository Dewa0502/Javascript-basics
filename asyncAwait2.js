function fetchPostData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Post Data fetched")
        },2000);

    });
}
function fetchCommentData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Comment data fetched.");
        },3000);
    });
}

async function getBlogData(){
    try{
        console.log("Fetching blog data");
        // const blogData = await fetchPostData();
        // const commentData = await fetchCommentData();
        const [blogData , commentData] = await Promise.all([fetchPostData(),fetchCommentData()]);
        console.log(blogData);
        console.log(commentData);
        
        console.log("fetch complete");
        
    }catch{
        console.log("Error Fetching Blog Data", error);
    }
}

getBlogData();