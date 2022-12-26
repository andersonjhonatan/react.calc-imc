import { Component } from "react";
import styles from "../components/Form.module.css";

class Form extends Component {
  render() {
    const {handlePeso, handleAltura, handleclick, valorAltura, valorPeso, handleClickBack } = this.props;
    return (
      <div className={styles.container}>
        <h1 className={styles.h1_form}> Calcule o seu IMC. </h1>
        <p className={styles.p_form}>
          IMC é a sigla para índice de Massa Corpórea, parâmetro adotado pela a
          Organização Mundial de Saúde para calcular o peso ideal de cada
          pessoa.
        </p>
        <form className={styles.inputs_container}>
          <div>
            <label htmlFor="altura" />
            <input
              className={styles.inputs_form}
              type="number"
              id="altura"
              placeholder="Digite a sua Altura. Ex: 1.5 (em métros)"
              value={valorAltura > 0 ? valorAltura : ""}
              onChange={handleAltura}
            />
          </div>
          <div>
            <label htmlFor="peso" />
            <input
              type="number"
              name="peso"
              id="peso"
              placeholder="Digite o seu Peso. Ex: 71.5 (em kg)"
              value={valorPeso > 0 ? valorPeso : ""}
              onChange={handlePeso}
            />
          </div>
        </form>
        <button
          className={styles.form_btn}
          type="button"
          onClick={handleclick}
          disabled={ valorPeso === 0 && valorAltura === 0  }
        >
          {" "}
          Calcular{" "}
        </button>
        <button
          className={styles.buttonLImpar}
          type="button"
          onClick={handleClickBack}
          disabled={ valorPeso === 0 && valorAltura === 0  }
        >
          {" "}
          Limpar{" "}
        </button>
      </div>
    );
  }
}

export default Form;
