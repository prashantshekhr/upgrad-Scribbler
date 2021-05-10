function showDeleteModal(card) {
    var modalDeletePost = document.getElementById("deletePostModal");
    var close_DeletePost = document.getElementsByClassName("close_deletePost")[0];
    var deletePostBtn = document.getElementById("delete-post-btn");
    var doNotDelete = document.getElementById("doNotDelete");

    modalDeletePost.style.display = "block";

    close_DeletePost.onclick = function () {
        modalDeletePost.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modalDeletePost) {
            modalDeletePost.style.display = "none";
        }
    }
    deletePostBtn.onclick = function () {
        modalDeletePost.style.display = "none";
        card.style.display = "none";
    }
    doNotDelete.onclick = function () {
        modalDeletePost.style.display = "none";
    }

}