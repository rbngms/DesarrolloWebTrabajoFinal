


////////CLIENTES
let Clientes = [
        {nombre:"Banco de credito" ,categoria:"Basico",Pais:"Peru",codigo:101},
        {nombre:"Banco Continental",categoria:"Top",Pais:"Chile",codigo:201},
        {nombre:"Scotia Bank" ,categoria:"Vip",Pais:"Peru",codigo:301},
        {nombre: "Banco Falabella",categoria:"Premium",Pais:"Chile",codigo:401},
    
]

////ARRAY HTML


function lideres() {
let data = ['Facebook ads: Ruben / rgaray@benkio.pe', 'Google ads: Pepe / rsegovia@benkio.pe', 'Diseño Web: Jimena / jmujica@benkio.pe', 'Piezas Digitales: Sandra / sfernandez@benkio.pe' ];

let list = document.getElementById("myList");

data.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});
}
///// PRODUCTOS 

class Producto {
    constructor ( nombre , precio) {
        this.nombre = nombre;
        this.precio=precio;
    }
    igv () {

        this.precio = this.precio * 0.18 + this.precio;
        console.log("el Precio con IGV de", this.nombre,"es: ", this.precio);
    }
}


let desarrollo_web = new Producto ("Desarrollo Web" , 4500);
let diseno_grafico = new Producto ("Diseño grafico" , 8400);
let seo_web = new Producto ("Seo web" , 4700);
let customer_experience = new Producto ("Customer Experience" , 7800);
let desarrollo_app = new Producto ("Desarrollo App" , 10500);
let ux_experience = new Producto ("User Experience" , 5400);
let diseno_productos = new Producto ("Diseño productos" , 7700);
let analitica_digital = new Producto ("Analitica Digital" , 9800);



///ARRAYS


let listaequipoPeru = [ [ "Peru", ["Facebook Ads", ["Ruben", "Oscar", "Luis", "Catalina"]], ["Google Ads", ["Pepe", "Mariana", "Deborah", "Renzo"]],["Diseno Web", ["Cesar", "Jenifer", "Juan Diego", "Brenda"]],["Piezas Digitales", ["Daniel", "Adriana", "Nuria", "Jimena"]]]]
let listaequipoChile = [ [ "Chile", ["Facebook Ads", ["Ruben", "Oscar", "Luis", "Catalina"]], ["Google Ads", ["Pepe", "Mariana", "Deborah", "Renzo"]],["Diseno Web", ["Cesar", "Jenifer", "Juan Diego", "Brenda"]],["Piezas Digitales", ["Daniel", "Adriana", "Nuria", "Jimena"]]]]


function validar_listaPais () {
    if (listaPais == "PERU"){
        for ( let i=0 ; i <listaequipoPeru.length ; i++) {
            console.log ("Nuestro equipo de trabajo en PERU es:", listaequipoPeru [i])
        }
    }
    else if (listaPais == "CHILE"){
        for ( let i=0 ; i <listaequipoChile.length ; i++) {
            console.log ("Nuestro equipo de trabajo en CHILE es:", listaequipoChile [i])
        }
    }
    else {
        console.log("No tenemos equipos de trabajo en los paises indicados");
    }
}

validar_listaPais(listaPais);



////LOGIN


