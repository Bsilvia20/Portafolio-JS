document.getElementById('button').addEventListener('click',
usuarioGitHub)

function usuarioGitHub() {
    let usuario = document.getElementById('usuario').value

    let url = 'https://api.github.com/users/'+usuario
    fetch(url).then(res=>res.json()).then
    (data=>{
        if(data.message){
            document.getElementById('resultado').innerHTML = `
            <h3>Usuario no existente</h3>
            `
        }else{
            console.log(data)
            document.getElementById('resultado').innerHTML = `
            <img src="${data.avatar_url}"
            <p>Nome: ${data.name}</p>
            <p>Usuario: ${data.login}</p>
            <p>Link do repositório: ${data.repos_url}</p>
            `
        }
    }).catch(e=>{
        console.log(e);
    })
}