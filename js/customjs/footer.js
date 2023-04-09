class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `  
      <footer class="footer-style-2">
      <div class="footer-copyr wf100">
         <div class="container">
            <div class="row">
               <div class="col-md-8 col-sm-8">
                  <p ><a target="_blank" href="#" style="color:aliceblue">@ Copyright Maruthi Export - 2023</a></p>
               </div>
            </div>
         </div>
      </div>
   </footer>      
        `;
    }
  }
  
  customElements.define("footer-component", Footer);