function login () {

    let nombre = document.getElementById("nombre_usuario");
    let pass = document.getElementById("pass_usuario");
    
    if ( nombre.value == "Banco de credito" && pass.value == 101 ) {   
        let caja = document.getElementById("caja");

        caja.innerHTML =  ` 
        <div class="page-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 py-3">
              <div class="title-section"> <h2><span class="fg-primary">Bienvenido ${nombre.value}</span></h2></div>
              <h3 class="subhead">Somos un <span class="fg-primary"> Equipo de Profesionales</span> que hará crecer tu negocio</h3>
  
              <p>Nosotros construimos estrategias efectivas para ayudarte a conseguir clientes. Utilizando herramientas como el social media, media planning y 
                creación de contenidos en diferentes formatos.</p>

              <h2><p>Deja tu requerimiento aquí</p></h2>

                <a href="./requerimiento.html" class="btn btn-primary mt-4">Ir ahora</a>

            </div>
            <div class="col-lg-6 py-3">
              <div class="about-img">
                <img src="../recursos/img/fotoequipo.jpg" alt="">
              </div>
            </div>
          </div>
        </div> 
      </div>
      
        
      <div class="page-section">
      <div class="container">
        <div class="text-center">
        <div class="title-section"> <h2 class="title-section">${nombre.value} </h2>
         <h2><span class="fg-primary"> No olvides que podemos ayudarte con :</span></h2></div>
        </div>

        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/web_development.svg" alt="">
              </div>
              <h5>Desarrollo Web</h5>
              
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/graphics_design.svg" alt="">
              </div>
              <h5>Diseño Grafico</h5>
             
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/seo_and_marketing.svg" alt="">
              </div>
              <h5>SEO</h5>
            
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/customer_services.svg" alt="">
              </div>
              <h5>Customer Experience</h5>
              
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/app_development.svg" alt="">
              </div>
              <h5>Desarrollo App</h5>
          
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/ui_ux_design.svg" alt="">
              </div>
              <h5>UI/UX</h5>
              
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/product_design.svg" alt="">
              </div>
              <h5>Diseño productos</h5>
            
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/data_analyst.svg" alt="">
              </div>
              <h5>Analitica</h5>
             
            </div>
          </div>
         
          <a href="./contacto.html" class="btn btn-primary mt-4">Contactar ahora</a>
        </div>
      </div> 
    </div>
                          
                          ` ;
    }       

    else if ( nombre.value == "Banco Continental" && pass.value == 201 ) {
       
        let caja = document.getElementById("caja");
        caja.innerHTML =  ` <div class="page-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 py-3">
              <div class="title-section"> <h2><span class="fg-primary">Bienvenido ${nombre.value}</span></h2></div>
              <h3 class="subhead">Somos un <span class="fg-primary"> Equipo de Profesionales</span> que hará crecer tu negocio</h3>
  
              <p>Nosotros construimos estrategias efectivas para ayudarte a conseguir clientes. Utilizando herramientas como el social media, media planning y 
                creación de contenidos en diferentes formatos.</p>

                <h2><p>Deja tu requerimiento aquí</p></h2>

                <a href="./requerimiento.html" class="btn btn-primary mt-4">Ir ahora</a>


            </div>
            <div class="col-lg-6 py-3">
              <div class="about-img">
                <img src="../recursos/img/fotoequipo.jpg" alt="">
              </div>
            </div>
          </div>
        </div> 
      </div>
        
      <div class="page-section">
      <div class="container">
        <div class="text-center">
        <div class="title-section"> <h2 class="title-section">${nombre.value} </h2>
         <h2><span class="fg-primary"> No olvides que podemos ayudarte con :</span></h2></div>
          
        </div>

        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/web_development.svg" alt="">
              </div>
              <h5>Desarrollo Web</h5>
              
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/graphics_design.svg" alt="">
              </div>
              <h5>Diseño Grafico</h5>
             
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/seo_and_marketing.svg" alt="">
              </div>
              <h5>SEO</h5>
            
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/customer_services.svg" alt="">
              </div>
              <h5>Customer Experience</h5>
              
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/app_development.svg" alt="">
              </div>
              <h5>Desarrollo App</h5>
          
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/ui_ux_design.svg" alt="">
              </div>
              <h5>UI/UX</h5>
              
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/product_design.svg" alt="">
              </div>
              <h5>Diseño productos</h5>
            
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/data_analyst.svg" alt="">
              </div>
              <h5>Analitica</h5>
             
            </div>
          </div>
          
          <a href="./contacto.html" class="btn btn-primary mt-4">Contactar ahora</a>
        </div>
      </div> 
    </div>`;
    }         
    
    else if ( nombre.value == "Scotia Bank" && pass.value == 301 ) {
        let caja = document.getElementById("caja");
        caja.innerHTML =  ` <div class="page-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 py-3">
              <div class="title-section"> <h2><span class="fg-primary">Bienvenido ${nombre.value}</span></h2></div>
              <h3 class="subhead">Somos un <span class="fg-primary"> Equipo de Profesionales</span> que hará crecer tu negocio</h3>
  
              <p>Nosotros construimos estrategias efectivas para ayudarte a conseguir clientes. Utilizando herramientas como el social media, media planning y 
                creación de contenidos en diferentes formatos.</p>

                <h2><p>Deja tu requerimiento aquí</p></h2>

                <a href="./requerimiento.html" class="btn btn-primary mt-4">Ir ahora</a>


            </div>
            <div class="col-lg-6 py-3">
              <div class="about-img">
                <img src="../recursos/img/fotoequipo.jpg" alt="">
              </div>
            </div>
          </div>
        </div> 
      </div>
        
      <div class="page-section">
      <div class="container">
        <div class="text-center">
        <div class="title-section"> <h2 class="title-section">${nombre.value} </h2>
         <h2><span class="fg-primary"> No olvides que podemos ayudarte con :</span></h2></div>
          
        </div>

        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/web_development.svg" alt="">
              </div>
              <h5>Desarrollo Web</h5>
              
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/graphics_design.svg" alt="">
              </div>
              <h5>Diseño Grafico</h5>
             
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/seo_and_marketing.svg" alt="">
              </div>
              <h5>SEO</h5>
            
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/customer_services.svg" alt="">
              </div>
              <h5>Customer Experience</h5>
              
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/app_development.svg" alt="">
              </div>
              <h5>Desarrollo App</h5>
          
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/ui_ux_design.svg" alt="">
              </div>
              <h5>UI/UX</h5>
              
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/product_design.svg" alt="">
              </div>
              <h5>Diseño productos</h5>
            
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/data_analyst.svg" alt="">
              </div>
              <h5>Analitica</h5>
             
            </div>
          </div>
         
          <a href="./contacto.html" class="btn btn-primary mt-4">Contactar ahora</a>
        </div>
      </div> 
    </div>`;
    }         
    
    else if ( nombre.value == "Banco Falabella" && pass.value == 401 ) {
       
        let caja = document.getElementById("caja");
       
        caja.innerHTML =  ` <div class="page-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 py-3">
              <div class="title-section"> <h2><span class="fg-primary">Bienvenido ${nombre.value}</span></h2></div>
              <h3 class="subhead">Somos un <span class="fg-primary"> Equipo de Profesionales</span> que hará crecer tu negocio</h3>
  
              <p>Nosotros construimos estrategias efectivas para ayudarte a conseguir clientes. Utilizando herramientas como el social media, media planning y 
                creación de contenidos en diferentes formatos.</p>

                <h2><p>Deja tu requerimiento aquí</p></h2>

                <a href="./requerimiento.html" class="btn btn-primary mt-4">Ir ahora</a>


              
            </div>
            <div class="col-lg-6 py-3">
              <div class="about-img">
                <img src="../recursos/img/fotoequipo.jpg" alt="">
              </div>
            </div>
          </div>
        </div> 
      </div>
        
      <div class="page-section">
      <div class="container">
        <div class="text-center">
        <div class="title-section"> <h2 class="title-section">${nombre.value} </h2>
         <h2><span class="fg-primary"> No olvides que podemos ayudarte con :</span></h2></div>
          
        </div>

        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/web_development.svg" alt="">
              </div>
              <h5>Desarrollo Web</h5>
              
            </div>
          </div>
          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/graphics_design.svg" alt="">
              </div>
              <h5>Diseño Grafico</h5>
             
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/seo_and_marketing.svg" alt="">
              </div>
              <h5>SEO</h5>
            
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/customer_services.svg" alt="">
              </div>
              <h5>Customer Experience</h5>
              
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/app_development.svg" alt="">
              </div>
              <h5>Desarrollo App</h5>
          
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/ui_ux_design.svg" alt="">
              </div>
              <h5>UI/UX</h5>
              
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/product_design.svg" alt="">
              </div>
              <h5>Diseño productos</h5>
            
            </div>
          </div>

          <div class="col-md-6 col-lg-4 col-xl-3 py-3 mb-3">
            <div class="text-center">
              <div class="img-fluid mb-4">
                <img src="../recursos/img/icons/data_analyst.svg" alt="">
              </div>
              <h5>Analitica</h5>
             
            </div>
          </div>
         
          <a href="./contacto.html" class="btn btn-primary mt-4">Contactar ahora</a>
        </div>
      </div> 
    </div>`;
    }             


    else {
        let caja = document.getElementById ("caja");
        let mensaje = document.createElement("p");
        mensaje.innerText="Por favor comuníquese con su ejecutivo para que le indique sus credenciales";
        mensaje.style.color = "Black";
        mensaje.style.fontSize = "20px";
        caja.appendChild(mensaje);
    }
    console.log (nombre.value) ;
    console.log (pass.value) ;
}

