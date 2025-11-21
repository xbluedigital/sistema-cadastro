---
applyTo: '**'
---

# Guia de Projeto — Nuxt 4 (estrutura + padrões de código)

⚠️ **Atenção**  
Este documento é um **guia baseado em boas práticas e na documentação oficial**.  
**Sempre siga as orientações do desenvolvedor responsável pelo projeto.**  
Não é uma regra imutável — serve como referência para manter consistência, legibilidade e escalabilidade.

---

## 1) Estrutura de pastas (Nuxt 4)

Sempre respeitar a estrutura abaixo ao criar **novos arquivos/pastas**:

/my-nuxt-app
│
├── app/                 # Configurações do app, layouts, plugins globais
│   ├── config/          # Configs de nuxtApp: nome app, constantes, tokens
│   └── middleware/      # Middlewares globais
│
├── assets/              # CSS, imagens, fontes, estilos globais
│
├── components/          # Componentes pequenos e reutilizáveis
│   ├── ui/              # Componentes da interface (botões, inputs etc.)
│   ├── layout/          # Componentes de layout
│   └── shared/          # Cards, tabelas, grafos, modais
│
├── composables/         # Lógica reutilizável (equivalente a hooks)
│   ├── useAuth.ts
│   ├── useApi.ts
│   ├── useCampaign.ts
│   └── useValidation.ts
│
├── layouts/             # Layouts de páginas (Default, Admin, Public)
│
├── pages/               # Rotas automáticas
│   ├── login.vue
│   ├── dashboard.vue
│   └── campaigns/
│       ├── index.vue
│       └── [id].vue
│
├── server/              # Backend via Nitro
│   ├── api/             # Rotas backend (Node) -> /api/*
│   ├── db/              # Regras de acesso ao banco (opcional)
│   └── services/        # Integrações externas
│
├── plugins/             # Plugins Nuxt (Axios, Pinia, libs externas)
│
├── stores/              # Pinia Store (estado global)
│   ├── user.store.ts
│   ├── settings.store.ts
│   └── campaigns.store.ts
│
├── utils/               # Funções utilitárias puras
│   ├── formatters/
│   ├── validators/
│   └── helpers/
│
├── types/               # Typescript global types e interfaces
│
├── public/              # Arquivos estáticos
│
└── nuxt.config.ts       # Configuração principal



> **Sobre `types`**  
> - **Projetos pequenos** → pode manter em `app/types`.  
> - **Projetos médios/grandes ou com backend** → prefira `shared/types` fora do `app/` para facilitar compartilhamento.

---

## 2) Princípios de arquitetura

1. **Componentizar ao máximo**  
   - Componentes pequenos, coesos e reusáveis.  
   - Nada de lógica de dados dentro de componentes — use **composables**.
   - Ao criar componentes, faça com ID fixo para evitar problemas de hidrataçao

2. **Composables para lógica de domínio**  
   - `/app/composables/useX.ts` → busca de dados, regras de negócio, orquestração.  
   - Componente apenas consome o composable.

3. **Responsabilidade única**  
   - Um arquivo faz **uma única coisa bem feita**. Se crescer, quebre.

4. **Tipos corretos**  
   - Sempre tipar props, emits, retornos, estados e contratos de API.  
   - Evitar `any`; preferir tipagem explícita.

5. **Sempre TypeScript**  
   - `lang="ts"` nos componentes Vue.  
   - Tipos globais no `/shared/types` ou `app/types`.

6. **Padrão de camadas**  
   - **UI (`components`)** → **Composables (`composables`)** → **Acesso a dados (`server/api` ou SDK)**.

---
## Regras de nomenclatura

- **Componentes Vue (`/app/components`)** → **PascalCase**  
  Ex.: `UserCard.vue`, `AuthButton.vue`

- **Páginas (`/app/pages`)** → **minúsculas sem traços**, usar apenas letras e, se necessário, subpastas para organizar  
  Ex.: `login.vue`, `profile.vue`, `settings.vue`  
  Se precisar separar por contexto:  

	/app/pages/admin/dashboard.vue
	/app/pages/admin/users.vue


- **Layouts (`/app/layouts`)** → **PascalCase**  
Ex.: `DefaultLayout.vue`, `AdminLayout.vue`

Atençao: Para usar o layout basta envolver o componente na tag NuxtLayout

- **Composables (`/app/composables`)** → prefixo `use` + PascalCase  
Ex.: `useAuth.ts`, `useCart.ts`

- **Middlewares (`/app/middleware`)** → camelCase  
Ex.: `authGuard.ts`, `isAdmin.ts`

- **Utils (`/app/utils`)** → camelCase  
Ex.: `formatDate.ts`, `calculateTotal.ts`

- **Tipos (`/shared/types` ou `app/types`)** → PascalCase para nomes de interfaces ou DTOs  
Ex.: `UserDTO.ts`, `ProductDTO.ts`

**Sempre use imports explicitos para cada arquivo, evitando auto-imports.**



