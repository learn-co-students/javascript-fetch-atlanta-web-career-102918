const app = "I don't do much.";

const token = 'f47b0e329bb48aa37eb423267e4471dd076021a4';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
