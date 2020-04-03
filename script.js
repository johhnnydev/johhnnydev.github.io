(function() {
  fetch("./myrepos.json")
    .then(response => response.json())
    .then(json => {
      let index = 0;
      json.map(function(j) {
        let repoDiv = document.createElement("div");
        repoDiv.classList.add("repo");

        let repoIndex = document.createElement("span");
        repoIndex.innerText = index;
        index++;
        repoIndex.classList.add("repo-index");

        let repoUrl = document.createElement("a");
        repoUrl.setAttribute("href", j.html_url);
        repoUrl.innerText = j.name.toLowerCase();
        repoUrl.classList.add("repo-url");

        let repoDescription = document.createElement("p");
        repoDescription.innerText = j.description;
        repoDescription.classList.add("repo-description");

        repoDiv.appendChild(repoIndex);
        repoDiv.appendChild(repoUrl);
        repoDiv.appendChild(repoDescription);

        document.querySelector("#repo-container").appendChild(repoDiv);
      });
    });
})();
