class Producto{
    static contador = 0;
    constructor(nombre, precio, categoria, imagen, descripcion, stock){
        this.codigo = ++Producto.contador;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.stock = stock;
    }
}
// Carga de artículos
var taza = new Producto(
    "Taza",
    6800,
    "Articulos",
    "media/img/taza.jpg",
    "Descubre la magia en cada sorbo con nuestras Tazas. Su diseño único y la calidad duradera hacen que cada bebida sea especial. ¡Eleva tu rutina diaria con esta joya de cerámica!",
    120
);
var mate = new Producto(
    "Mate",
    12300,
    "Articulos",
    "media/img/mate.jpg",
    "Sumérgete en la tradición. Fabricados con cuidado y pasión, estos mates ofrecen una experiencia auténtica. Su diseño clásico y materiales de calidad te acompañarán en cada mateada. ¡Revive la esencia del mate con este accesorio único y duradero!",
    53
);
var cuaderno = new Producto(
    "Cuaderno",
    8300,
    "Articulos",
    "media/img/cuaderno.jpg",
    "Captura tus pensamientos y sueños en nuestros Cuadernos. Con su elegante diseño y páginas de alta calidad, este cuaderno se convierte en tu compañero perfecto. Registra tus ideas con estilo y da vida a tus pensamientos. ¡Haz que cada palabra cuente con nuestro cuaderno que despierta la creatividad!",
    47
);
var gorra = new Producto(
    "Gorra",
    8300,
    "Articulos",
    "media/img/gorra.jpg",
    "Domina las calles con nuestras Gorras 'Estilo Urbano'. Diseñada para destacar, esta gorra combina moda y comodidad. El ajuste perfecto y los detalles de alta calidad la convierten en el complemento ideal para tu estilo diario. ¡Lleva tu actitud a otro nivel con nuestra Gorra 'Estilo Urbano' y destaca en cualquier multitud!",
    87
);
var calcomania = new Producto(
    "Calcomanías",
    8300,
    "Articulos",
    "media/img/calcomania.jpg",
    "Domina las calles con nuestras Gorras 'Estilo Urbano'. Diseñada para destacar, esta gorra combina moda y comodidad. El ajuste perfecto y los detalles de alta calidad la convierten en el complemento ideal para tu estilo diario. ¡Lleva tu actitud a otro nivel con nuestra Gorra 'Estilo Urbano' y destaca en cualquier multitud!",
    24
);

var articulos = [taza, mate, cuaderno, gorra, calcomania];
//Fin carga de articulos
//Carga de workshops
var FracasosExitosos = new Producto(
    "Fracasos Exitosos",
    10000,
    "Workshops",
    "media/img/ws1.jpg",
    "Descubre cómo el fracaso puede ser la semilla de la resiliencia y la innovación, y aprende estrategias prácticas para enfrentar y superar desafíos.",
    1
);
var UneteIA = new Producto(
    "Si no puedes contra la IA ¡Únete a ella!",
    5000,
    "Workshops",
    "media/img/ws2.jpg",
    "Descubre cómo el fracaso puede ser la semilla de la resiliencia y la innovación, y aprende estrategias prácticas para enfrentar y superar desafíos.",
    1
);
var ProyectoFeliz = new Producto(
    "Una comunidad feliz hace un proyecto feliz",
    6000,
    "Workshops",
    "media/img/ws3.jpg",
    "Exploraremos cómo la colaboración, la conexión y el bienestar colectivo son esenciales para el éxito de cualquier proyecto. A través de historias inspiradoras y ejemplos concretos, aprenderás cómo cultivar una comunidad feliz puede impulsar la creatividad, la productividad y la satisfacción en el trabajo.",
    1
);
var IndentidadDigital = new Producto(
    "El futuro de la identidad digital",
    8000,
    "Workshops",
    "media/img/ws4.jpg",
    "¿Cómo evolucionará la manera en que nos identificamos en un mundo cada vez más digitalizado? Descubriremos las innovaciones tecnológicas que están dando forma a la forma en que gestionamos nuestra identidad en línea y offline.",
    1
);
var CleanCode = new Producto(
    "Clean code y buenas prácticas",
    8500,
    "Workshops",
    "media/img/ws5.jpg",
    "Exploraremos estrategias prácticas para mejorar la legibilidad, mantenibilidad y eficiencia de tu código, aplicando las mejores prácticas de la industria. Desde la gestión de dependencias hasta la documentación efectiva, desbloquearemos los secretos para construir software robusto y fácilmente escalable.",
    1
);
var workshops = [FracasosExitosos, UneteIA, ProyectoFeliz, IndentidadDigital, CleanCode];
//Fin carga de workshops
//Carga de cursos
var FullStack = new Producto(
    "FullStack",
    300000,
    "Cursos",
    "media/img/fullstack.jpg",
    "Únete a nosotros para desbloquear tu potencial fullstack, y prepárate para enfrentar desafíos del mundo real mientras construyes proyectos prácticos y significativos. Conviértete en un arquitecto de soluciones web completas y ábrete a un mundo de oportunidades en el emocionante campo del desarrollo fullstack. ¡Tu viaje hacia la maestría fullstack comienza aquí!",
    120
);
var BackEnd = new Producto(
    "Backend",
    160000,
    "Cursos",
    "media/img/backend.jpg",
    "Prepárate para dominar la columna vertebral de la web y convertirte en un desarrollador backend hábil y en demanda. ¡Únete a nosotros y descubre cómo tus habilidades en backend pueden ser la clave para construir experiencias digitales poderosas y sostenibles!",
    129
);
var React = new Producto(
    "React",
    120000,
    "Cursos",
    "media/img/react.jpg",
    "El curso definitivo que te llevará de ser un principiante a convertirte en un experto en el desarrollo de interfaces dinámicas y reactivas. Este programa intensivo te sumergirá en el emocionante ecosistema de React, la biblioteca JavaScript líder para construir interfaces de usuario modernas..",
    101
);
var Sql = new Producto(
    "SQL",
    80000,
    "Cursos",
    "media/img/sql.jpg",
    "Descubre el fascinante mundo de las bases de datos con nuestro curso. Este programa te sumergirá en los principios fundamentales del lenguaje SQL, equipándote con las habilidades esenciales para gestionar y manipular datos de manera eficiente.",
    89
);
var cursos = [FullStack, React, BackEnd,Sql];
//Fin carga de cursos
localStorage.setItem('articulos',JSON.stringify(articulos));
localStorage.setItem('workshops',JSON.stringify(workshops));
localStorage.setItem('cursos',JSON.stringify(cursos));