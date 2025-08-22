const mapaProductos = {
  1: {
    id: 1,
    nombre: "Anillo Cubano",
    precio: 3200,
    imagen: "../images/Anillos/anillo-cubano.jpg",
    tipo: "Anillos",
    descripcion: "Anillo inspirado en las clásicas cadenas cubanas, con eslabones gruesos entrelazados en plata 925. Diseño audaz y masculino que hace una declaración de estilo. Perfecto para quienes buscan una pieza con presencia y carácter."
  },
  2: {
    id: 2,
    nombre: "Anillo Apolo Personalizable",
    precio: 2800,
    imagen: "../images/Anillos/anillo-apolo-personalizable.jpg",
    tipo: "Anillos",
    descripcion: "Anillo inspirado en Apolo, dios griego de las artes y la luz. Diseño elegante con opción de personalización con iniciales o símbolos significativos. Fabricado en plata 925, perfecto como regalo con significado especial."
  },
  3: {
    id: 3,
    nombre: "Anillo Ares",
    precio: 3500,
    imagen: "../images/Anillos/anillo-ares.jpg",
    tipo: "Anillos",
    descripcion: "Anillo tributo a Ares, dios griego de la guerra. Diseño guerrero con detalles robustos, grabados tácticos y acabado envejecido. Simboliza fuerza, valentía y protección. Para quienes llevan un espíritu guerrero."
  },
  4: {
    id: 4,
    nombre: "Anillo Olympus",
    precio: 4000,
    imagen: "../images/Anillos/anillo-olympus.jpg",
    tipo: "Anillos",
    descripcion: "Anillo de la colección Olympus con gemas negras incrustadas. Diseño místico que combina la mitología griega con elegancia contemporánea. Simboliza poder y conexión con lo divino. Pieza exclusiva para ocasiones especiales."
  },
  5: {
    id: 5,
    nombre: "Anillo Panal",
    precio: 2700,
    imagen: "../images/Anillos/anillo-panal.jpg",
    tipo: "Anillos",
    descripcion: "Anillo con diseño de panal de abejas con patrón hexagonal geométrico moderno. Representa trabajo en equipo, comunidad y la dulzura de la vida. Diseño contemporáneo ideal para amantes de la naturaleza y la geometría."
  },
  6: {
    id: 6,
    nombre: "Anillo Reloj",
    precio: 4500,
    imagen: "../images/Anillos/anillo-reloj.jpg",
    tipo: "Anillos",
    descripcion: "Innovador anillo reloj con funcionalidad dual. Combina la elegancia de la joyería fina en plata 925 con la utilidad de un reloj discreto incorporado. Perfecto para quienes valoran tanto el estilo como la practicidad en sus accesorios."
  },

  7: {
    id: 7,
    nombre: "Aretes Bella Perla",
    precio: 2500,
    imagen: "../images/Aretes/aretes-bella.jpg",
    tipo: "Aretes",
    descripcion: "Aretes elegantes en plata 925 bañada en oro de 18k con perlas naturales. La combinación perfecta entre la durabilidad de la plata y el lujo del oro. Diseño clásico y atemporal que añade sofisticación a cualquier look."
  },
  8: {
    id: 8,
    nombre: "Aretes Flor Dorada",
    precio: 2200,
    imagen: "../images/Aretes/aretes-flower.jpg",
    tipo: "Aretes",
    descripcion: "Delicados aretes con diseño de flor en plata 925 bañada en oro de 18k. Cada pétalo está cuidadosamente detallado para crear un efecto natural y femenino. La calidad de la plata con el brillo premium del oro."
  },
  9: {
    id: 9,
    nombre: "Aretes Gitanos Dorados",
    precio: 2800,
    imagen: "../images/Aretes/aretes-gypsy.jpg",
    tipo: "Aretes",
    descripcion: "Aretes bohemios con diseño gitano en plata 925 bañada en oro de 18k. Detalles grabados y colgantes que emanan un espíritu libre y aventurero. La resistencia de la plata con la elegancia dorada."
  },
  10: {
    id: 10,
    nombre: "Aretes Joy Diamante",
    precio: 4200,
    imagen: "../images/Aretes/aretes-joy.jpg",
    tipo: "Aretes",
    descripcion: "Exquisitos aretes con corte diamante en plata 925 bañada en oro de 18k. Capturan y reflejan la luz espectacularmente gracias a la combinación de materiales premium. Diseño radiante para ocasiones especiales."
  },
  11: {
    id: 11,
    nombre: "Aretes Olimpo Dorados",
    precio: 3500,
    imagen: "../images/Aretes/aretes-olimpia.jpg",
    tipo: "Aretes",
    descripcion: "Aretes inspirados en la mitología griega en plata 925 bañada en oro de 18k. Diseño majestuoso que combina la resistencia de la plata con el brillo divino del oro. Para looks con presencia y elegancia."
  },
  12: {
    id: 12,
    nombre: "Aretes Trébol de la Suerte",
    precio: 2400,
    imagen: "../images/Aretes/aretes-trebol.jpg",
    tipo: "Aretes",
    descripcion: "Encantadores aretes con forma de trébol de cuatro hojas en plata 925 bañada en oro de 18k. Simbolizan la buena suerte y prosperidad. La durabilidad de la plata con el valor añadido del baño en oro."
  },

  13: {
    id: 13,
    nombre: "Argollas Praga",
    precio: 3200,
    imagen: "../images/Argollas/argollas-praga.jpg",
    tipo: "Argollas",
    descripcion: "Argollas inspiradas en la arquitectura clásica de Praga. Elaboradas en plata 925 con un diseño timeless que evoca la elegancia europea. Perfectas para quienes aprecian la simplicidad sofisticada y el estilo atemporal."
  },
  14: {
    id: 14,
    nombre: "Argollas Aura",
    precio: 3800,
    imagen: "../images/Argollas/argollas-aura.jpg",
    tipo: "Argollas",
    descripcion: "Argollas Aura en oro de 18k que irradian calidez y luminosidad. Diseño minimalista pero impactante que crea un aura de elegancia alrededor de tus manos. Ideales para ocasiones especiales y como símbolo de unión eterna."
  },
  15: {
    id: 15,
    nombre: "Argollas Amara",
    precio: 3500,
    imagen: "../images/Argollas/argollas-amara.jpg",
    tipo: "Argollas",
    descripcion: "Argollas Amara en plata 925 con un nombre que significa 'eterna' en sanscrito. Diseño sólido y confortable que simboliza amor perdurable. Acabado pulido impecable que refleja la luz con elegancia discreta."
  },
  16: {
    id: 16,
    nombre: "Argollas Bria",
    precio: 4200,
    imagen: "../images/Argollas/argollas-bria.jpg",
    tipo: "Argollas",
    descripcion: "Argollas Bria en oro de 18k con un nombre que evoca fuerza y nobleza. Diseño contemporáneo con bordes suaves y brillo excepcional. Para quienes buscan piezas que combinen tradición y modernidad con lujo auténtico."
  },
  17: {
    id: 17,
    nombre: "Argollas Gaia",
    precio: 3300,
    imagen: "../images/Argollas/argollas-gaia.jpg",
    tipo: "Argollas",
    descripcion: "Argollas Gaia en plata 925, nombradas en honor a la diosa de la Tierra. Diseño orgánico y minimalista que conecta con la naturaleza. Simbolizan armonía, crecimiento y la belleza de lo esencial. Para almas naturales y auténticas."
  },
  18: {
    id: 18,
    nombre: "Argollas Tara",
    precio: 4500,
    imagen: "../images/Argollas/argollas-tara.jpg",
    tipo: "Argollas",
    descripcion: "Argollas Tara en oro de 18k, inspiradas en la diosa tibetana de la compasión. Diseño elegante con proporciones perfectas y brillo intenso. Representan protección, sabiduría y amor incondicional. Piezas de herencia para atesorar por siempre."
  },

  19: {
    id: 19,
    nombre: "Brazalete Calado Oro",
    precio: 5800,
    imagen: "../images/Brazaletes/brazalete-calado.jpg",
    tipo: "Brazaletes",
    descripcion: "Brazalete artesanal en oro de 18k con diseño calado intrincado. Patrones elaborados que permiten juegos de luz y sombra, creando un efecto de encaje metálico. Pieza de alta joyería que demuestra maestría en la artesanía del oro."
  },
  20: {
    id: 20,
    nombre: "Brazalete Centurión",
    precio: 6500,
    imagen: "../images/Brazaletes/brazalete-centurion.jpg",
    tipo: "Brazaletes",
    descripcion: "Brazalete Centurión en oro de 18k inspirado en la armadura de los guerreros romanos. Diseño robusto y majestuoso con detalles geométricos que evocan fuerza y protección. Para quienes llevan un espíritu guerrero con elegancia."
  },
  21: {
    id: 21,
    nombre: "Brazalete León Dorado",
    precio: 6200,
    imagen: "../images/Brazaletes/brazalete-leon.jpg",
    tipo: "Brazaletes",
    descripcion: "Brazalete en oro de 18k con imponente cabeza de león tallada. Simboliza coraje, realeza y liderazgo. Artesanía detallada que captura la majestuosidad del rey de la selva. Pieza statement para personalidades fuertes y seguras."
  },
  22: {
    id: 22,
    nombre: "Brazalete Pantera Elegante",
    precio: 6000,
    imagen: "../images/Brazaletes/brazalete-pantera.jpg",
    tipo: "Brazaletes",
    descripcion: "Brazalete en oro de 18k con figura de pantera estilizada. Diseño sleek y poderoso que representa misterio, agilidad y elegancia nocturna. La pantera, tallada con precisión, parece moverse alrededor de la muñeca con grace felina."
  },
  23: {
    id: 23,
    nombre: "Brazalete Liso Clásico",
    precio: 5200,
    imagen: "../images/Brazaletes/brazalete-liso.jpg",
    tipo: "Brazaletes",
    descripcion: "Brazalete clásico en oro de 18k de superficie lisa y pulido impecable. Diseño atemporal que resalta la pureza y calidez del oro. Versátil para usar solo o apilado, perfecto para elevar cualquier look con discreta elegancia."
  },
  24: {
    id: 24,
    nombre: "Brazalete Magno Imperial",
    precio: 7000,
    imagen: "../images/Brazaletes/brazalete-magno.jpg",
    tipo: "Brazaletes",
    descripcion: "Brazalete Magno en oro de 18k, diseño imperial con gravados antiguos y terminación de alta joyería. Evoca la grandeza de imperios antiguos con su peso sustancial y presencia imponente. Para quienes buscan una pieza de inversión y herencia."
  },
  
  25: {
    id: 25,
    nombre: "Pulso Rústico Placa",
    precio: 5800,
    imagen: "../images/Pulsos/pulso-rustico.jpg",
    tipo: "Pulsos",
    descripcion: "Pulso en oro de 18k con diseño rústico y acabado martillado que simula la textura de la artesanía tradicional. Placa central con grabados antiguos que cuentan una historia. Perfecto para looks casuales con carácter auténtico y earthy, pero con el lujo del oro amarillo."
  },
  26: {
    id: 26,
    nombre: "Pulso Franco Delgado",
    precio: 6200,
    imagen: "../images/Pulsos/pulso-franco.jpg",
    tipo: "Pulsos",
    descripcion: "Pulso franco de 2mm en oro de 18k con eslabones clásicos y pulido impecable. Diseño minimalista y elegante que se adapta a cualquier ocasión. Ideal para uso diario o para apilar con otros pulsos, destacando por el brillo cálido del oro puro."
  },
  27: {
    id: 27,
    nombre: "Pulso Jade Oriental",
    precio: 6800,
    imagen: "../images/Pulsos/pulso-jade.jpg",
    tipo: "Pulsos",
    descripcion: "Pulso en oro de 18k con cuenta central de jade natural genuino. Combinación de lujo y espiritualidad que simboliza equilibrio y prosperidad en la cultura oriental. El contraste entre el oro amarillo y el verde jade crea una pieza única y llena de significado."
  },
  28: {
    id: 28,
    nombre: "Pulso Serpiente Elegante",
    precio: 6500,
    imagen: "../images/Pulsos/pulso-serpiente.jpg",
    tipo: "Pulsos",
    descripcion: "Pulso serpiente de 2mm en oro de 18k con diseño flexible y superficie escamada detallada. Simboliza transformación, renovación y sabiduría. Acabado brillante que se adapta cómodamente a la muñeca, destacando con el resplandor dorado."
  },
  29: {
    id: 29,
    nombre: "Pulso Cuadrado Tennis",
    precio: 7200,
    imagen: "../images/Pulsos/pulso-cuadrado.jpg",
    tipo: "Pulsos",
    descripcion: "Pulso tennis en oro de 18k con eslabones cuadrados alternados en verde vibrante. Diseño geométrico contemporáneo que agrega color y personalidad. El oro amarillo realza los detalles geométricos, creando un contraste moderno y elegante."
  },
  30: {
    id: 30,
    nombre: "Pulso Titán Robustecido",
    precio: 7500,
    imagen: "../images/Pulsos/pulso-titan.jpg",
    tipo: "Pulsos",
    descripcion: "Pulso Titán en oro de 18k con diseño robusto y estructura reforzada. Eslabones sustanciales que emanan fuerza y solidez. Para quienes prefieren piezas con presencia y durabilidad, simbolizando resistencia y poder con el valor intrínseco del oro."
  },

  31: {
    id: 31,
    nombre: "Pulsera Completo",
    precio: 6800,
    imagen: "../images/Pulseras/pulsera-completo.jpg",
    tipo: "Pulseras",
    descripcion: "Pulsera en oro de 18k de 4mm de ancho con diseño sólido y continuo. Cadena robusta que ofrece presencia sustancial en la muñeca sin sacrificar elegancia. Perfecta para quienes buscan una pieza completa que combine peso y refinamiento en oro puro."
  },
  32: {
    id: 32,
    nombre: "Pulsera Lateral",
    precio: 7200,
    imagen: "../images/Pulseras/pulsera-lateral.jpg",
    tipo: "Pulseras",
    descripcion: "Pulsera en oro de 18k con detalle lateral elaborado que añade dimensión y textura. Diseño arquitectónico donde los costados muestran patrones grabados exclusivos. Una pieza que se aprecia desde todos los ángulos, demostrando artesanía excepcional en oro."
  },
  33: {
    id: 33,
    nombre: "Pulsera Intercalado",
    precio: 7900,
    imagen: "../images/Pulseras/pulsera-intercalado.jpg",
    tipo: "Pulseras",
    descripcion: "Pulsera en oro de 18k con eslabones intercalados en negro contrastante. Diseño audaz que juega con la dualidad oro-negro, creando un efecto visual moderno y sofisticado. Ideal para looks contemporáneos que buscan un punto focal statement."
  },
  34: {
    id: 34,
    nombre: "Pulsera Entrelazado",
    precio: 7500,
    imagen: "../images/Pulseras/pulsera-entrelazado.jpg",
    tipo: "Pulseras",
    descripcion: "Pulsera en oro de 18k con diseño de eslabones entrelazados que simbolizan conexión y unidad. Patrón infinito que fluye elegantemente alrededor de la muñeca. Representa la unión eterna y la fuerza que se encuentra en la interconexión, todo en oro brillante."
  },
  35: {
    id: 35,
    nombre: "Pulsera Tres Lineas",
    precio: 8300,
    imagen: "../images/Pulseras/pulsera-tres-lineas.jpg",
    tipo: "Pulseras",
    descripcion: "Pulsera en oro de 18k compuesta por tres líneas paralelas con detalles en verde esmeralda. Diseño tridimensional que representa equilibrio y armonía. La combinación del oro con el verde crea una pieza vibrante y lujosa para ocasiones especiales."
  },
  36: {
    id: 36,
    nombre: "Pulsera Placa",
    precio: 7700,
    imagen: "../images/Pulseras/pulsera-placa.jpg",
    tipo: "Pulseras",
    descripcion: "Pulsera en oro de 18k con placa central de diseño tejido en negro. Textura que evoca la artesanía tradicional pero con un enfoque moderno. El contraste entre el oro amarillo y el negro crea una pieza versátil que transita entre lo clásico y lo avant-garde."
  },

  37: {
    id: 37,
    nombre: "Dije Cruz Imperial",
    precio: 9200,
    imagen: "../images/Dijes/dije-cruz-imperial.jpg",
    tipo: "Dijes",
    descripcion: "Exquisito dije en oro de 18k con diseño de Cruz Imperial. Pieza de gran simbolismo religioso y elegancia atemporal. Elaborado con meticulosos detalles que reflejan artesanía de alta calidad. Perfecto para quienes buscan una pieza espiritual con presencia y distinción en oro puro."
  },
  38: {
    id: 38,
    nombre: "Dije Suprema",
    precio: 9800,
    imagen: "../images/Dijes/dije-suprema.jpg",
    tipo: "Dijes",
    descripcion: "Dije en oro de 18k de diseño supremo y majestuoso. Pieza que emana lujo y sofisticación con sus proporciones perfectas y acabado impecable. Para quienes aprecian la excelencia en joyería y desean una pieza que transmita poder y elegancia en cada detalle."
  },
  39: {
    id: 39,
    nombre: "Dije Goldier",
    precio: 10200,
    imagen: "../images/Dijes/dije-goldier.jpg",
    tipo: "Dijes",
    descripcion: "Espectacular dije Goldier en oro de 18k con diseño contemporáneo y audaz. Combina líneas modernas con la tradición joyera, creando una pieza vanguardista. Ideal para personalidades que buscan destacar con joyería que rompe convenciones manteniendo el lujo del oro puro."
  },
  40: {
    id: 40,
    nombre: "Dije Jade",
    precio: 11500,
    imagen: "../images/Dijes/dije-jade.jpg",
    tipo: "Dijes",
    descripcion: "Dije en oro de 18k con incrustaciones de jade genuino. La combinación del dorado intenso con el verde profundo del jade crea una pieza de belleza extraordinaria. Simboliza sabiduría y equilibrio, ideal para quienes valoran piedras preciosas y su significado espiritual."
  },
  41: {
    id: 41,
    nombre: "Dije Medusa",
    precio: 8900,
    imagen: "../images/Dijes/dije-medusa.jpg",
    tipo: "Dijes",
    descripcion: "Dije en oro de 18k con el emblemático diseño de Medusa. Representa elegancia mitológica con un toque de poder y misterio. Artesanía detallada que captura la esencia de la figura mitológica, perfecto para quienes buscan una pieza con historia y fuerte personalidad."
  },
  42: {
    id: 42,
    nombre: "Dije León Magno",
    precio: 10800,
    imagen: "../images/Dijes/dije-leon-magno.jpg",
    tipo: "Dijes",
    descripcion: "Impresionante dije en oro de 18k con la figura de un león magno en alto relieve. Simboliza fuerza, coraje y nobleza. Cada detalle de la melena y expresión está meticulosamente trabajado, creando una pieza de poder y distinción para personalidades lideres."
  },

  43: {
    id: 43,
    nombre: "Cadena Ancla",
    precio: 12500,
    imagen: "../images/Cadenas/cadena-ancla.jpg",
    tipo: "Cadenas",
    descripcion: "Elegante cadena en oro de 18k con eslabones tipo ancla de 4mm. Diseño clásico y resistente que combina durabilidad con estilo atemporal. Perfecta para uso diario, simboliza estabilidad y fuerza. Ideal para quienes buscan una pieza versátil y duradera en oro puro."
  },
  44: {
    id: 44,
    nombre: "Cadena Egipcio",
    precio: 9800,
    imagen: "../images/Cadenas/cadena-egipcio.jpg",
    tipo: "Cadenas",
    descripcion: "Cadena en oro de 18k con diseño de eslabones egipcios de 2mm. Patrón ancestral que evoca la grandeza de la joyería faraónica. Delicada pero con presencia, perfecta para looks discretos pero sofisticados. Una pieza que rinde homenaje a la rica historia joyera egipcia."
  },
  45: {
    id: 45,
    nombre: "Cadena Grabada",
    precio: 11200,
    imagen: "../images/Cadenas/cadena-grabada.jpg",
    tipo: "Cadenas",
    descripcion: "Cadena en oro de 18k de 2mm con grabados artesanales detallados. Patrones intricados que añaden textura y profundidad a cada eslabón. Pieza única que demuestra el arte de la joyería tradicional con un toque contemporáneo. Para quienes valoran los detalles exquisitos."
  },
  46: {
    id: 46,
    nombre: "Cadena Lazo",
    precio: 10500,
    imagen: "../images/Cadenas/cadena-lazo.jpg",
    tipo: "Cadenas",
    descripcion: "Delicada cadena en oro de 18k de 2mm con eslabones en forma de lazo. Diseño femenino y romántico que simboliza unión y conexión eterna. Perfecta para usar sola o como base para dijes especiales. Una pieza elegante que transmite dulzura y refinamiento."
  },
  47: {
    id: 47,
    nombre: "Cadena Rustic",
    precio: 13500,
    imagen: "../images/Cadenas/cadena-rustic.jpg",
    tipo: "Cadenas",
    descripcion: "Cadena en oro de 18k con acabado rústico y texturizado. Diseño robusto que emana autenticidad y carácter fuerte. Perfecta para looks casuales con un toque de elegancia natural. Ideal para quienes prefieren piezas con personalidad marcada y estilo único."
  },
  48: {
    id: 48,
    nombre: "Cadena Serpiente",
    precio: 14200,
    imagen: "../images/Cadenas/cadena-serpiente.jpg",
    tipo: "Cadenas",
    descripcion: "Cadena en oro de 18k de 2mm con diseño de escamas de serpiente. Simboliza renovación, transformación y sabiduría. Diseño flexible y seductor que se adapta perfectamente al cuerpo. Una pieza audaz y misteriosa para personalidades que no temen destacar."
  },

  49: {
    id: 49,
    nombre: "Anillo Lucia",
    precio: 4500,
    imagen: "../images/Exclusivo/anillo-lucia.jpg",
    tipo: "Anillos",
    material: "Plata 925",
    descripcion: "Elegante anillo Lucia fabricado en plata 925 de alta calidad. Diseño delicado y femenino con detalles refinados que capturan la luz perfectamente. Perfecto para uso diario o ocasiones especiales, combinando versatilidad y elegancia con un precio accesible."
  },
  50: {
    id: 50,
    nombre: "Aretes Velvet",
    precio: 6800,
    imagen: "../images/Exclusivo/aretes-velvet.jpg",
    tipo: "Aretes",
    material: "Oro 18k",
    descripcion: "Exquisitos aretes Velvet en oro de 18k con diseño aterciopelado y acabado suave. Crean un efecto de luxe discreto que complementa cualquier outfit. Ideales para quienes buscan elegancia sofisticada con un toque moderno y contemporáneo."
  },
  51: {
    id: 51,
    nombre: "Dije Lumini",
    precio: 9200,
    imagen: "../images/Exclusivo/dije-lumini.jpg",
    tipo: "Dijes",
    material: "Oro 18k",
    descripcion: "Deslumbrante dije Lumini en oro de 18k con diseño que captura y refleja la luz. Patrones geométricos que crean juegos de luminosidad y sombras. Pieza moderna que simboliza claridad y brillo interior, perfecta para personalidades radiantes y positivas."
  },
  52: {
    id: 52,
    nombre: "Pulsera Completa Placa",
    precio: 15500,
    imagen: "../images/Exclusivo/pulsera-completa-placa.jpg",
    tipo: "Pulseras",
    material: "Oro 18k",
    descripcion: "Pulsera en oro de 18k con diseño de placa completa y sólida. Superficie lisa que ofrece máxima presencia en la muñeca con elegancia minimalista. Perfecta para quienes prefieren piezas sustanciales con impacto visual fuerte pero diseño limpio y sofisticado."
  },
  
  53: {
    id: 53,
    nombre: "Dije Corazón Caballo",
    precio: 11500,
    imagen: "../images/Novedades/dije-corazon-caballo.jpg",
    tipo: "Dijes",
    material: "Oro 18k",
    descripcion: "Encantador dije en oro de 18k con diseño de corazón y figura equina. Simboliza el amor por estos nobles animales y la pasión ecuestre. Artesanía detallada que combina romanticismo y fuerza, perfecto para amantes de los caballos y la naturaleza."
  },
  54: {
    id: 54,
    nombre: "Dije Pegaso",
    precio: 12800,
    imagen: "../images/Novedades/dije-pegaso.jpg",
    tipo: "Dijes",
    material: "Oro 18k",
    descripcion: "Majestuoso dije en oro de 18k con la figura mitológica de Pegaso. Representa libertad, inspiración y grandeza. Elaborado con exquisito detalle en las alas y musculatura, creando una pieza de poderosa belleza para quienes buscan elevarse por encima de lo común."
  },
  55: {
    id: 55,
    nombre: "Dije Cruz Brillante",
    precio: 9500,
    imagen: "../images/Novedades/dije-cruz-brillante.jpg",
    tipo: "Dijes",
    material: "Oro 18k",
    descripcion: "Deslumbrante dije en oro de 18k con diseño de cruz de corte brillante. Superficie pulida que refleja la luz intensamente, simbolizando fe y esperanza. Pieza espiritual con máximo brillo, ideal para quienes buscan una expresión de fe radiante y elegante."
  }


};

export default mapaProductos;