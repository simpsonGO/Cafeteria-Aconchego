# Changelog - 29/05/2025

## Novas funcionalidades

- Adição de 6 novas páginas no site da Cafeteria Aconchego:
  - Blog
  - Trabalhe Conosco
  - Nossa Equipe
  - Programa de Fidelidade
  - Eventos e Agenda
  - Franquias ou Parcerias

## Frontend (JavaScript & CSS)

- Refatoração do `main.js` para:
  - Carregamento assíncrono e dinâmico dos componentes de navegação (`nav.html`) e rodapé (`footer.html`).
  - Implementação de scroll suave para links âncora com verificação da existência do destino.
  - Melhor controle do menu mobile com toggle seguro da classe `open`.
  - Adição de animações on scroll usando `IntersectionObserver` para elementos selecionados (cards, galeria, depoimentos).
  - Slider funcional para depoimentos com navegação por botões anterior e próximo.
  - Feedback visual no formulário de contato simulando envio e reset após confirmação.
  - Inclusão de verificações para prevenir erros caso elementos não estejam presentes no DOM.

- Implementação incremental de CSS personalizado para cada uma das novas páginas, garantindo estilo coerente e responsivo.

## Correções e melhorias gerais

- Código JavaScript mais modular e robusto, prevenindo falhas de execução em páginas sem certos elementos.
- Melhor experiência do usuário com feedbacks visuais claros e navegação fluida.
- Organização e limpeza do código para facilitar manutenção futura.

---

*Data da atualização: 29/05/2025*
