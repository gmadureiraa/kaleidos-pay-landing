# Kaleidos Pay — Landing

Landing page do Kaleidos Pay, o gateway de pagamentos da Kaleidos. Captura de
waitlist rodando em Next.js 16 + Tailwind v4 + Supabase (opcional).

## Stack

- Next.js 16 (App Router, Turbopack)
- Tailwind CSS v4
- Supabase (persistência da waitlist)
- bun (package manager)
- Inter + JetBrains Mono (Google Fonts)

## Dev

```bash
bun install
bun run dev
```

Abre em `http://localhost:3000`.

## Waitlist

O form grava em `public.waitlist` via API Route em `app/api/waitlist/route.ts`.

### Setup Supabase

1. Cria um projeto em https://supabase.com
2. Roda `supabase/schema.sql` no SQL editor
3. Copia `Project URL` e `service_role key`
4. Adiciona como env vars:

```env
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=ey...
```

### Fallback gracioso

Se `SUPABASE_URL` ou `SUPABASE_SERVICE_ROLE_KEY` não estiverem setadas, o
endpoint aceita o email e loga no servidor (`console.log`). Isso evita que a
landing quebre num primeiro deploy antes das envs estarem configuradas.

## Deploy

1. Conectar repo na Vercel
2. Setar `SUPABASE_URL` e `SUPABASE_SERVICE_ROLE_KEY` nas env vars
3. Apontar domínio `pay.kaleidos.com.br`

## Estrutura

```
app/
├── api/waitlist/route.ts    # POST /api/waitlist
├── layout.tsx               # Fonts + metadata + OG
├── page.tsx                 # Landing (todas as seções)
└── globals.css              # Design tokens + utilitários

components/
├── dashboard-mockup.tsx     # Hero visual
├── faq-item.tsx             # Accordion do FAQ
└── waitlist-form.tsx        # Form com states idle/loading/success/error

lib/
└── supabase.ts              # Cliente Supabase admin

public/
├── favicon.svg
└── og.svg                   # Open Graph 1200x630

supabase/
└── schema.sql               # Tabela waitlist + RLS
```
