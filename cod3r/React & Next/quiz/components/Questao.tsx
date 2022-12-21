import QuestaoModel from "../model/questao";
import styles from "../styles/Questao.module.scss";
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";

interface QuestaoProps {
  valor: QuestaoModel;
  onResponse: (indice: number) => void
}

export default function Questao(props: QuestaoProps) {
  const questao = props.valor;

  const letras = [
    {
      letra: "A",
      cor: "#FB0",
    },
    {
      letra: "B",
      cor: "#F00",
    },
    {
      letra: "C",
      cor: "#F0F",
    },
    {
      letra: "D",
      cor: "#35A",
    },
  ];

  const renderizarRespostas = () => {
    return questao.respostas.map((resposta, i) => {
      return (
        <Resposta
          key={i}
          valor={resposta}
          indice={i}
          letra={letras[i].letra}
          background={letras[i].cor}
          onResponse={props.onResponse}
        />
      );
    });
  };

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
      {renderizarRespostas()}
    </div>
  );
}
