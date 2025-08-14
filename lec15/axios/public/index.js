// function to get comment data
// axios is a third party library which has to be included
console.log(axios)

function getComment(URL) {
    // how to send get request using axios
    axios.get(URL).then((data) => {
        console.log(data)
    })
    .catch(err => console.log(err))
}
getComment("https://jsonplaceholder.typicode.com/comments")

/* async function getComment(URL) {
    try {
        let data = await axios.get(URL);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
getComment("https://jsonplaceholder.typicode.com/comments"); */

// function to add new blog

addBlog("http://localhost:4444/blog", "First Blog", "First Blog Description")
async function addBlog(URL, title, description) {
    try {
        let newBlog = {
            title:title,
            description:description
        }
        let response = await axios.post(URL, newBlog)
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}
