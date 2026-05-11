MANDARIM COM O PROF. — SITE/PWA COMPLETO

O QUE É
Site estático completo para estudar mandarim no celular ou computador.
Não precisa de banco de dados, login, PHP, MySQL, Laravel nem WordPress.
Basta subir estes arquivos para uma hospedagem.

RECURSOS INCLUÍDOS
- Curso de 180 dias.
- Progresso salvo no navegador/celular.
- Revisão inteligente por frase.
- Teste diário.
- Gravação de voz pelo microfone.
- Simulações de hotel, feira, fornecedor, negociação, restaurante e táxi.
- PWA instalável no celular.
- Funciona offline depois do primeiro carregamento.
- Estrutura para áudios nativos em MP3.

COMO PUBLICAR EM QUALQUER HOSPEDAGEM
1. Descompacte o ZIP.
2. Envie TODOS os arquivos e pastas para a pasta pública do domínio.
   Exemplos:
   - public_html/mandarim/
   - public_html/
   - www/
3. Abra no navegador:
   https://seudominio.com.br/mandarim/
4. No celular, toque em “Instalar no celular” ou “Adicionar à tela inicial”.

ARQUIVOS PRINCIPAIS
- index.html: estrutura do site.
- styles.css: visual do site.
- app.js: curso, lógica, progresso, áudio, revisão, teste e simulações.
- manifest.webmanifest: instalação PWA.
- sw.js: funcionamento offline.
- audio/: pasta para colocar MP3s nativos.

ÁUDIOS NATIVOS
Coloque os MP3s dentro da pasta audio/ com estes nomes:

day-001-phrase-01.mp3
day-001-phrase-02.mp3
day-001-phrase-03.mp3
day-001-phrase-04.mp3
...
day-180-phrase-04.mp3

Enquanto o MP3 não existir, o app usa voz automática do navegador.

IMPORTANTE SOBRE HTTPS
Para o PWA instalar corretamente e o microfone funcionar bem, use HTTPS.
Hospedagens como GitHub Pages, Netlify, Vercel e Cloudflare Pages dão HTTPS grátis.

COMO ATUALIZAR O CURSO
Edite o arquivo app.js.
As frases estão no bloco phraseBank.
Depois envie o app.js atualizado para a hospedagem.

COMO FORÇAR ATUALIZAÇÃO NOS CELULARES
Se fizer mudança grande, abra sw.js e troque:
CACHE_NAME = 'mandarim-prof-v1'
para:
CACHE_NAME = 'mandarim-prof-v2'

Depois envie o sw.js atualizado.
