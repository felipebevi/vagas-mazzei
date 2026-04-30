# Build estático

Esta pasta contém a versão compilada do site (HTML, CSS e JS puros), pronta para hospedagem em qualquer servidor estático.

## Como usar

- Abrir localmente: sirva esta pasta com qualquer servidor estático, ex.: `npx serve docs` ou `python3 -m http.server -d docs`.
- GitHub Pages: nas configurações do repositório, em **Settings → Pages**, selecione a branch e a pasta `/docs` como fonte.
- Qualquer host estático (Netlify, Vercel, Nginx, S3, etc.): basta enviar o conteúdo desta pasta.

## Regenerar

Na raiz do projeto, rode:

```bash
npx vite build --outDir docs --base ./
```

O build usa caminhos relativos (`--base ./`) para funcionar em qualquer subdiretório.

> Observação: a aplicação é uma SPA (React Router). Em hosts que não fazem fallback para `index.html`, apenas a rota `/` funcionará — o que é suficiente para este site, que tem apenas uma página pública.