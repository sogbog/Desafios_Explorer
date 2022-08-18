import { GitUser } from "./GithubUser.js"

//parte de manipulacao de dados
export class Favorites{
    constructor(root){
        this.root = document.querySelector(root)
        this.load()
    }

    load(){
        this.entries = JSON.parse(localStorage.getItem('@github-users:')) || []
    }

    save(){
        localStorage.setItem('@github-users:', JSON.stringify(this.entries))
    }

    async addFav(username){

        try{
            
            const userExists = this.entries.find(entry => entry.login === username)
            if(userExists){
                throw new Error('Esse usuário ja está adicionado')
            }
            
            const user = await GitUser.search(username)

            if(user.login === undefined){
                throw new Error('Usuário não encontrado')
            }

            this.entries = [user, ...this.entries]
            this.updateView()
            this.save()

        } catch (error){
            alert(error.message)
        }
    }

    delete(user){
        this.entries = this.entries.filter(entry => entry.login !== user.login)
        this.updateView()
        this.save()
    }

}




//parte de vizualizacao e eventos HTML
export class TableRender extends Favorites{
    constructor(root){
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        this.updateView()
        this.onAdd()
    }

    onAdd(){
        const favButton = this.root.querySelector('#add')
        favButton.onclick = () => {
            const {value} = this.root.querySelector('#searchInput')
            this.addFav(value)
            this.root.querySelector('#searchInput').value = ""
        }
        
    }

    updateView(){
        this.removeAllEntries()

        this.entries.forEach( user => {
            const row = this.createRow()

            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

            row.querySelector('.remove').onclick = () => {
                const sure = confirm("Tem certeza que deseja remover esse usuário?")
                if(sure){
                    this.delete(user)
                }

            }

            this.tbody.append(row)
        })
    }

    removeAllEntries(){
        this.tbody.querySelectorAll('tr').forEach( (tr) => (tr.remove()) )
    }

    createRow(){
        const tr = document.createElement('tr')

        tr.innerHTML = 
        `
        <td class="user">
            <img src="https://github.com/sogbog.png" alt="Imagem de perfil">
            <a href="https://github.com/sogbog" target="_blank">
                <p>André Luiz Gomes Sampaio</p>
                <span>sogbog</span>
            </a>
        </td>
        <td class="repositories">0</td>
        <td class="followers">0</td>
        <td><button class="remove">Remover</button></td>
        `
        return tr
    }



}