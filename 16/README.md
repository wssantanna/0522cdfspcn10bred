# Aula 16 - Responsividade

## Grid system

### `display: grid`

O Grid Container é a elemento que envolve todos os itens da **grid**, ao indicar `display: grid`, essa tag passa a ser um **Grid Container**.

```css
.l-app {
	display: grid;
}
```

### `grid-template-columns`

Define o número total de colunas que serão criadas no grid.

```css
.l-galeria {
	display: grid;
    width: 400px;
    /* 
        Neste exemplo, uma grid com 4 colunas 
        de 100px 
    */
	grid-template-columns: 25% 25% 25% 25%;
}

.l-app {
	display: grid;
    width: 100vw;
    /* 
        Neste exemplo, uma grid com 2 colunas 
        de com largura 100vw / 2 frações 
    */
	grid-template-columns: 1fr 1fr;
}
```

## Responsividade

### Unidade de medida

## Adaptatividade