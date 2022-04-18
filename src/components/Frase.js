import styles from "./Frase.module.css"

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <h4>Aqui é uma frase</h4>
      <p className={styles.fraseContent}>Este é um componente com uma frase</p>
    </div>
  )
}
export default Frase
