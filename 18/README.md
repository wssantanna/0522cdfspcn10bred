# Aula 18 - CSS: Animação

## Animação de transição

### Valor de transição 

```css
.botao {
    background-color: red;
    color: white;
    /* Para definir os nomes das propriedades que deseja controlar a transição. */
    transition-property: background-color;
    /* Para estabelecer o tempo de transição. */
    transition-duration: 1s;
}

.botao:hover {
    background-color: orange;
    color: inherit;
}
```

**Nota:** É possível abreviar as propriedades `transition-property` e `transition-duration` utilizando `transition`.

```css
.botao {
    background-color: red;
    color: white;
    /* Para definir os nomes das propriedades que deseja controlar a transição. */
    /* Para estabelecer o tempo de transição. */
    transition: background-color, 1s;
}

.botao:hover {
    background-color: orange;
    color: inherit;
}
```

### Múltiplos valores de transição 

#### Seleção de múltiplos valores

```css
.botao {
    background-color: red;
    color: white;
    /* Para definir os nomes das propriedades que deseja controlar a transição. */
    /* Para estabelecer o tempo de transição. */
    transition: 
        background-color, 1s,
        color, 1s;
}

.botao:hover {
    background-color: gray;
    color: black;
}
```

#### Seleção de todos os valores

```css
.botao {
    background-color: red;
    color: white;
    /* Para definir os nomes das propriedades que deseja controlar a transição. */
    /* Para estabelecer o tempo de transição. */
    transition: all 1s;
}

.botao:hover {
    background-color: gray;
    color: black;
}
```

### Propriedades de transformação

#### `transform: function`

```css
.cartao {
    background-color: white;
    border-radius: 25px;
    padding: 25px;
    transition: transform 0.5s;
}

.cartao:hover {
    transform: scale(2);
}
```

**Nota:** É possível trabalhar com as funções `scale(x,y)`, `skew(x,y)`, `rotate(0deg)`, `translate(x,y)` e `transform-origin(top|left|right|bottom|0px)`.

## Animação quadro a quadro

```css
/* Linha do tempo da animação divida em três etapas. */
@keyframes aparecimentoDesaparecimentoGradual {
    0% { 
        opacity: 0%; 
    }
    25% {
        transform: translateY(-20px);
        opacity: 100%;
    }
    100% {
        opacity: 0%;
    }
}
/* Atribuindo a animação ao objeto. */
.bola {
    background-color: red;
    border-radius: 100%;
    height: 200px;
    width: 200px;
    /* Para definir o nome da animação quadro a quadro que deseja aplicar */
    animation-name: aparecimentoDesaparecimentoGradual;
    /* Para estabelecer o tempo de transição. */
    animation-duration: 1s;
    /* Para definir a quantidade de vezes que a animação se repetirá. */
    /* Nota: É possível definir um valor numérico. */
    animation-iteration-count: infinite;
}
```

**Nota:** É possível abreviar as propriedades `animation-name`, `animation-duration` e `animation-iteration-count` utilizando `animation`.

```css
/* Linha do tempo da animação divida em três etapas. */
@keyframes aparecimentoDesaparecimentoGradual {
    0% { 
        opacity: 0%; 
    }
    25% {
        transform: translateY(-20px);
        opacity: 100%;
    }
    100% {
        opacity: 0%;
    }
}
/* Atribuindo a animação ao objeto. */
.bola {
    background-color: red;
    border-radius: 100%;
    height: 200px;
    width: 200px;
    /* Para definir o nome da animação quadro a quadro que deseja aplicar */
    /* Para estabelecer o tempo de transição. */
    /* Para definir a quantidade de vezes que a animação se repetirá. */
    /* Nota: É possível definir um valor numérico. */
    animation: aparecimentoDesaparecimentoGradual 1s infinite;
}
```

## Link(s)

### Documentação

- [Transformação](https://developer.mozilla.org/pt-BR/docs/Web/CSS/transform)
- [Animação transição](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [Animação quadro a quadro](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@keyframes)

### Dicas

- [Animate.css](https://animate.style/)
- [Hover.css](https://ianlunn.github.io/Hover/)
