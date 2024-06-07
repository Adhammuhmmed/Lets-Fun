var logOtBtn = document.getElementById("logOutBtn");
var userName = JSON.parse(localStorage.getItem("userName"));
var postInput = document.getElementById("postInput");
var btnPost = document.getElementById("btnPost");
var alertMsg = document.getElementById("alertMsg");
postInput.setAttribute("placeholder", `You can post any thing now `);

// Welcome Message with username

document.querySelector(
  ".items"
).innerHTML = `<div class="item d-flex align-items-center p-3 my-3 w-75">
<img src="Images/post.svg" alt="" class="post-image me-4">

    <div class="post-text pe-5">
    Welcome ${userName}
</div>
</div>`;

var posts = [];

btnPost.addEventListener("click", function () {
  if (validPost() == true) {
    var userPost = {
      TextPost: postInput.value,
    };
    posts.push(userPost);
    postInput.value = null;
    showData();
  }
});

function showData() {
  var box = "";
  for (var i = 0; i < posts.length; i++) {
    box += `<div class="item d-flex align-items-center  p-3 my-4">
    <img src="Images/post.svg" alt="" class="post-image me-4">
  
        <div class="post-text pe-5">
        ${posts[i].TextPost}
</div>
    </div>`;
  }

  document.querySelector(".items").innerHTML = box;
}

logOtBtn.addEventListener("click", function () {
  window.location = "./index.html";
});

// Valid Post

function validPost() {
  if (postInput.value == "") {
    alertMsg.classList.remove("d-none");
    return false;
  } else {
    alertMsg.classList.add("d-none");
    return true;
  }
}
