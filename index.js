const url = "./instagramfalse.json";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((data) => {
      const Post = (document.getElementById("Post").innerHTML = data.Post);
      const Followers = (document.getElementById("Followers").innerHTML =
        data.Followers);
      const Following = (document.getElementById("Following").innerHTML =
        data.Following);
    });
  });
