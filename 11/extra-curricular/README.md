# Extra currícular - HTML: SEO (Otimização para motores de busca)

## `<title>Título da página</title>` 

Essa tag representada por um link clicável na página de resultados do Google, ou seja, o termo de pesquisa para o qual será ranqueado precisa, necessariamente, aparecer na title tag (geralmente no início ou no fim do texto do título).

## `<meta name="description" content="Descrição da página">`

Uma descrição resumida do conteúdo encontrado no documento.

**Nota:** Uma meta description otimizada contém entre 120 e 130 caracteres e vai direto ao ponto.

## `<meta name="robots" content="nofollow">`

Estabelece uma comunicação direta com os robôs do mecanismo de buscas e facilitar as configurações de como deseja indexar a página no motor de busca.

| Meta name    |	Comando para...                                     |
| ---          | ---                                                    |
| noindex	   | Não indexar uma página.                                |
| follow	   | Repassar autoridade para a página linkada.             |
| nofollow	   | Não repassar autoridade para a página linkada.         |
| nosnippet	   | Não exibir a descrição do site no mecanismo de busca.  |
| noimageindex | Não indexar nenhuma imagem da página.                  |

**Nota:** Caso deseje adicionar duas ou mais configurações, utilize o a virgula como separador.

```
<meta name="robots" content="nofollow, noimageindex">
```

## `<meta http-equiv="content-language" content="pt-br">`

Define o idioma do documento.

## `<meta name="author" content="Nome do autor">`

Define o nome do autor ao conteúdo.

## `<meta name="creator" content="Nome do responsável pelo código">`

Define o nome do autor ou empresa responsável pela criação do código HTML.

## Opengraph

Esses comandos estão relacionados ao processo de publicação do conteúdo no Facebook. Assim, temos controle sobre as características do post indexado na rede social.

### `<meta property="og:locale" content="pt_BR">` 

Define o idioma da publicação.

### `<meta property="og:type" content="website">`

Define o tipo do documento.

### `<meta property="og:title" content="Título da página">`

Define o título da documento.

### `<meta property="og:description" content="Uma descrição para página">`

Define a descrição do documento.

### `<meta property="og:url" content="http://www.google.com">`

Define a URL da do documento.

### `<meta property="og:site_name" content="Nome da empresa">`

Define o nome do site.

### `<meta property="og:image" content="www.google.com/imagem.jpg">`

Define a imagem que deverá representar o conteúdo da página.


## Ferramentas
- [Extensão Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=pt-BR) - Analisa o código fonte e avaliar performance, acessibilidade, boas práticas e SEO.
- [Documentação do Opengraph](https://ogp.me/) - Documentação do The Open Graph protocol.
- [Gerador de favicon](https://www.favicon-generator.org/) - Um gerador de favicon. 