let boton = document.getElementById("boton_Registro")
function registro () {

        let caja = document.getElementById("caja");
        ///caja.innerHTML = "<p> El nombre del usuario es : " + nombre.value + "<p> Y el apellido es:" + pass.value;
        ///alert("Bienvenido al sistema");
        caja.innerHTML =  `  <div class="container">
        <div class="text-center">
          <h2 class="title-section mb-3">Contáctanos</h2>
          <p>Cuéntanos cómo podemos ayudarte, tambíen puedes enviarnos un mail a <a href="mailto:example@mail.com">rgaraym@benkio.pe</a></p>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-lg-8">
            <form action="#" class="form-contact" id="form">
              <div class="row">
                <div class="col-sm-6 py-2">
                  <label for="name" class="fg-grey" id="nombre_formulario">Nombre</label>
                  <input type="text" class="form-control" id="name" placeholder="Nombre" name="name" required>
                </div>
                <div class="col-sm-6 py-2">
                  <label for="email" class="fg-grey" id="correo_formulario">Email</label>
                  <input type="text" class="form-control" id="email" placeholder="Email" name="email" required>
                </div>
                <div class="col-12 py-2">
                  <label for="subject" class="fg-grey" id="asunto_formulario">Asunto</label>
                  <input type="text" class="form-control" id="subject" placeholder="Asunto" name="subject" required>
                </div>
                <div class="col-12 py-2">
                  <label for="message" class="fg-grey" id="mensaje_formulario">Mensaje</label>
                  <textarea id="message" rows="8" class="form-control" placeholder="Mensaje" name="message" required></textarea>
                </div>
                <div class="col-12 mt-3">
                  <input type="submit" class="btn btn-primary px-5" id="boton_formulario" value="ENVIAR">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> `;
     
}

