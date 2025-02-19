export interface IPressionArterielleData {
    label: string;
    systolique: string;
    diastolique: string;
}

export const  pressionArterielleDatas: IPressionArterielleData[] = [
    {
        label: 'Prématuré >= 32 SA',
        systolique: '70 à 50',
        diastolique: '45 à 25',
    },
    {
        label: 'Nouveau-né',
        systolique: '90 à 75',
        diastolique: '50 à 40',
    },
    {
        label: 'Enfant (3 à 6 ans)',
        systolique: '115 à 90',
        diastolique: '75 à 50',
    },
    {
        label: 'Enfant (8 à 16 ans)',
        systolique: '125 à 105',
        diastolique: '80 à 55',
    },

]