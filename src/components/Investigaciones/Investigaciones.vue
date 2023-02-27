<template>
  <section class="about section-padding">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="section-header text-center text-black pb-5 m-5">
            <h2 class="text-uppercase">Investigaciones</h2>
          </div>
        </div>

        <div class="col-lg-12 col-md-12 col-12 ps-lg-5 mt-md-5">
          <div class="about-text text-black">
            <h2 class="text-uppercase">Semana 1: Introducción a JavaScript</h2>
            <br>
            <div class="about-img">
             <img src="../../assets/img/queJS.jpg" class="img-fluid" />
            </div>
            
            <br>
            <h4>¿Qué es JavaScript?</h4>
            <p>
              Es un lenguaje de programación que usualmente se usa para crear páginas web interactivas. En
              pocas palabras mediante JavaScript podemos editar y modificar toda lo que interactúa con el
              usuario, para brinda así una experiencia agradable.
              Los desarrolladores a partir de la evolución del lenguaje, definieron bibliotecas, marcos y prácticas
              de programación y así iniciaron a utilizarlo fuera de los navegadores.
            </p>

            <br>
            <h4>Funcionamiento JavaScript</h4>
            <p>
              En este lenguaje el código es interpretado, básicamente se traduce a código de lenguaje de
              maquina mediante un motor de JavaScript (motor V8).
            </p>

            <br>
            <h4>JavaScript puede ser utilizado tanto del lado del cliente como del lado del servidor.</h4>
            <p>
              Lado del cliente: en este apartado hace referencia a la forma en como este lenguaje funciona en el
              navegador que el usuario utiliza (el motor está dentro del código del navegador, usualmente todos
              los navegadores lo tienen incorporado). Las funciones que se asocian con los eventos realizan
              cambios en HTML Y CSS.
              <br>
              <br>
              Lado del servidor: hace referencia al uso del lenguaje de codificación en lógica del servidor de
              Backend (el motor se encuentra directamente en el servidor). Del lado del servidor una función
              puede acceder a la base de datos, realizar operaciones lógicas y responder a eventos
              desencadenados por el sistema operativo del servidor.
            </p>
            <br>
            <br>


            <h2 class="text-uppercase">Semana 2: Bootstrap, VueJS</h2>
            <br>

            <div class="about-img">
             <img src="../../assets/img/queB.png" class="img-fluid" />
            </div>
            <br>

            <h4>¿Qué es Bootstrap?</h4>
            <p>
              Es un marco de desarrollo web que permite y ayuda a los desarrolladores a crear interfaces web.
              Se concibió el 19 de agosto de 2011 por Mark Otto y Jacob Thornton, es de código abierto, cabe
              mencionar que es uno de los frameworks más populares.
              Al inicio Bootstrap 1 era una colección de CSS que permitía diseñar sitios web. El enfoque del
              marco sigue siendo el mismo, permitir a los desarrolladores crear diseños y ayudar a desarrollar
              una apariencia agradable con interactividad.
            </p>
            <br>
            <h4>Diseño:</h4>
            <p>
              El marco presenta contenedores responsivos, permisos de ajustes del diseño de la página,
              así mismo un diseño de cuadricula de 12, con columnas para organizar de manera flexible los
              elementos, permite elementos multimedia que funcionan como bloques.
            </p>
            <br>

           
            <h4>¿Qué es VueJS? </h4>
            <br>

            <div class="about-img">
             <img src="../../assets/img/vue.png" class="img-fluid" />
            </div>
            <br>
            <p>

              Marco progresivo que permite construir interfases de usuario. La biblioteca principal se centra
              solo en la capa de vista y es fácil de recoger e integrar con otras bibliotecas o proyectos existentes.
              Es capaz de impulsar aplicaciones sofisticadas de una sola página cuando se usa en combinación
              con herramientas modernas y bibliotecas de soporte.
              <br>
              Es una librería JS pensada para tener un framework para desarrollar paginas web. Con este se
              pueden crear todas las vistas de una página web, hacerse dinámicas, así mismo se pueden
              conectar a un servidor para tener datos dinámicos de una BD.
            </p>

            <h4>Características Vue.JS </h4>
            <p>
            <ul>
              <li>Modularidad</li>
              <li>Reactividad</li>
              <li>Componentes Web</li>
              <li> Virtual DOM</li>
              <li>Eventos y transacciones</li>
              <li>Mixins</li>
              <li>Lifecicle</li>
              <li>Aplicaciones SPA</li>
            </ul>
            </p>
            <h4>Existen diferentes formas de inicializar una aplicación: </h4>
            <p>
            <ul>
              <li>vue init webpack</li>
              <li>vue init webpack-simple</li>
              <li>vue init browserify</li>
              <li>vue init browserify-simple</li>
              <li> vue init simple</li>
            </ul>
            </p>

            <br>
            <br>

            <h2 class="text-uppercase">Semana 3: Rendering declarativo, Directivas personalizadas, Representación de
              lista.</h2>
              <br>
            <div class="about-img">
             <img src="../../assets/img/directivas.png" class="img-fluid" />
            </div>
            <br>
            <h4>Rendering declarativo</h4>
            <p>
              Es una opción propuesta pro VueJS para interactuar con el DOM.

             <ul>
              <li>Vista: HTML</li>
              <li>Estado: Datos JS</li>
              <li>Usuario: Interactúa e introduce cambios en la vista.</li>
             </ul>
            </p>
            <br>
            <h4> Directivas</h4>
            <p>
              Estas son atributos especiales de Vue que se colocan en las etiquetas HTML y están prefijados por
              v-.
            </p>

            <h4>Las directivas están formadas por:</h4>
            <p>
            <ul>
              <li>Directiva: nombre de la directiva.</li>
              <li>Argumento: parámetro.</li>
              <li>Modificador: modificar el comportamiento.</li>
              <li>Valor: se requiere establecer un valor.</li>
            </ul>
            </p>

            <h4>Tipos de directivas:</h4>
            <p>
            Las directivas personalizadas proporcionan un mecanismo para asignar cambios de datos a un
            comportamiento arbitrario de DOM.
            </p>
            <br>

            <h2 class="text-uppercase">Semana 4: Eventos, Manejadores de eventos, Modificadores de eventos, Clases y
              estilos entiempo real.</h2>

            <br>
            <div class="about-img">
             <img src="../../assets/img/even.png" class="img-fluid" />
            </div>
            <br>
            <h4>¿Qué son los eventos?</h4>
            <p>
              En JS interacción con el usuario se consigue mediante la captura de eventos. Un evento es la
              acción que realiza un usuario ante la cual puede realizarse algún proceso, estos se capturan
              mediante los manejadores de eventos.
            </p>

            <br>
            <h4>Manejadores de eventos en Vue.JS</h4>
            <p>
              Se puede utilizar la directiva v-on para escuchar eventos del DOM. <br>
              Vue.js proporciona modificadores de eventos para v-on para manejar detalles de eventos DOM,
              como:event.preventDefault() Oevent.stopPropagation()
            </p>
            <h4>Modificadores de teclas</h4>
            <p>
              Se utilizan alias para las claves más utilizadas.

             <ul>
              <li>.enter</li>
              <li>.delete</li>
              <li>.esc</li>
              <li>.space</li>
              <li>.up</li>
              <li>.down</li>
              <li>.left</li>
              <li>.right</li>
             </ul>
            </p>

             <h4>Clases y estilos reactivos</h4>
             <br>
              Binding:class <br>
              Usando: class se puede definir clases al igual que con el atributo class pero aquí se usa comillas
              simples dentro de las comillas dobles. <br>
              <br>

              Binding: style <br>
              Usando: style se puede cambiar el estilo de algún elemento HTML en tiempo de ejecución. <br>
          
            <h2 class="text-uppercase">Semana 5: Sistema de Componentes, Introducción al sistema de Componentes, Crear
              Componentes Custom.</h2>
              <br>

              <div class="about-img">
             <img src="../../assets/img/com.jpg" class="img-fluid" />
            </div>

            <br>
            <h4>Componentes</h4>
            <p>
              Es la forma de reutilizar una instancia de vue las veces que sean necesarias. Estos permiten crear
              elementos propios html, con sus propias propiedades y métodos que se pueden reutilizar en toda
              la aplicación.
              <br>
              Sintaxis para creación de componentes: Vue.component(“name”, {options})
            </p>

            <br>
            <h4>Registro Global de componentes</h4>
            <p>
              Se realiza al llamar al método component de Vue. Que un componente se registre de forma global
              significa que estará disponible en cualquier componente de Vue no importa cuán anidado esté.
            </p>

            <br>
            <h4>¿Comunicación entre Componentes: propiedades y eventos? <br>
              Envío de datos entre componentes</h4>
            <p>
              En Vue.js se envían datos desde un componente padre hacia el hijo mediante sus propiedades (
              props ) y desde el componente hijo hacia el padre mediante eventos ( $emit ).
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>