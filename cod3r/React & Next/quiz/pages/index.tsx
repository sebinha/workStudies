import type { NextPage } from "next";
import { useState } from "react";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";
import styles from "../styles/Questao.module.scss";

const questaoMock = new QuestaoModel(
  201,
  "Qual bicho transmite a doença de chagas?",
  [
    RespostaModel.errada("Abelha"),
    RespostaModel.errada("Mosca"),
    RespostaModel.errada("Pernilongo"),
    RespostaModel.certa("Barbeiro"),
  ]
);

const Home: NextPage = () => {
  const [questao, setQuestao] = useState(questaoMock);

  const onResponse = (indice: number) => {
    setQuestao(questao.responderCom(indice));
  };
  return (
    <div>
      <Questao valor={questao} onResponse={onResponse} />
    </div>
  );
};

export default Home;
