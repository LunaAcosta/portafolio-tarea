<template>
  <section class="about section-padding sumario">
    <div class="container sumario-text">
      <div class="row">
        <div class="col-md-12">
          <div class="section-header text-center text-black pb-5 m-5">
            <h2 class="text-uppercase">Investigaciones Del Computo I</h2>
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
            <p>
              Binding:class <br>
              Usando: class se puede definir clases al igual que con el atributo class pero aquí se usa comillas
              simples dentro de las comillas dobles. <br>
              <br>
              Binding: style <br>
              Usando: style se puede cambiar el estilo de algún elemento HTML en tiempo de ejecución. <br>
            </p>
            <br>
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
    <div class="container sumario-text">
      <div class="row">
        <div class="col-md-12">
          <div class="section-header text-center text-black pb-5 m-5">
            <h2 class="text-uppercase">Investigaciones Del Computo II</h2>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-12 ps-lg-5 mt-md-5">
          <div class="about-text text-black">
            <h2 class="text-uppercase">Semana 7 Introducción al desarrollo con php.</h2>
            <br>
            <div class="about-img">
              <img src="../../assets/img/phpComputoII.jpg" class="img-fluid" />
            </div>
            <br>
            <h4>¿ Qué es php ?</h4>
            <p>
              PHP es un lenguaje de código abierto muy popular, adecuado para desarrollo web
              y que puede ser incrustado en HTML. Es popular porque un gran número de páginas
              y portales web están creados con PHP.
            </p>
            <br>
            <h4>¿ Cómo funciona ?</h4>
            <p>
              El usuario escribe una URL una ruta o dirección para poder localizar una página web,imagen,
              servidor etc. en su navegador y éste envía un petición al servidor web.Un servidor web es la maquina
              o computador donde se almacena una página web. El servidor lee la página PHP (la interpreta).
              Envía al navegador del usuario un documento compilado en formato HTML
            </p>
            <br>
            <h4>¿Qué puede hacer?</h4>
            <p>
              Permite la ejecución de scripts en la parte del servidor. Se necesitan tres elementos:
              El analizador PHP (CGI ó módulo), un servidor web y un navegador.
              <br>
              <br>
              Ejecución de scripts desde la línea de comandos sin la necesidad de un servidor Web o
              navegador. Escritura de aplicaciones gráficas clientes por medio de una extensión
              llamada PHP-GTK.
              <br>
              <br>
              Puede ser utilizado en cualquiera de los principales sistemas operativos del mercado.
              Linux, Unix, Microsoft Windows, Mac OS X, RISC OS y probablemente alguno más.
              Soporta la mayoría de los servidores web de hoy en día.
              Incluyendo Apache, Microsoft Internet Information Server, Personal Web Server, y muchos
              otros.
            </p>
            <br>
            <h4>Ventajas de utilizar PHP</h4>
            <p>
              Lenguaje de programación totalmente libre y de código abierto. Es la expresión con la
              que se conoce al software o programas que se pueden usar libremente. Normalmente
              son gratuitos y se puede acceder a su código fuente, es decir, es un lenguaje que se
              puede usar de forma gratuita
            </p>
            <br>
            <br>
            <h2 class="text-uppercase">Semana 8: Loops, Arrays, funciones</h2>
            <br>
            <div class="about-img">
              <img src="../../assets/img/phpfuncioones.jpg" class="img-fluid" />
            </div>
            <br>
            <h4>Bucles </h4>
            <p>
              Un bucle en PHP se usa para ejecutar una declaración o un bloque de declaraciones, varias veces
              hasta que se cumpla una condición específica.
            </p>
            <br>
            <h4>FOR</h4>
            <p>
              Este tipo de bucles se utiliza cuando el usuario sabe de antemano cuántas veces debe ejecutarse
              el bloque. Es decir, el número de iteraciones se conoce de antemano. <br>
              Este tipo de bucles también se conocen como bucles controlados por entrada. <br>
              Hay tres parámetros principales para el código: la inicialización, la condición de prueba
              y el contador.
            </p>
            <br>
            <h4>WHILE</h4>
            <p>
              El ciclo while también es un ciclo de control de entrada como para los ciclos, es decir, primero
              verifica la condición al comienzo del ciclo y, si es verdadero, ingresa al ciclo y ejecuta el
              bloque de instrucciones, y continúa ejecutándose como siempre y cuando la condición sea cierta.
            </p>
            <br>
            <h4>FOREACH</h4>
            <p>
              Este bucle se utiliza para iterar sobre matrices. Para cada contador de bucle, se asigna un elemento
              de matriz y el siguiente contador se desplaza al siguiente elemento.
            </p>
            <br>
            <h4>ARRAYS</h4>
            <p>
              Las matrices en PHP son un tipo de estructura de datos que nos permite almacenar múltiples
              elementos de un tipo de datos similar en una sola variable, lo que nos ahorra el esfuerzo de
              crear una variable diferente para cada dato. Los arreglos son útiles para crear una lista de
              elementos de tipos similares, a los que se puede acceder utilizando su índice o clave.
            </p>
            <br>
            <h2 class="text-uppercase">Semana 9: Programación Orientada a Objetos.</h2>
            <br>
            <div class="about-img">
              <img src="../../assets/img/poo.png" class="img-fluid" />
            </div>
            <br>
            <h4>¿Qué POO?</h4>
            <p>
              La Programación Orientada a Objetos (POO u OOP según sus siglas en inglés)
              es un paradigma de programación que usa objetos y sus interacciones para diseñar aplicaciones
              y programas de computadora. Está basado en varias técnicas, incluyendo herencia,
              modularidad, polimorfismo, y encapsulamiento. Su uso se popularizó a principios de la década
              de 1990. Actualmente son muchos los lenguajes de programación que soportan la orientación
              a objetos.
            </p>
            <br>
            <h4>Abstracción.</h4>
            <p>
              La abstracción es un proceso de interpretación y diseño que implica reconocer y
              enfocarse en las características importantes de una situación u objeto, y filtrar
              o ignorar todas las particularidades no esenciales.
            </p>
            <h4>Encapsulamiento.</h4>
            <p>
              El encapsulamiento consiste en agrupar en una Clase las características(atributos)
              con un acceso privado y los comportamientos (métodos) con un acceso público.
            </p>
            <h4>Herencia</h4>
            <br>
            <p>
              Es una propiedad que permite crear clases a partir de otras ya existentes, obteniendo
              características (métodos y atributos) similares a los ya existentes.
            </p>
            <br>
            <h4>Polimorfismo</h4>
            <br>
            <p>
              Son comportamientos diferentes, asociados a objetos distintos, pueden compartir el
              mismo nombre; al llamarlos por ese nombre se utilizará el comportamiento
              correspondiente al objeto que se esté usando.
            </p>
            <br>
            <h4>Clase</h4>
            <br>
            <p>
              Una Clase es la Implementación total o parcial de un tipo abstracto de dato, para mayor
              compresión podemos visualizar las clases como los esquemas o moldes que nos permitirán
              crear objetos o instancias concretas. Una clase es por tanto una plantilla implementada en
              Software que describe un conjunto de objetos con atributos y comportamiento similares.
            </p>
            <br>
            <h2 class="text-uppercase">Semana 10: Clases Abstractas e Interfaces. </h2>
            <br>
            <div class="about-img">
              <img src="../../assets/img/clase.jpg" class="img-fluid" />
            </div>
            <br>
            <h4>Clases Abstractas.</h4>
            <p>
            <ul>
              <li>Las clases abstractas no pueden ser instanciadas. </li>
              <li>Pueden declarar la existencia de los métodos, pero no su implementación. </li>
              <li>Puede contener métodos no-abstractos, pero debe de contener al menos un método abstracto</li>
              <li>Los métodos abstractos deben ser definidos en las clases heredadas, pero deben tener
                la misma visibilidad.
              </li>
              <li>La implementación debe tener la misma “firma”: la declaración de tipos y el número de
                argumentos.
              </li>
              <li>Las clases abstractas están implementadas desde la versión 5.4.0.</li>
            </ul>
            </p>
            <br>
            <h4>Interfaces</h4>
            <p>
              Las interfaces nos permiten crear código con el cual especificar qué métodos deben
              ser implementados por una clase (prototipos), sin definir su implementación.
              Las interfaces se definen con la palabra reservada interface.
              Los métodos declarados en una interfaz deben ser públicos.
              Para implementar una interface desde una clase se utiliza la palabra reservada implements.
              Una clase puede implementar más de una interfaz si se desea.
            </p>
            <br>
            <br>
            <h2 class="text-uppercase">Semana 11: Introducción a Laravel.</h2>
            <br>
            <div class="about-img">
              <img src="../../assets/img/laravelComII.webp" class="img-fluid" />
            </div>
            <br>
            <h4>MVC</h4>
            <p>
              Modelo-Vista-Controlador (MVC) es un patrón arquitectónico que separa una aplicación en
              tres componentes lógicos principales Modelo, Vista y Controlador. De ahí la abreviatura MVC. <br>
              Cada componente de la arquitectura está construido para manejar un aspecto de desarrollo
              específico de una aplicación. MVC separa la lógica empresarial y la capa de presentación entre sí.
            </p>
            <br>
            <h4>HTTP</h4>
            <p>
              HTTP es un protocolo que permite la obtención de recursos, como documentos HTML. Es
              la base de cualquier intercambio de datos en la Web y es un protocolo cliente-servidor, lo que
              significa que las solicitudes son iniciadas por el destinatario, generalmente el navegador Web.
            </p>
            <br>
            <h4>¿ Que es laravel ?</h4>
            <p>
              Laravel es un Framework con una sintaxis elegante y expresiva. Un Framework proporciona
              una estructura y un punto de partida para crear aplicaciones.
              Laravel se esfuerza por proporcionar una experiencia de desarrollador increíble, al tiempo
              que proporciona funciones poderosas como la inyección de dependencias exhaustiva, una capa
              de abstracción de base de datos expresiva, colas y trabajos programados, pruebas de integración y
              unidad, y más.
            </p>
            <br>
            <h4>Servidores</h4>
            <p>
              Una de las grandes ventajas de Laravel es la cantidad de opciones que ofrece para crear entornos
              de desarrollo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>