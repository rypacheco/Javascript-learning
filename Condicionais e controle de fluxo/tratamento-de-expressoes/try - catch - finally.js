/* try {
    // TENTA EXECUTAR ALGO
    console.log(result)
} catch (error) {
    // CAPTURA O ERRO PARA TRATAR.
    
    // console.log("Não foi possivel executar seu pedido. Tente novamente mais tarde!")
    
     console.log(error)
} finally {
    console.log("Fim")
} */

    let result = 0
    try {
        if (result ===0) {
            throw new error("O valor é igual a 0")
        }
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Fim")
    }