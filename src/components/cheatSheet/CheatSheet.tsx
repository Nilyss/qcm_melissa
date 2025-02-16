import { ReactElement } from "react";
import "./cheatSheet.scss";

import { IData } from "../../utils/scripts/generateQuestions";

export default function CheatSheet({
  datas,
}: Readonly<{ datas: IData[] }>): ReactElement {
  return (
      <main>

    <table className="cheat-sheet">
      <thead>
        <tr>
          <th>Catégorie</th>
          <th>Fréquence Cardiaque</th>
          <th>Moyenne Fréquence Cardiaque</th>
          <th>Fréquence Respiratoire</th>
          <th>Moyenne Fréquence Respiratoire</th>
        </tr>
      </thead>
        <tbody>
        {datas.map((data: IData, index: number): ReactElement => (
            <tr key={index}>
                <td data-label="Catégorie">{data.label}</td>
                <td data-label="Fréquence Cardiaque">{data.FC}</td>
                <td data-label="Moyenne FC">{data.FCAverage}</td>
                <td data-label="Fréquence Respiratoire">{data.FR}</td>
                <td data-label="Moyenne FR">{data.FRAverage}</td>
            </tr>
        ))}
        </tbody>
    </table>

      </main>
  );
}
