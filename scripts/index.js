var createPostBtn = document.getElementById("create-post-button");
var modalCreatePost = document.getElementById("createPostModal");
var close_CreatePost = document.getElementsByClassName("close_createPost")[0];

createPostBtn.onclick = function () {
    modalCreatePost.style.display = "block";
}
close_CreatePost.onclick = function () {
    modalCreatePost.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modalCreatePost) {
        modalCreatePost.style.display = "none";
    }
}