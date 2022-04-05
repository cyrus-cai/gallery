import axios from 'axios'

// Want to use async/await? Add the `async` keyword to your outer function/method.
const gethitokoto = async () => {
  await axios(
    {
      method: 'get',
      url: 'https://v1.hitokoto.cn/',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then((response) => {
    console.log(response.data.hitokoto)
    const hitokoto = document.getElementById('hitokoto_text')
    hitokoto!.innerText = response.data.hitokoto
  })
}

export default gethitokoto