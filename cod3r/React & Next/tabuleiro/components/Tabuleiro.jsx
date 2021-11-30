import Linha from "./Linha";

export default function Tabuleiro() {
  return (
    <div>
      <Linha />
      <Linha invertido />
      <Linha />
      <Linha invertido />
      <Linha />
      <Linha invertido />
      <Linha/>
      <Linha invertido/>
    </div>
  );
}
