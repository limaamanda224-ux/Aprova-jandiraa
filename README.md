# Aprova Jandira — aplicativo PWA

Este é um protótipo instalável como aplicativo (PWA). Ele permite cadastrar sessões, links de videoaulas e PDFs, questões com alternativas, corrigir respostas, registrar erros e acompanhar o progresso.

## Publicar para instalar no Android e notebook

1. Extraia o ZIP.
2. No GitHub, abra o repositório `aprova-jandira` e envie **todos os arquivos e pastas que estão dentro** desta pasta (não apenas o ZIP).
3. Publique o repositório usando um serviço de hospedagem estática com HTTPS, como Netlify ou Vercel.
4. Abra a URL publicada no Chrome do Android e escolha “Instalar app” ou “Adicionar à tela inicial”. No notebook, use o ícone de instalação do Chrome/Edge.

## Importante sobre os dados

Os dados deste protótipo ficam no armazenamento local do navegador. Isso significa que o conteúdo do celular não aparece automaticamente no notebook. A sincronização entre dispositivos exige configurar um serviço de banco de dados e autenticação (por exemplo, Supabase), o que ainda não está implementado nesta versão.

## Inserir questões

No campo “Questões em formato JSON”, use uma lista como esta:

```json
[
  {
    "question": "Qual princípio do SUS garante acesso de todos aos serviços?",
    "options": ["Universalidade", "Hierarquização", "Descentralização", "Regionalização", "Controle"],
    "answer": 0,
    "explanation": "A universalidade garante acesso às ações e serviços de saúde a todas as pessoas."
  }
]
```

`answer` é o índice da alternativa correta: 0 para A, 1 para B, até 4 para E.

Este projeto é uma base inicial. O conteúdo diário não é importado automaticamente do ChatGPT; as sessões e materiais precisam ser cadastrados no aplicativo.
