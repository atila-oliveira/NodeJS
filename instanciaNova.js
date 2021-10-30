//uma factory retorna uma nova instância de objeto
module.exports = () => {
    return {
        valor: 1,
        inc(){
            this.valor++
        }
    }
}