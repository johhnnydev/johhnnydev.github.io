(function() {
  fetch("https://api.github.com/users/johhnnydev/repos", {
    mode: "cors"
  })
    .then(res => res.json())
    .then(res => {
      let index = 0;
      res.forEach(repo => {
        // console.log(repo.name, repo.url);
        let repoDiv = document.createElement("div");
        repoDiv.classList.add("repo");

        let repoIndex = document.createElement("span");
        repoIndex.innerText = index;
        index++;
        repoIndex.classList.add("repo-index");

        let repoUrl = document.createElement("a");
        repoUrl.setAttribute("href", repo.html_url);
        repoUrl.innerText = repo.name.toLowerCase();
        repoUrl.classList.add("repo-url");

        let repoDescription = document.createElement("p");
        repoDescription.innerText = repo.description;
        repoDescription.classList.add("repo-description");

        repoDiv.appendChild(repoIndex);
        repoDiv.appendChild(repoUrl);
        repoDiv.appendChild(repoDescription);

        document.querySelector("#repo-container").appendChild(repoDiv);
      });
    });
})();
