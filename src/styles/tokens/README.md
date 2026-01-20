Tokens de tema (CSS Variables)

- Edite `theme.css` para cores, espaçamento, tipografia etc.
- Use `:root[data-theme="dark"]` para overrides manuais.
- Por padrão, o tema segue `prefers-color-scheme` quando `data-theme` não estiver setado.

Uso (exemplos):
- `background: var(--color-bg);`
- `color: var(--color-fg);`
- `border-color: var(--color-border);`