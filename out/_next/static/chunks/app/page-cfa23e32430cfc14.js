(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{501:function(e,t,a){Promise.resolve().then(a.bind(a,8641)),Promise.resolve().then(a.bind(a,7927)),Promise.resolve().then(a.bind(a,5879)),Promise.resolve().then(a.bind(a,7985)),Promise.resolve().then(a.bind(a,5303)),Promise.resolve().then(a.bind(a,5469)),Promise.resolve().then(a.bind(a,125)),Promise.resolve().then(a.t.bind(a,1305,23)),Promise.resolve().then(a.t.bind(a,5284,23))},6776:function(e){"use strict";e.exports={SERVICE_ID:"service_4ljn5ji",TEMPLATE_ID:"template_ygu7ngf",USER_ID:"zIl5lI2C-ggIm9W7C"}},5879:function(e,t,a){"use strict";a.r(t);var i=a(9268);a(6006);var s=a(9544),o=a.n(s),r=a(6394),n=a.n(r),c=a(2898),l=a(9505),d=a(7962);t.default=function(){return(0,i.jsxs)("section",{id:"about",className:o().about,children:[(0,i.jsx)("article",{children:(0,i.jsx)(n(),{className:o().image,src:"/computer.png",alt:"Geovanna Img",layout:"responsive",width:450,height:450})}),(0,i.jsxs)("article",{className:o().about_content,children:[(0,i.jsxs)("h2",{children:["Sobre ",(0,i.jsx)("span",{children:"Mim"})]}),(0,i.jsx)("h3",{children:"Desevolvedora Full Stack e Engenheira Qu\xedmica"}),(0,i.jsxs)("div",{children:[(0,i.jsx)(c.Z,{className:o().icon}),(0,i.jsx)("p",{children:"Belo Horizonte - Minas Gerais"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(l.Z,{className:o().icon}),(0,i.jsx)("p",{children:"Engenheira Qu\xedmica pela Universidade Federal de Minas Gerais"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(d.Z,{className:o().icon}),(0,i.jsx)("p",{children:"Estudando Desenvolvimento Web pela Trybe e Sistemas de Informa\xe7\xe3o pela UFMG"})]}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/geovanna-otoni/",className:o().btn,children:"Saiba mais"})]})]})}},125:function(e,t,a){"use strict";a.r(t);var i=a(9268),s=a(6006),o=a(239),r=a(856),n=a.n(r),c=a(1937),l=a.n(c),d=a(6776);t.default=function(){let e={name:"",email:"",phone:"",subject:"",message:""},[t,a]=(0,s.useState)(e),[r,c]=(0,s.useState)(!0),h=()=>{let e=/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i.test(t.email);e?c(!1):c(!0)};(0,s.useEffect)(()=>{o.ZP.init(d.USER_ID)},[]),(0,s.useEffect)(()=>{h()},[t]);let u=e=>{let{target:t}=e;a(e=>({...e,[t.name]:t.value}))},m={from_name:t.name,from_email:t.email,subject:t.subject,message:t.message,phone:t.phone},p=async i=>{i.preventDefault(),console.log(t);try{await o.ZP.send(d.SERVICE_ID,d.TEMPLATE_ID,m),n().fire({title:"Formul\xe1rio enviado com sucesso!",text:"Mensagem de ".concat(t.name," (").concat(t.email,"): ").concat(t.subject),iconColor:"rgb(230, 0, 255)",confirmButtonColor:"rgb(230, 0, 255)",icon:"success",timer:3e3,timerProgressBar:!0,background:"#0f0f11",color:"#fff"})}catch(e){n().fire({title:"Erro ao enviar formul\xe1rio",text:"".concat(e),iconColor:"rgb(230, 0, 255)",confirmButtonColor:"rgb(230, 0, 255)",confirmButtonText:"OK",icon:"error",background:"#0f0f11",color:"#fff"})}a(e)};return(0,i.jsxs)("section",{id:"contact",className:l().contact,children:[(0,i.jsxs)("h2",{children:["Entre em ",(0,i.jsx)("span",{children:"Contato"})]}),(0,i.jsxs)("form",{action:"/api/send-email",method:"POST",onSubmit:p,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"text",name:"name",placeholder:"Seu nome completo",onChange:u,value:t.name}),(0,i.jsx)("input",{type:"email",name:"email",placeholder:"Seu endere\xe7o de email",onChange:u,value:t.email})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("input",{type:"number",name:"phone",placeholder:"N\xfamero de telefone",onChange:u,value:t.phone}),(0,i.jsx)("input",{type:"text",name:"subject",placeholder:"Assunto do email",onChange:u,value:t.subject}),(0,i.jsx)("textarea",{name:"message",id:"",cols:30,rows:10,placeholder:"Insira sua mensagem aqui",onChange:u,value:t.message})]}),(0,i.jsx)("input",{type:"submit",value:"Enviar Mensagem",className:l().btn,disabled:r})]})]})}},8641:function(e,t,a){"use strict";a.r(t);var i=a(9268),s=a(6006),o=a(6520),r=a.n(o),n=a(601),c=a(3964);t.default=function(){let[e,t]=(0,s.useState)(!1),[a,o]=(0,s.useState)("#home"),l=()=>{t(!e)},d=()=>{t(!1)},h=()=>{let e=["#home","#about","#technologies","#projects","#contact"].map(e=>{let t=document.querySelector(e);return{section:e,offsetTop:t.offsetTop,offsetBottom:t.offsetTop+t.offsetHeight}}),t=window.scrollY+window.innerHeight/2,a="#home";e.forEach(e=>{let{section:i,offsetTop:s,offsetBottom:o}=e;t>=s&&t<o&&(a=i)}),o(a)};return(0,s.useEffect)(()=>(window.onscroll=h,()=>{window.onscroll=null}),[]),(0,i.jsxs)("header",{className:r().header,children:[(0,i.jsxs)("a",{href:"",className:r().logo,children:["Geovanna ",(0,i.jsx)("span",{children:"Otoni"})]}),e?(0,i.jsx)(c.Z,{className:r().menu_icon,onClick:l}):(0,i.jsx)(n.Z,{className:r().menu_icon,onClick:l}),(0,i.jsxs)("nav",{className:"".concat(r().navbar," ").concat(e&&r().open),children:[(0,i.jsx)("a",{href:"#home",className:"#home"===a?"".concat(r().active):"",onClick:d,children:"Home"}),(0,i.jsx)("a",{href:"#about",onClick:d,className:"#about"===a?"".concat(r().active):"",children:"Sobre mim"}),(0,i.jsx)("a",{href:"#technologies",onClick:d,className:"#technologies"===a?"".concat(r().active):"",children:"Tecnologias"}),(0,i.jsx)("a",{href:"#projects",onClick:d,className:"#projects"===a?"".concat(r().active):"",children:"Projetos"}),(0,i.jsx)("a",{href:"#contact",onClick:d,className:"#contact"===a?"".concat(r().active):"",children:"Contato"})]})]})}},7927:function(e,t,a){"use strict";a.r(t);var i=a(9268);a(6006);var s=a(6394),o=a.n(s),r=a(1926),n=a.n(r),c=a(7355),l=a(6182),d=a(838);t.default=function(){return(0,i.jsxs)("section",{id:"home",className:n().hero,children:[(0,i.jsxs)("article",{className:n().hero_content,children:[(0,i.jsx)("h3",{children:"Ol\xe1, meu nome \xe9"}),(0,i.jsx)("h1",{children:"Geovanna Otoni"}),(0,i.jsxs)("h3",{children:["Sou ",(0,i.jsx)("span",{children:"Desenvolvedora Full Stack"})]}),(0,i.jsx)("p",{children:"E completamente apaixonada por tecnologia."}),(0,i.jsxs)("div",{className:n().social_media,children:[(0,i.jsx)("a",{href:"https://github.com/geovannaotoni",children:(0,i.jsx)(c.Z,{className:n().social_media_icon})}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/geovanna-otoni/",children:(0,i.jsx)(l.Z,{className:n().social_media_icon})}),(0,i.jsx)("a",{href:"mailto:geovannaotoni@gmail.com",children:(0,i.jsx)(d.Z,{className:n().social_media_icon})})]}),(0,i.jsx)("a",{href:"#",className:n().btn_cv,onClick:()=>{window.open("/pdfs/CV.pdf","_blank")},children:"Download CV"})]}),(0,i.jsx)("article",{children:(0,i.jsx)(o(),{className:n().image,src:"/profile-pic.jpeg",alt:"Geovanna Img",width:450,height:450,style:{border:"3px solid rgb(230, 0, 255)",borderRadius:"50%",boxShadow:"0 0 0.5rem rgb(230, 0, 255)"}})})]})}},5469:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var i=a(9268);a(6006);var s=a(558),o=a.n(s),r=a(8563);a(9146),a(5926);var n=a(5252),c=a.n(n),l=[{id:1,title:"App de M\xfasicas",src:"https://github.com/geovannaotoni/trybe-project-trybetunes",img:{src:"/_next/static/media/TrybeTunes.c79e67c9.png",height:862,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/APz//tLV9WVn5YGI6oON6X2h53iq53S65QD//f/h7uNnwqmztMvQr5KZtZHiraPU3eAA////7uzsub+5s83Sys3K3OPLz9Da1MjNAP////Hj57aRenG4sKzHwOftuLbV5MWenWNrSku77j4+AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},deploy:"https://geovannaotoni-trybetunes.surge.sh/",tecnologies:["CSS","HTML","JavaScript","JSX","React","React Router Dom","Componentes de Classe","PropTypes","NPM","Requisi\xe7\xf5es via API"],description:"Projeto em React de um site de m\xfasicas. Ao utilizar essa aplica\xe7\xe3o, a pessoa usu\xe1ria \xe9 capaz de pesquisar albuns de artistas/bandas, visualizar e reproduzir as m\xfasicas de cada album, criar uma lista de m\xfasicas favoritas e editar o perfil logado no site."},{id:2,title:"Jogo Trivia",src:"https://github.com/geovannaotoni/trybe-project-trivia",img:{src:"/_next/static/media/TriviaGame.001017b5.png",height:859,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAX0lEQVR42mNYMHP1iiVbNx47uPXssW3nTuw6d2L9qh3zZ6xmAIJpffNevHx75+6D23fvP3/xZmrPPAYImD970bdP316/eAVEQAaQC5WoLK/at2f/9q07gAjIAHIZGBgAAMI5m4cXL4cAAAAASUVORK5CYII=",blurWidth:8,blurHeight:4},deploy:"https://geovannaotoni-trivia-game.surge.sh/",tecnologies:["CSS","HTML","JavaScript","JSX","React","React Router Dom","Redux","Testes com React-Testing-Library","Componentes de Classe","PropTypes","NPM","Requisi\xe7\xf5es via API"],description:"Projeto que consiste em um jogo de perguntas e respostas baseado no jogo Trivia. A aplica\xe7\xe3o permite que a pessoa usu\xe1ria possa logar no jogo e escolher uma das respostas dispon\xedveis para cada uma das perguntas apresentadas. A resposta deve ser marcada antes do contador de tempo chegar a zero. Ao final de cada jogo, pode-se visualizar o ranking."},{id:3,title:"App de Receita",src:"https://github.com/geovannaotoni/trybe-project-recipes-app",img:{src:"/_next/static/media/RecipesApp.aaf68a6b.png",height:865,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AOp/b9KAX8yKXOKJceuVduB/cud+b+OAawDbZkLNfWb78vD79fT79fP38fHbfmrOXz8A53ln1odw9/Pw/vj4/fj4+/Tz5Yd64XhjANpoR89zU+OJbOV9Zd14Y8ltZdhwWM1iRMQYQFCQB8KMAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},deploy:"https://recipes-app-group-1.surge.sh/",tecnologies:["CSS","JavaScript","HTML","React","React Router Dom","Context API","React Hooks","Testes com React-Testing-Library","Componentes Funcionais","PropTypes","NPM","Requisi\xe7\xf5es via API"],description:"Projeto que consiste em um app de receitas, criado utilizando Hooks e Context API. Nessa aplica\xe7\xe3o \xe9 poss\xedvel ver, buscar, filtrar, favoritar e acompanhar o progresso de prepara\xe7\xe3o de receitas de comidas e bebidas. A base de dados foram 2 APIs distintas, uma para comidas e outra para bebidas. Tamb\xe9m foram utilizadas ferramentas de metodologias \xe1geis, como Kanban e SCRUM."},{id:4,title:"Controle de Gastos",src:"https://github.com/geovannaotoni/trybe-project-trybewallet",img:{src:"/_next/static/media/trybewallet-gif.fac33ba3.gif",height:856,width:1915,blurWidth:0,blurHeight:0},deploy:"https://geovannaotoni-trybewallet.surge.sh/",tecnologies:["CSS","JavaScript","HTML","React","React Router Dom","Redux","Redux-Thunk","Testes com React-Testing-Library","Componentes de Classe","PropTypes","NPM","Requisi\xe7\xf5es via API"],description:"Projeto em React de uma carteira de controle de gastos com conversor de moeda, utilizando a API Economia. Ao utilizar essa aplica\xe7\xe3o, a pessoa usu\xe1ria \xe9 capaz de adicionar, remover e editar um gasto, visualizar uma tabelas com seus gastos e visualizar o total de gastos convertidos para uma moeda de escolha. Para a estiliza\xe7\xe3o do projeto, foi utilizado o framework do Bootstrap."},{id:5,title:"StarWars Planets",src:"https://github.com/geovannaotoni/trybe-project-starwars",img:{src:"/_next/static/media/starwars-gif.7a7ac1b2.gif",height:895,width:1918,blurWidth:0,blurHeight:0},deploy:"https://geovannaotoni-starwars-planets.surge.sh/",tecnologies:["CSS","JavaScript","HTML","React","React Router Dom","Context API","React Hooks","Testes com React-Testing-Library","Componentes Funcionais","PropTypes","NPM","Requisi\xe7\xf5es via API"],description:"Projeto que exibe uma lista com filtros dos planetas do universo de Star Wars. Foram utilizados Context API e Hooks para controlar os estados globais e a base de dados foi a API swapi.dev/api/planets. Al\xe9m disso, foram escritos testes com a React Testing Library para garantir que a aplica\xe7\xe3o possua uma boa cobertura de testes."},{id:6,title:"Loja Online",src:"https://github.com/geovannaotoni/trybe-project-frontend-online-store",img:{src:"/_next/static/media/frontend-online-store-gif.5eff31b4.gif",height:883,width:1915,blurWidth:0,blurHeight:0},deploy:"https://geovannaotoni-online-store.surge.sh/",tecnologies:["CSS","JavaScript","HTML","React","React Router Dom","Componentes de Classe","PropTypes","NPM","Requisi\xe7\xf5es via API"],description:"Projeto em React feito em grupo de uma vers\xe3o simplificada de um ecommerce. Ao utilizar essa aplica\xe7\xe3o, a pessoa usu\xe1ria \xe9 capaz de buscar produtos por termos e categorias a partir da API do Mercado Livre, interagir com os produtos buscados de modo a adicion\xe1-los e remov\xea-los de um carrinho de compras em diferentes quantidades, visualizar detalhes e avalia\xe7\xf5es pr\xe9vias de um produto, bem como criar novas avalia\xe7\xf5es, al\xe9m de simular a finaliza\xe7\xe3o da compra dos itens selecionados."}],d=a(2757),h=a(6394),u=a.n(h),m=a(7355),p=()=>(0,i.jsx)(r.Z,{dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:5e3,speed:500,slidesToShow:1,slidesToScroll:1,className:c().carousel,children:l.map((e,t)=>(0,i.jsxs)("article",{className:c().article,children:[(0,i.jsx)(u(),{className:c().image,src:e.img,layout:"responsive",alt:"Project Img"}),(0,i.jsxs)("div",{className:c().project_content,children:[(0,i.jsx)("h4",{children:e.title}),(0,i.jsx)("p",{children:e.description}),(0,i.jsxs)("div",{className:c().links,children:[(0,i.jsxs)("a",{href:e.src,children:[(0,i.jsx)(m.Z,{className:c().icon}),"Reposit\xf3rio"]}),(0,i.jsxs)("a",{href:e.deploy,children:[(0,i.jsx)(d.Z,{className:c().icon})," Deploy"]})]})]})]},t))}),g=function(){return(0,i.jsxs)("section",{className:o().projects,id:"projects",children:[(0,i.jsxs)("h2",{children:["Principais ",(0,i.jsx)("span",{children:"Projetos"})]}),(0,i.jsx)("div",{className:o().projects_container,children:(0,i.jsx)(p,{})})]})}},5303:function(e,t,a){"use strict";a.r(t);var i=a(9268),s=a(6006),o=a(3414),r=a(4626),n=a.n(r);t.default=function(){let[e,t]=(0,s.useState)(!1),a=()=>{let e=document.documentElement.scrollTop;t(e>100)};return(0,s.useEffect)(()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)}),[]),(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)("button",{className:n().upward,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:(0,i.jsx)(o.Z,{className:n().icon})})})}},7985:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var i=a(9268);a(6006);var s=a(2994),o=a.n(s),r=a(8823),n=a(3683),c=a(6394),l=a.n(c),d=[{src:"/_next/static/media/-GIT-323946.9e9503f4.svg",height:28,width:68,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-HTML5-323946.45932eb1.svg",height:28,width:88,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-CSS3-323946.c3196f2a.svg",height:28,width:77,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-JAVASCRIPT-323946.fe867c37.svg",height:28,width:127,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-TYPESCRIPT-323946.03e51055.svg",height:28,width:127,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-ReactJS-323946.566f6925.svg",height:28,width:102,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-NEXT.9af1935c.svg",height:28,width:99,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-REDUX-323946.8a9ef9e2.svg",height:28,width:88,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-JEST-323946.4e59ae03.svg",height:28,width:75,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-TESTING LIBRARY-323946.315091e6.svg",height:28,width:166,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-VITE-323946.41a5909e.svg",height:28,width:75,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-BOOTSTRAP-323946.92fbd76f.svg",height:28,width:123,blurWidth:0,blurHeight:0}],h=[{src:"/_next/static/media/-DOCKER-323946.26e7ee82.svg",height:28,width:98,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-MYSQL-323946.691f6a1e.svg",height:28,width:88,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-NODEJS-323946.d6d6a2c8.svg",height:28,width:96,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-NODEMON-323946.a60b85f2.svg",height:28,width:111,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-EXPRESS-323946.7372e902.svg",height:28,width:103,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-npm-323946.c18ae0b9.svg",height:28,width:73,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-Sequelize-323946.6bf7b2fe.svg",height:28,width:117,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-Chai-323946.7901e54d.svg",height:28,width:77,blurWidth:0,blurHeight:0},{src:"/_next/static/media/-Mocha-323946.a75b725e.svg",height:28,width:91,blurWidth:0,blurHeight:0}],u=function(){return(0,i.jsxs)("section",{id:"technologies",className:o().tech,children:[(0,i.jsxs)("h2",{children:["Habilidades ",(0,i.jsx)("span",{children:"T\xe9cnicas"})]}),(0,i.jsxs)("div",{className:o().tech_container,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(r.Z,{className:o().icon}),(0,i.jsx)("h3",{children:"Front-End"}),(0,i.jsx)("div",{children:d.map(e=>(0,i.jsx)(l(),{src:e,className:o().image,layout:"responsive",alt:"",width:10,height:10}))})]}),(0,i.jsxs)("article",{children:[(0,i.jsx)(n.Z,{className:o().icon}),(0,i.jsx)("h3",{children:"Back-End"}),(0,i.jsx)("div",{children:h.map(e=>(0,i.jsx)(l(),{src:e,className:o().image,layout:"responsive",alt:"",width:10,height:10}))})]})]})]})}},1305:function(){},9544:function(e){e.exports={about_content:"About_about_content__w0hUt",btn:"About_btn__os8hv",about:"About_about__5Iyot",icon:"About_icon__Td8Nm",image:"About_image__dpkKY"}},1937:function(e){e.exports={contact:"Contact_contact__k_BUL",btn:"Contact_btn__Kt_eY"}},5284:function(e){e.exports={footer:"Footer_footer__4vzqH"}},6520:function(e){e.exports={header:"Header_header__AF_3G",logo:"Header_logo__1FRrW",navbar:"Header_navbar__p52_S",active:"Header_active__8Eipm",menu_icon:"Header_menu_icon___KaAd",open:"Header_open__jNVWy"}},1926:function(e){e.exports={hero:"Hero_hero__1d92z",hero_content:"Hero_hero_content__i_0jx",social_media_icon:"Hero_social_media_icon__3ZB7b",btn_cv:"Hero_btn_cv__dbJwL",image:"Hero_image__5_3pO",moveUpAndDown:"Hero_moveUpAndDown__Yp5pN"}},5252:function(e){e.exports={carousel:"PortfolioCarousel_carousel__D_4zN",article:"PortfolioCarousel_article__Xs1jv",project_content:"PortfolioCarousel_project_content__ErqFe",links:"PortfolioCarousel_links__qfpv7",icon:"PortfolioCarousel_icon__TBYtJ"}},558:function(e){e.exports={projects:"Projects_projects__jsAo6",projects_container:"Projects_projects_container__q3ZQY"}},4626:function(e){e.exports={upward:"ScrollButton_upward__q2UW2",icon:"ScrollButton_icon__dtIPp"}},2994:function(e){e.exports={tech:"Technologies_tech__zj68q",tech_container:"Technologies_tech_container__DltHz",icon:"Technologies_icon__4VwuV",image:"Technologies_image__qUveo"}}},function(e){e.O(0,[662,253,698,744],function(){return e(e.s=501)}),_N_E=e.O()}]);