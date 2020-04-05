(function () {
  fetch("./myrepos.json")
    .then((response) => response.json())
    .then((json) => {
      let sorted = json.sort(function (a, b) {
        return (
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
      });
      sorted.map(function (j) {
        let articleDiv = document.createElement("div");
        articleDiv.classList.add("article");

        let articleDate = document.createElement("p");

        let monthOptions = { month: "long" };
        let month = new Intl.DateTimeFormat("en-US", monthOptions).format(
          new Date(j.created_at)
        );
        let yearOptions = { year: "numeric" };
        let year = new Intl.DateTimeFormat("en-US", yearOptions).format(
          new Date(j.created_at)
        );

        articleDate.innerText = year + "/" + month;
        articleDate.classList.add("article-date");

        let repoUrl = document.createElement("a");
        repoUrl.setAttribute("href", j.html_url);
        repoUrl.innerText = j.name.toLowerCase();

        articleDiv.appendChild(articleDate);
        articleDiv.appendChild(repoUrl);

        document.querySelector("#articles").appendChild(articleDiv);
      });
    });
})();
