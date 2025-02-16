export interface IData {
    label: string;
    FC: string;
    FCAverage: string;
    FR: string;
    FRAverage: string;
}

export const datas: IData[] = [
    {
        label: "Prématuré",
        FC: "80 à 180",
        FCAverage: "140",
        FR: "40 à 70",
        FRAverage: "60",
    },
    {
        label: "Nourrisson au repos (0 à 6 mois)",
        FC: "80 à 180",
        FCAverage: "130",
        FR: "30 à 60",
        FRAverage: "40",
    },
    {
        label: "Enfant (1 à 2 ans)",
        FC: "80 à 180",
        FCAverage: "100",
        FR: "30 à 40",
        FRAverage: "30",
    },
    {
        label: "Enfant (2 à 5 ans)",
        FC: "60 à 160",
        FCAverage: "100",
        FR: "24 à 30",
        FRAverage: "25",
    },
    {
        label: "Enfant (5 à 12 ans)",
        FC: "60 à 160",
        FCAverage: "90",
        FR: "20 à 24",
        FRAverage: "20",
    },
];

export const generateQuestion = () => {
    const data = datas[Math.floor(Math.random() * datas.length)];
    const questionType = Math.floor(Math.random() * 4); // 0: FC, 1: FCAverage, 2: FR, 3: FRAverage
    const isLabelToValues = Math.random() > 0.5;

    let question: string = "";
    let correctAnswers: string[] = [];
    let options: string[] = [];

    if (isLabelToValues) {
        // **Cas où on donne un label et on demande une valeur**
        switch (questionType) {
            case 0:
                question = `Quelle est la plage de fréquence cardiaque pour la catégorie "${data.label}" ?`;
                correctAnswers = [data.FC]; // Un seul choix correct
                options = Array.from(new Set(datas.map(d => d.FC))); // Pas de doublons
                break;
            case 1:
                question = `Quelle est la fréquence cardiaque moyenne pour la catégorie "${data.label}" ?`;
                correctAnswers = [data.FCAverage];
                options = Array.from(new Set(datas.map(d => d.FCAverage)));
                break;
            case 2:
                question = `Quelle est la plage de fréquence respiratoire pour la catégorie "${data.label}" ?`;
                correctAnswers = [data.FR];
                options = Array.from(new Set(datas.map(d => d.FR)));
                break;
            case 3:
                question = `Quelle est la fréquence respiratoire moyenne pour la catégorie "${data.label}" ?`;
                correctAnswers = [data.FRAverage];
                options = Array.from(new Set(datas.map(d => d.FRAverage)));
                break;
            default:
                throw new Error("Type de question inconnu");
        }
    } else {
        // **Cas où on donne une valeur et on demande tous les labels qui y correspondent**
        switch (questionType) {
            case 0:
                question = `À quelle(s) catégorie(s) correspond cette plage de fréquence cardiaque : ${data.FC} ?`;
                correctAnswers = datas.filter(d => d.FC === data.FC).map(d => d.label);
                options = datas.map(d => d.label); // Affiche toutes les catégories
                break;
            case 1:
                question = `À quelle(s) catégorie(s) correspond cette fréquence cardiaque moyenne : ${data.FCAverage} ?`;
                correctAnswers = datas.filter(d => d.FCAverage === data.FCAverage).map(d => d.label);
                options = datas.map(d => d.label);
                break;
            case 2:
                question = `À quelle(s) catégorie(s) correspond cette plage de fréquence respiratoire : ${data.FR} ?`;
                correctAnswers = datas.filter(d => d.FR === data.FR).map(d => d.label);
                options = datas.map(d => d.label);
                break;
            case 3:
                question = `À quelle(s) catégorie(s) correspond cette fréquence respiratoire moyenne : ${data.FRAverage} ?`;
                correctAnswers = datas.filter(d => d.FRAverage === data.FRAverage).map(d => d.label);
                options = datas.map(d => d.label);
                break;
            default:
                throw new Error("Type de question inconnu");
        }
    }

    options = options.sort(() => Math.random() - 0.5);
    return { question, correctAnswers, options };
};

