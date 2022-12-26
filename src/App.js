import { Component } from "react";
import Form from "./components/Form";
import Resultados from "./components/Resultados";
import styles from "./App.module.css";
import logo from "./assets/LOGO.png";

class App extends Component {
  state = {
    valorPeso: 0,
    valorAltura: 0,
    resultado: 0,
    clickButtom: false,
  };

  handlePeso = ({ target: { value } }) => {
    this.setState({
      valorPeso: parseFloat(value),
    });
  };

  handleAltura = ({ target: { value } }) => {
    this.setState({
      valorAltura: parseFloat(value),
    });
  };

  handleClick = () => {
    const { valorAltura, valorPeso } = this.state;
    if (valorAltura && valorPeso) {
      this.setState({
        resultado: valorPeso / (valorAltura * valorAltura),
        clickButtom: true,
      });
    }
  };

  handleClickBack = () => {
    this.setState({
      resultado: 0,
      valorPeso: 0,
      valorAltura: 0,
    });
  };

  render() {
    const { resultado, valorAltura, valorPeso } = this.state;
    return (
      <div className={styles.div_principal_app}>
        <header>
          <div className={styles.pai_imagem}>
            <img src={logo} alt="logo-do-header" width={90} />
          </div>
        </header>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <Form
              valorPeso={valorPeso}
              valorAltura={valorAltura}
              handlePeso={this.handlePeso}
              handleAltura={this.handleAltura}
              handleclick={this.handleClick}
              handleClickBack={this.handleClickBack}
              resultado={resultado}
            />
          </div>
          <div className={styles.leftRight}>
            <Resultados
              resultado={resultado}
              valorPeso={valorPeso}
              valorAltura={valorAltura}
              handlePeso={this.handlePeso}
              handleAltura={this.handleAltura}
              handleclick={this.handleClick}
              handleClickBack={this.handleClickBack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
