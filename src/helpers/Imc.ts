/* export type Level = {
    title:string;
    color: string;
    icon:'down' | "up";
    imc: number[]
}

export const levels: Level[] = [
    {title: 'Magreza', color: '#96a3ab', icon: 'down', imc: [0, 18.5]},
    {title: 'Normal', color: '#0ead69', icon: 'up', imc: [18.6, 24.9]},
    {title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30]},
    {title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99]}
];

export const calculadorImc = (height: number, weight: number) => {
    const imc = weight / (height * height)

    levels.filter((elemento) => elemento.imc > elemento.imc[0] )
} */