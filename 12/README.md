# Aula 12 - HTML: Formulário

## 1. Qual a diferença do(s) elemento(s) de formulário, comparado com as demais?

Os campos, ou `input` permitem recolher dados do usuário, em outras palavras, é uma ponte de comunicação do usuário com o sistema.
É importante observar que os dados por vezes precisam se modificados para se encaixar perfeitamente com o que o sistema necessita. Apelidamos esse processo de modificação de **tratamento**.

## 2. Como normalmente os dados são tratados?

A princípio não iremos aprofundar nossa abordagem sobre arquitetura de sistemas, porém é fundamental comepreender que os formulários que trabalharemos enviarão as informações para um sistemna a partir de um serviço disponilizado via API - Interface de programação de aplicações. O processo é simples, a partir de um formulário coletamos os dados e enviamos para o sistema a partir de um link seguindo um **método de envio**.

## 3. Métodos de envio de dados

É possível emular dois métodos de envio a partir de um documento HTML, são eles `GET` e `POST`.

```html
<html>
  <head>
    ...
    <title>...<title>
  </head>
  <body>
    <form action="https://api.sistema.com/cadastrar" method="GET">
      ...
    </form>
  </body>
</html>
```

### 3.1. GET

Enviar os dados do formulário via URI, ou seja, os dados são enviados como parametro na URL.

### 3.2. POST

Enviar os dados do formulário no corpo de uma requisição HTTP.

## 4. Tipos de campos de formulário

### 4.1. `<input>`

```html
<input name="nome" type="text">
```

`required`

```html
<input name="cpf" type="text" required>
```

`type=""`

```html
<input name="nome" type="nome">
<input name="email" type="email">
<input name="telefone" type="tel">
<input name="senha" type="password">
```

### 4.2. `<input type="radio">`

```html
<h1>Você é um estudante da Digital House?</h1>
<form>
  <div>
    <input id="sim" type="radio" name="estudante" value="sim">
    <label for="sim">Sim</label>
  </div>
  <div>
    <input id="nao" type="radio" name="estudante" value="nao">
    <label for="nao">Não</label>
  </div>
</form>
```

### 4.3. `<input type="checkbox">`

```html
<h1>Quais clubes você costuma torcer?</h1>
<form>
  <div>
    <input type="checkbox" name="clube" value="flamengo" id="flamengo">
    <label for="flamengo">Flamengo</label>
  </div>
  <div>
    <input type="checkbox" name="clube" value="vasco" id="vasco">
    <label for="vasco">Vasco</label>
  </div>
</form>
```

**Nota:** Você pode utilizar o atributo `checked` para marcar a opções por padrão.

### 4.4. `<select> <option>`

```html
<h1>Escolha a cor do veículo</h1>
<select name="cor">
  <option value="vermelho">Vermelho</option>
  <option value="verde">Verde</option>
  <option value="azul">Azul</option>
  <option value="roxo">Roxo</option>
</select>
```

**Nota:** Você pode utilizar o atributo `selected` para selecionar a opção padrão.

## 5. Semântica

### 5.1. `<label for="">`

```html
<label for="nome">Nome completo</label>
<input id="nome" name="nome" type="text">
```

**Nota:** Para associar a `label` ao `input` deve-se utilizar o atributo **id**. 
### `placeholder=""`

```html
<label for="nome">Nome</label>
<input id="nome" name="nome" type="text" placeholder="Digite seu nome completo">
```

### 5.6. `<fieldset> <legend>`

```html
<fieldset>
  <legend>Para qual time você torce?</legend>
  <div>
    <input id="flamengo" type="radio" name="clube" value="flamengo">
    <label for="flamengo">Flamengo</label>
  </div>
  <div>
      <input id="vasco" type="radio" name="clube" value="vasco">
      <label for="vasco">Vasco</label>
  </div>
</fieldset>
```

### 5.7. `<optgroup>`

```html
<select>
  <optgroup label="Ferrari">
    <option>458 Spider</option>
    <option>F12 Berlinetta</option>
    <option>California T</option>
  </optgroup>
  <optgroup label="Porsche">
    <option>Macan</option>
    <option>918 Spyder</option>
  </optgroup>
</select>
```