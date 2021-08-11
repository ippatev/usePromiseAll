async function usePromiseAll() {
    try {
        const arr = await Promise.all([fetch("https://api.github.com/users/sudarshansb143"),fetch("https://api.github.com/users/ippatev")])
        for(let i = 0; i < arr.length; i++) {
          arr[i].json().then(({name}) => {
            console.log(name)
          })
        }
    } catch (error) {
        console.log("error ", error.message)
    }
}
usePromiseAll();