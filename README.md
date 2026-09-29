# NetQuest — Redes de Computadores I

PWA estática para estudar a **Lista de Exercícios 1 — DCO3002 / Redes de Computadores I / 2026.2**.

## O que já vem pronto

- 80 questões da lista, distribuídas em 8 blocos fixos de 10.
- Ordem aleatória dentro de cada tentativa.
- Questões de múltipla escolha e de múltiplas respostas.
- Botão de dica.
- Correção antes de avançar, com alternativa correta e explicação.
- Nota de 0 a 10 e percentual de acerto.
- Medalha para 100% em cada bloco.
- Quiz rápido com 10 questões sorteadas de toda a lista.
- Progresso, XP, estatísticas e conquistas em `localStorage`.
- **Packet Dungeon**, com teclado no PC e direcional/Ação na tela no celular.
- Biblioteca com os vídeos indicados e glossário rápido.
- PWA instalável, ícones próprios e funcionamento offline após o primeiro carregamento.
- Layout adaptável para celular, tablet e PC.
- Sem framework, sem npm e sem etapa de build.

## Importar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie **o conteúdo desta pasta para a raiz do repositório** (`index.html`, `app.js`, `styles.css`, etc.).
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`.
6. Salve e aguarde o endereço `https://SEU-USUARIO.github.io/SEU-REPOSITORIO/`.

Todos os caminhos do projeto são relativos, então o PWA funciona também quando o GitHub Pages hospeda o site dentro do subdiretório do repositório.

## Instalar no iPhone/iPad

No iOS, o navegador não permite que o site abra sozinho o instalador de PWA. No Safari:

1. Abra o site.
2. Toque em **Compartilhar**.
3. Toque em **Adicionar à Tela de Início**.
4. Confirme.

O app abrirá em modo standalone, sem a barra normal do navegador.

## Observação sobre o gabarito

O PDF da lista contém as questões, mas **não apresenta um gabarito oficial**. As respostas, dicas e explicações incluídas no NetQuest foram preparadas como material de estudo usando os conceitos de Redes de Computadores e o glossário fornecido. Se o professor disponibilizar um gabarito oficial depois, ajuste `data/questions.js`.

## Estrutura

```text
/
├─ index.html
├─ styles.css
├─ app.js
├─ sw.js
├─ manifest.webmanifest
├─ .nojekyll
├─ data/
│  └─ questions.js
└─ assets/
   ├─ icon-192.png
   ├─ icon-512.png
   ├─ apple-touch-icon.png
   ├─ favicon.svg
   ├─ dungeon-bg.svg
   ├─ player.svg
   ├─ slime.svg
   ├─ wisp.svg
   ├─ chest.svg
   └─ gate.svg
```

## Atualizar o cache

Ao alterar arquivos depois de publicar, troque o valor `CACHE` no início de `sw.js` (por exemplo, de `netquest-v1.0.0` para `netquest-v1.0.1`) para forçar uma nova versão do cache offline.
