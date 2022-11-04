// Tipagem estatica

// 1. Tipagem implicita
let valor1 = 1;
// valor1 = true; // Error pois o valor foi atribuido como number anteriormente.

// 2. Tipagem explicita
let valor2: number = 1;
// valor2 = true; // Error pois o valor foi atribuido como number anteriormente.

// 3. Quais os tipos suportados?

// 3.1. string
const nome: string = "Willian";

// 3.2. number
const idade: number = 32;

// 3.3. boolean
const filhos: boolean = false;

// 3.4. array
const linguagens: string[] = ['typescript', 'c#', 'java', 'node'];
const habilidades: Array<string> = ["esforcado"]

// 3.5. tuple / vetor
const contato: [string, number] = ["celular", 21972192093];

// 3.6. enum
enum cores {
    preto = '#000',
    branco = '#fff'
}

// 3.7. any
let qualquerValor: any = {}
qualquerValor = 1;
qualquerValor = ''

// 3.8. void
function inicializar(): void { }

// 3.9. never
function error(): never {
    throw new Error('Error');
}

// 3.10. alias
function nomeCompleto(nome?: string, sobrenome?: string): string | void {
    if (nome && sobrenome)
        return `${nome} ${sobrenome}`;
}

// 3.11. type 
type Plataforma = 'MacOsx' | 'Window' | 'Linux';

type Cliente = {
    matricula: string
}

type Estudante = {
    id: number,
    nome: string,
    sobrenome: string,
    email?: string
}

type ClienteDH = Cliente & Estudante;

const aluno: ClienteDH = {
    id: 1,
    nome: 'Willian',
    sobrenome: 'Sant Anna',
    matricula: 'dh01'
}

const plataforma: Plataforma = 'Window';

// 3.12. type alias
type Abacaxi = string | 'Abacaxi' | 'abacaxi';

// 3.13. object
















