class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `  
      <header class="header-style-1">
            <nav class="navbar navbar-expand-lg">
               <a class="navbar-brand" href="home-two.html"><h2 style="color:aliceblue">Maruthi Export</h2></a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i class="fas fa-bars"></i> </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                  <li class="nav-item"> <a class="nav-link" href="index.html">Home</a> </li>
                     <li class="nav-item"> <a class="nav-link" href="about.html">About</a> </li>
                     <li class="nav-item"> <a class="nav-link" href="service.html">Service</a> </li>
                     <li class="nav-item"> <a class="nav-link" href="contact.html">Contact</a> </li>
                        
                  </ul>
               </div>
            </nav>
         </header>          
        `;
    }
  }
  
  customElements.define("header-component", Header);
  