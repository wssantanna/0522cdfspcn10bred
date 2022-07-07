# Aula 15 - CSS: Tableless

**Tableless** é uma metodologia de desenvolvimento de páginas web que não utiliza tabelas para disposição de conteúdo na página sugerido pela W3C. 
O objetivo dessa metodologia é tornar o código fonte HTML o mais semântico, aproveitando as propriedade de posionamento da linguagem CSS.

## Dimensões
### width: largura
``` css
.boxe {
  width: 100px; 
}
```
### height: altura
``` css
.boxe {
  height: 100px; 
}
```
### Espaçamento interno / externo
#### padding: espaçamento interno
``` css
.boxe {
  padding: 10px; 
}
/*
  Nota: Por padrão o valor de espaçamento interno é somado ao valor final.

  Considerando a largura / altura de 100px, nosso boxe passaria ter largura / altura de 120px.
  width: 100px; + padding-left: 10px + padding-right: 10px; = 120px;
  heiht: 100px; + padding-top: 10px + padding-bottom: 10px; = 120px;  
*/
```
#### margin: espaçamento externo
``` css
.boxe {
  margin: 10px; 
}
/*
  Nota: Apesar de não alterar a dimensão interna, o espaçamento externo é calculado no momento do posicionamento, 
  podendo ocasionar quebras de linha.

  Considerando a largura / altura de 100px, nosso boxe passaria ter largura / altura de 120px.
  width: 100px; + margin-left: 10px + margin-right: 10px; = 120px de espaço ocupado horizontal;
  heiht: 100px; + margin-top: 10px + margin-bottom: 10px; = 120px de espaço ocupado na vertical;  
*/
```

### Modelo de caixa - Box Model
Por padrão o modelo de caixa da maioria dos navegadores considera a dimensão de qualquer elemento html a partir do resultado da soma do espaçamento interno `padding`, espaçamento externo `margin` e bordar `border`. A propriedade CSS `box-sizing` permite alterar a maneira como esse calculo é realizado.
#### box-sizing: content-box | border-box

**content-box**

Essa é o estilo padrão, conforme especificado pela norma CSS. As propriedades width (largura) e height (altura) são medidas incluindo só o conteúdo, mas não o padding, border ou margin. Nota: Padding, border e margin serão fora da box. Exemplo.: Se .box {width: 350px} então se você aplicar uma propriedade {border: 10px solid black;} o resultado renderizado no navegador (browser) será .box {width: 370px;}

**border-box**

As propriedades de largura (width) e de altura (height) incluem o tamanho padding size e a propriedade border, mas não incluem a propriedade margin.

**Sintaxe**
``` css
.boxe {
  box-sizing: content-box; 
}
```
### Exibição/Comportamento da caixa
#### display: none | block | inline | inline-block | ...
**Sintaxe**
```css
display: none;
display: block;
display: inline;
display: inline-block;
...
```

## Personalização
### background-color: cor
``` css
.boxe {
  ...
  background-color: pink;
}
/*
  Nota: Por padrão o valor de borda é somado ao valor final.

  Considerando a largura / altura de 100px, nosso boxe passaria ter largura / altura de 110px.
  width: 100px; + border-width-left: 5px + border-width-right: 5px; = 110px;
  heiht: 100px; + border-width-top: 5px + border-width-bottom: 5px; = 120px;  
*/
```
### border: espessura estilo cor
``` css
.boxe {
  border-width: 5px;
  border-color: white;
  border-style: solid;
}
/*
  Nota: Por padrão o valor de borda é somado ao valor final.

  Considerando a largura / altura de 100px, nosso boxe passaria ter largura / altura de 110px.
  width: 100px; + border-width-left: 5px + border-width-right: 5px; = 110px;
  heiht: 100px; + border-width-top: 5px + border-width-bottom: 5px; = 120px;  
*/
```
**Nota:** Por padrão a propriedade `border` é somada a dimensão do boxe.
### font-family: 'Fonte 1', 'Fonte 2'...
``` css
.titulo {
  font-family: Arial, Helvetica, sans-serif; 
}
```
### font-size: tamanho
``` css
.titulo {
  font-size: 24px; 
}
```
## Posicionamento
### text-align: center | left | right | justify
``` css
.boxe {
  text-align: center; 
}
```
### float: left | right
``` css
.boxe {
  float: left; 
}
```
### overflow: visible | hidden | scroll | auto | inherit
``` html
<html>
  <head>
    ...
    <title>Título da página>
    <style>
      .conteudo {
        overflow: auto; 
      }
      .boxe {
        float: left;
        ...
      }
    </style>
  </head>
  <body>
    <div class="conteudo">
        <div class="boxe">1</div>
        <div class="boxe">2</div>
        <div class="boxe">3</div>
        <div class="boxe">4</div>
    </div>
  </body>
</html>
```

### clear: none | left | right | both
``` html
<html>
  <head>
    ...
    <title>Título da página>
    <style>
      .conteudo {
        overflow: auto; 
      }
      .boxe {
        float: left;
        ...
      }
      .quebrar-linha {
        clear: left; 
      }
    </style>
  </head>
  <body>
    <div class="conteudo">
        <div class="boxe">1</div>
        <div class="boxe">2</div>
        <div class="boxe quebrar-linha">3</div>
        <div class="boxe">4</div>
    </div>
  </body>
</html>
```

### Contexto de posicionamento
#### position: relative | absolute | fixed
**Sintaxe**
``` css
.boxe {
  position: relative; 
}
```

### Posicionamento de camadas (profundidade)
#### z-index: posição (número)
``` css
.boxe {
  z-index: 1; 
}
```
