var count = 0;
document.getElementById('likeBlog').addEventListener('click', function () {
    count++;
    document.getElementById('likeBlog').innerHTML = 'Liked!';
    if (count == 1) {
        document.getElementById('likeCount').innerHTML = count + ' person likes this!';
    } else {
        document.getElementById('likeCount').innerHTML = count + ' people have liked this!';
    }
});

function addComment(comment) {
    var templateBlock = '<div class="comment-list">' +
        '<p style="background-color: #fff; padding: 5px;">' + comment.value + '</p>' +
        '</div>';
    document.getElementById('addEventNames').innerHTML += templateBlock;
}

document.getElementById('addList').addEventListener('click', function () {
    document.getElementById('userComments').value = '';
});

function editPost(button) {
    var title = document.getElementById("post-title");
    var content = document.getElementById("post-data");

    if (title.contentEditable == "true" || content.contentEditable == "true") {
        title.contentEditable = "false";
        content.contentEditable = "false";
        button.innerHTML = "Edit " + '<i class="fa fa-edit"></i>';

    } else {
        title.contentEditable = "true";
        content.contentEditable = "true";
        button.innerHTML = "Save " + '<i class="fa fa-save"></i>';
    }

}