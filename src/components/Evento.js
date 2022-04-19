import Button from "./Button.js"

function Evento() {
    function meuEvento(){
        console.log(`Ativando o evento`)

    }
    function segundoEvento(){
        console.log("Segundo")
    }
    
    return (

        <div>
            <p>Clique para ativar o evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>

    )
}
export default Evento