///REQUERIMIENTO

class requerimientos {

    constructor ( requerimiento , prioridad) {
        this.requerimiento = requerimiento;
        this.prioridad=prioridad;
    }
    
}

function requerimiento() {
    let nuevoRequerimiento = prompt ("¿Desea dejarnos alguna solicitud o requerimiento?");
    
    let nuevosRequerimientos = [ ];
    
    function validar_requerimiento () {
        if (nuevoRequerimiento == "Si"){
    
            for ( let i = 0 ; i < 1 ; i++){
    
           
                let requerimiento = prompt ("Ingrese su Requerimiento");
                let prioridad = prompt ("Indique su prioridad del 1 al 10");
            
            
                nuevosRequerimientos.push ( new requerimientos (requerimiento,prioridad));
                alert("Nos pondremos en contacto pronto")
            }    
                
        }   
            
        else if (nuevoRequerimiento == "SI"){
    
            for ( let i = 0 ; i < 1 ; i++){
    
           
                let requerimiento = prompt ("Ingrese su Requerimiento");
                let prioridad = prompt ("Indique su prioridad del 1 al 10");
            
            
                nuevosRequerimientos.push ( new requerimientos (requerimiento,prioridad));
                alert("Nos pondremos en contacto pronto")
            }    
                
        }   

        else if (nuevoRequerimiento == "si"){
    
            for ( let i = 0 ; i < 1 ; i++){
    
           
                let requerimiento = prompt ("Ingrese su Requerimiento");
                let prioridad = parseInt(prompt ("Indique su prioridad del 1 al 10"));

            
                nuevosRequerimientos.push ( new requerimientos (requerimiento,prioridad));
                alert("Nos pondremos en contacto pronto")
            }    
                
        }   
    
        else {
    
            alert("No dude en contactarnos en caso de tener un requerimiento");
        }
    
    
    }
    
    validar_requerimiento(nuevoRequerimiento);
    
    console.log(nuevosRequerimientos);
    
    }
