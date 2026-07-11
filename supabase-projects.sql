create table if not exists public.projects (
  id text primary key,
  "order" integer not null default 0,
  nomePT text not null,
  nomeEN text not null,
  descricaoPT text not null,
  descricaoEN text not null,
  link text not null,
  linkImage text not null,
  skills text[] not null default '{}',
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

create policy "Public read access for projects"
  on public.projects
  for select
  using (true);

insert into public.projects (id, descricaoEN, descricaoPT, link, linkImage, nomeEN, nomePT, "order", skills)
values
  (
    'qMxwQWG5wUFo31YtGlXB',
    'Website created for food companies with the aim of registering orders and allowing customers to place orders through e-commerce.',
    'Site criado para empresas do ramo alimenticio com o objetivo de registrar pedidos e para que os clientes possam efetuar o pedido pelo e-commerce',
    'https://famintos-la-pasta-admin.vercel.app',
    'https://static.expressodelivery.com.br/imagens/logos/518571/Expresso-Delivery_f693af38dd53d727449ba546ef4c4db0.jpeg',
    'E-commerce for food companies',
    'E-commerce para empresas do ramo alimenticio',
    1,
    array[
      'https://simpleicons.org/icons/pwa.svg',
      'https://simpleicons.org/icons/react.svg',
      'https://simpleicons.org/icons/typescript.svg',
      'https://simpleicons.org/icons/mui.svg',
      'https://simpleicons.org/icons/tailwindcss.svg',
      'https://simpleicons.org/icons/supabase.svg',
      'https://simpleicons.org/icons/reacthookform.svg',
      'https://simpleicons.org/icons/vite.svg',
      'https://simpleicons.org/icons/zod.svg',
      'https://simpleicons.org/icons/dotenv.svg',
      'https://simpleicons.org/icons/vercel.svg'
    ]::text[]
  ),
  (
    'GpgmgwFxQz9eqzPpcfCY',
    'Project created with the goal of talk about me and what I\'ve already done',
    'Projeto criado com o intuito de falar sobre mim e o que já fiz',
    'https://github.com/guicrisostomo/my-site',
    'https://cdn-icons-png.flaticon.com/512/5234/5234318.png',
    'My portfolio',
    'Meu portfólio',
    2,
    array[
      'https://simpleicons.org/icons/javascript.svg',
      'https://simpleicons.org/icons/react.svg',
      'https://simpleicons.org/icons/styledcomponents.svg'
    ]::text[]
  ),
  (
    '1ztsKfqoHWzpZzV5qTB0',
    'App\'s create with the goal of to help in the organization of my routine and my objectives daily and weekly (work in progress)',
    'Aplicativo em processo de criação com o intuito de facilitar na organização de horários e metas diárias/semanais',
    'https://github.com/guicrisostomo/hour',
    'https://www.seekpng.com/png/full/6-63753_working-routine-art-printed-wall-clock-routine-clock.png',
    'My hour',
    'My hour',
    2,
    array[
      'https://simpleicons.org/icons/flutter.svg',
      'https://simpleicons.org/icons/django.svg',
      'https://simpleicons.org/icons/firebase.svg'
    ]::text[]
  ),
  (
    '3fgtAAg2futNxN9jNt3L',
    'App created with the goal of help me with in the addition and edition of my projects',
    'Aplicativo criado com o objetivo de me auxiliar na criação e edição de meus projetos',
    'https://github.com/guicrisostomo/app-help-me-projects',
    'https://cdn-icons-png.flaticon.com/512/1087/1087815.png',
    'App for addition and edition of my projects',
    'Aplicativo para adição e edição de meus projetos',
    3,
    array[
      'https://simpleicons.org/icons/flutter.svg',
      'https://simpleicons.org/icons/firebase.svg'
    ]::text[]
  ),
  (
    '7i4hYRclQpFw1fsXx0qg',
    'Site created with the goal of encrypted and decrypted texts',
    'Site criado com o intuito de encriptar e decriptar textos',
    'https://github.com/guicrisostomo/application-RSAcryptography',
    'https://cartilhacriptografia.direitosnarede.org.br/img/hero.png',
    'RSA cryptography',
    'Criptografia RSA',
    4,
    array[
      'https://simpleicons.org/icons/nextdotjs.svg',
      'https://simpleicons.org/icons/typescript.svg',
      'https://simpleicons.org/icons/tailwindcss.svg'
    ]::text[]
  ),
  (
    'rMnEzfWZQ8H19ojbqqcb',
    'Project created in the bootcamp MRV FullStack Developer of the DIO with a goal of to copy screens of app "Ifood"',
    'Projeto criado no bootcamp MRV FullStack Developer da DIO com o objetivo de copiar as telas do aplicativo "Ifood"',
    'https://github.com/guicrisostomo/Projetos-DIO/tree/master/React/Desafio%20-%20criando%20interface%20do%20iFood',
    'https://logopng.com.br/logos/ifood-43.svg',
    'Clone Ifood',
    'Clone Ifood',
    5,
    array[
      'https://simpleicons.org/icons/html5.svg',
      'https://simpleicons.org/icons/css3.svg',
      'https://simpleicons.org/icons/javascript.svg',
      'https://simpleicons.org/icons/react.svg'
    ]::text[]
  ),
  (
    'SUy6VRX9T6Hq1eLMhWJW',
    'Project created in the bootcamp MRV FullStack Developer of the DIO about register of series',
    'Projeto criado no bootcamp MRV FullStack Developer da DIO sobre cadastro de séries',
    'https://github.com/guicrisostomo/Projetos-DIO/tree/master/C%23/Desafio%20-%20Criando%20app%20de%20cadastro%20de%20s%C3%A9ries',
    'https://www.imagensempng.com.br/wp-content/uploads/2021/09/02-37.png',
    'App register of series',
    'Aplicativo de cadastro de séries',
    6,
    array[
      'https://simpleicons.org/icons/csharp.svg',
      'https://simpleicons.org/icons/dotnet.svg'
    ]::text[]
  ),
  (
    '0CXa7IXebUezuDcK1OSd',
    'Project created in the bootcamp MRV FullStack Developer of the DIO about a game of starships',
    'Projeto criado no bootcamp MRV FullStack Developer da DIO sobre a game de naves',
    'https://github.com/guicrisostomo/Projetos-DIO/tree/master/JavaScript/Desafio%20-%20construindo%20jogo%20de%20naves',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Oxygen480-apps-preferences-desktop-gaming.svg/2048px-Oxygen480-apps-preferences-desktop-gaming.svg.png',
    'Game of starships',
    'Jogo de naves',
    7,
    array[
      'https://simpleicons.org/icons/html5.svg',
      'https://simpleicons.org/icons/css3.svg',
      'https://simpleicons.org/icons/javascript.svg'
    ]::text[]
  )
on conflict (id) do update set
  descricaoEN = excluded.descricaoEN,
  descricaoPT = excluded.descricaoPT,
  link = excluded.link,
  linkImage = excluded.linkImage,
  nomeEN = excluded.nomeEN,
  nomePT = excluded.nomePT,
  "order" = excluded."order",
  skills = excluded.skills;
