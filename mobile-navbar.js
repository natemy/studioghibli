class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    // Aqui, definimos os elementos do menu que queremos controlar.
    // O "mobileMenu" é o ícone do menu (hamburguer), "navList" é a lista de links e "navLinks" são os links individuais.

    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);

    // "activeClass" é uma espécie de sinal que usaremos para mostrar que algo está ativo (no caso, o menu).
    this.activeClass = "active";

    // Aqui, estamos dizendo que quando o ícone do menu for clicado, queremos que a função "handleClick" seja chamada,
    // mas queremos ter certeza de que a função "handleClick" entenda corretamente o que é "this".
    // Portanto, estamos "amarrando" a função "handleClick" a esta instância da classe, para evitar confusões.
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    // Aqui, estamos indo por cada link na lista de links (por exemplo, "Início", "Sobre nós", etc.).
    this.navLinks.forEach((link, index) => {
      // O código a seguir verifica se o link já tem alguma animação.
      // Se tiver, nós a removemos, se não, nós adicionamos uma animação de "desvanecer" gradualmente.
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    // Quando o ícone do menu é clicado, essa função é chamada.

    // Aqui, estamos alternando a classe "active" na lista de links e no ícone do menu.
    // Isso faz com que o menu apareça ou desapareça, dependendo do estado atual.
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);

    // Além disso, estamos chamando a função "animateLinks" para fazer com que os links apareçam de maneira suave e agradável.
    this.animateLinks();
  }

  addClickEvent() {
    // Aqui, estamos dizendo que sempre que o ícone do menu for clicado,
    // a função "handleClick" que definimos anteriormente deve ser executada.
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    // Esta função inicia o processo.

    // Primeiro, verificamos se o ícone do menu realmente existe na página.
    // Se existir, chamamos a função "addClickEvent" para permitir que o menu seja clicado e o controle seja ativado.
    if (this.mobileMenu) {
      this.addClickEvent();
    }

    // No final, retornamos "this", que se refere a esta instância da classe "MobileNavbar".
    // Isso permite que possamos fazer mais coisas, se necessário, com essa instância no futuro.
    return this;
  }
}

// Aqui, estamos criando uma nova instância da classe "MobileNavbar".
// Estamos passando os seletores CSS que correspondem aos elementos do menu em nossa página.

// Em outras palavras, estamos dizendo ao "assistente" (a classe MobileNavbar) onde encontrar o botão de menu,
// a lista de links e os links individuais.
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);

// Finalmente, estamos chamando a função "init" para iniciar o processo.
// Isso faz com que o menu seja configurado para funcionar corretamente em telas menores.
mobileNavbar.init();