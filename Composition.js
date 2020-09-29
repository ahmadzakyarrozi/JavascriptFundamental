// const template = "hh:mm:ss tt"

// const clockTime = template.replace("hh", "03")
// .replace("mm", "33")
// .replace("ss", "33")
// .replace("tt", "PM")

// console.log(clockTime);

// const both = date => appendAMPM(civilian(date))

//PROMISES

const getFakeMembers = count => new Promise ((resolve, reject)=>{
    const api = `https://api.randomuser.me/?nat=US&results=${count}`
    const request = new XMLHttpRequest()

    request.open('GET', api)
    request.onload = () =>
    (request.status === 200) ?
    resolve(JSON.parse(request.response).results) :
    reject (Error(request.statusText))

    request.onerror = (err) => reject(err)
    request.send()
})