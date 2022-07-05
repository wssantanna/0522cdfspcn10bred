# Aula 14 - CSS: Formulário

## Pseudo-elementos

Seleção de um pseudo elemento de um elemento pai. Você pode utilizar apenas um pseudo-elemento em um seletor. Ele deve aparecer depois da declaração de um elemento simples.

**Nota:** Como regra, os dois pontos devem ser usados duas vezes  (::)  ao invés de uma única vez  (:). Isso distingue pseudo-classes de pseudo-elementos. Apesar disso, devido a essa distinção não estar presente em versões mais antigas da especificação da W3C, a maioria dos navegadores suportam ambas as sintaxes para os pseudo-elementos originais. 

```css
seletor::pseudo-elemento {
    propriedade: valor;
}
```

## Pseudo-classes

Seleção do elemento com base no comportamento. Permitem que você aplique um estilo a um elemento não apenas em relação ao conteúdo da árvore do documento, mas também em relação a fatores externos como o histórico de navegação (:visited, por exemplo), o status do seu conteúdo (como :checked em certos elementos de um formulário), ou a posição do mouse (como :hover, que permite saber se o mouse está sobre um elemento ou não).

### Sintaxe

```css
seletor:pseudo-classe {
    propriedade: valor;
}
```