function loadRepos() {
   fetch('https://api.github.com/users/testnakov/repos')
       .then(response => {
          if (response.ok === false) {
             throw new Error(`${response.status} ${response.statusText}`)
          }
          return response.text()
       })
       .then(data => console.log(data))
       .catch(error => console.log(error));
}