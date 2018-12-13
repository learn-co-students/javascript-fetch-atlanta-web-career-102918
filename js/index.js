const app = "I don't do much.";

const token = '3a0f55d753c5d356c34920a7c74d15a08d4b4c57';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})

  .then(res => res.json())
  .then(json => console.log(json))
