import { Component } from "react";
import styles from "../components/Resultado.module.css";
import Down from "../assets/Down.png";
import Up from "../assets/Up.png";
import { ArrowLeft } from "phosphor-react";

class Resultados extends Component {
  render() {
    const { resultado, handleClickBack } = this.props;
    return (
      <div className={styles.main}>
        {resultado > 0 && (
          <div className={styles.figure_back}>
            <ArrowLeft
              size={60}
              onClick={handleClickBack}
              className={styles.back_btn}
            />
          </div>
        )}
        {resultado > 0 && resultado <= 18.59 && (
          <div className={styles.magreza}>
            <figure>
              <img src={Down} alt="indicador para baixo" />
            </figure>
            <h1>Magreza</h1>
            <p className={styles.main_para}>{`Seu IMC é de ${resultado.toFixed(2)} Kg/m²`}</p>
          </div>
        )}

        {resultado >= 18.6 && resultado <= 24.99 && (
          <div className={styles.normal}>
            <figure>
              <img src={Up} alt="indicador para cima" />
            </figure>
            <h1>Normal</h1>
            <p className={styles.main_para}>{`Seu IMC é de ${resultado.toFixed(2)} Kg/m²`}</p>
          </div>
        )}

        {resultado > 25 && resultado <= 30 && (
          <div className={styles.sobrepeso}>
            <figure>
              <img src={Down} alt="indicador para baixo" />
            </figure>
            <h1>Sobrepeso</h1>
            <p className={styles.main_para}>{`Seu IMC é de ${resultado.toFixed(2)} Kg/m²`}</p>
          </div>
        )}

        {resultado > 30.1 && (
          <div className={styles.obessidade}>
            <figure>
              <img src={Down} alt="indicador para baixo" />
            </figure>
            <h1>Obessidade</h1>
            <p className={styles.main_para}>{`Seu IMC é de ${resultado.toFixed(2)} Kg/m²`}</p>
          </div>
        )}

        {!resultado && (
          <div className={styles.gridMain}>
            <div className={styles.magreza}>
              <figure>
                <img src={Down} alt="indicador para baixo" />
              </figure>
              <h1 className={styles.grid_h1}>Magreza</h1>
              <p className={styles.itens_p}>IMC está entre 0 e 18.5</p>
            </div>
            <div className={styles.normal}>
              <figure>
                <img src={Up} alt="indicador para cima" />
              </figure>
              <h1 className={styles.grid_h1}>Normal</h1>
              <p className={styles.itens_p}>IMC está entre 18.6 e 24.9</p>
            </div>
            <div className={styles.sobrepeso}>
              <figure>
                <img src={Down} alt="indicador para baixo" />
              </figure>
              <h1 className={styles.grid_h1}>Sobrepeso</h1>
              <p className={styles.itens_p}>IMC está entre 25 e 30</p>
            </div>
            <div className={styles.obessidade}>
              <figure>
                <img src={Down} alt="indicador para baixo" />
              </figure>
              <h1 className={styles.grid_h1}>Obessidade</h1>
              <p className={styles.itens_p}>IMC está entre 30.1 e 99</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Resultados;
