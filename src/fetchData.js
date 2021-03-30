// http://localhost:3000/user/${userId}
// http://localhost:3000/user/${userId}/activity
// http://localhost:3000/user/${userId}/average-sessions
// http://localhost:3000/user/${userId}/performance

const fetchData =  async (id, option) => {
    let url = option ? `http://localhost:3000/user/${id}/${option}` : `http://localhost:3000/user/${id}`
    let response = await fetch(url)
    let data = await response.json()
    .catch((error) => console.error("Error: ", error))
    return data.data
}

export default fetchData