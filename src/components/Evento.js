function Evento({numero}) {
    function meuEvento(){
        console.log(`OPA! Olha o ${numero}`)

    }
    
    return (

        <div>
            <p>Clique para ativar o evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>

    )
}
export default Evento