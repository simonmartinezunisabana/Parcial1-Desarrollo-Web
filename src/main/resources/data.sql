SET FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE productos;
TRUNCATE TABLE usuarios;

SET FOREIGN_KEY_CHECKS = 1;

INSERT INTO productos (id, nombre, precio, imagen, tipo, descripcion) VALUES
(1,'Anillo Cubano',3200,'./images/Anillos/anillo-cubano.jpg','Anillos','Anillo inspirado en las clásicas cadenas cubanas, con eslabones gruesos entrelazados en plata 925. Diseño audaz y masculino que hace una declaración de estilo. Perfecto para quienes buscan una pieza con presencia y carácter.'),
(2,'Anillo Apolo Personalizable',2800,'./images/Anillos/Anillo-Apolo-Personalizable.jpg','Anillos','Anillo inspirado en Apolo, dios griego de las artes y la luz. Diseño elegante con opción de personalización con iniciales o símbolos significativos. Fabricado en plata 925, perfecto como regalo con significado especial.'),
(3,'Anillo Ares',3500,'./images/Anillos/ANILLO-ARES.jpg','Anillos','Anillo tributo a Ares, dios griego de la guerra. Diseño guerrero con detalles robustos, grabados tácticos y acabado envejecido. Simboliza fuerza, valentía y protección. Para quienes llevan un espíritu guerrero.'),
(4,'Anillo Olympus',4000,'./images/Anillos/anillo-olympus.jpg','Anillos','Anillo de la colección Olympus con gemas negras incrustadas. Diseño místico que combina la mitología griega con elegancia contemporánea. Simboliza poder y conexión con lo divino. Pieza exclusiva para ocasiones especiales.'),
(5,'Anillo Panal',2700,'./images/Anillos/anillo-panal.jpg','Anillos','Anillo con diseño de panal de abejas con patrón hexagonal geométrico moderno. Representa trabajo en equipo, comunidad y la dulzura de la vida. Diseño contemporáneo ideal para amantes de la naturaleza y la geometría.'),
(6,'Anillo Reloj',4500,'./images/Anillos/anillo-reloj.jpg','Anillos','Innovador anillo reloj con funcionalidad dual. Combina la elegancia de la joyería fina en plata 925 con la utilidad de un reloj discreto incorporado. Perfecto para quienes a la vez valoran estilo y practicidad.'),
(7,'Aretes Bella Perla',2500,'./images/Aretes/Aretes-Bella.jpg','Aretes','Aretes elegantes en plata 925 bañada en oro de 18k con perlas naturales. La combinación perfecta entre durabilidad y lujo. Diseño clásico y atemporal.'),
(8,'Aretes Flor Dorada',2200,'./images/Aretes/Aretes-Flower.jpg','Aretes','Delicados aretes con diseño de flor en plata 925 bañada en oro de 18k. Cada pétalo detallado crea un efecto natural y femenino.'),
(9,'Aretes Gitanos Dorados',2800,'./images/Aretes/Aretes-Gypsy.jpg','Aretes','Aretes bohemios con diseño gitano en plata 925 bañada en oro de 18k. Detalles grabados y colgantes de espíritu libre y aventurero.'),
(10,'Aretes Joy Diamante',4200,'./images/Aretes/aretes-joy.jpg','Aretes','Exquisitos aretes corte diamante en plata 925 bañada en oro de 18k. Capturan la luz espectacularmente.'),
(11,'Aretes Olimpo Dorados',3500,'./images/Aretes/Aretes-Olimpia.jpg','Aretes','Aretes inspirados en la mitología griega en plata 925 bañada en oro de 18k. Diseño majestuoso y elegante.'),
(12,'Aretes Trébol de la Suerte',2400,'./images/Aretes/Aretes-Trebol.jpg','Aretes','Encantadores aretes en forma de trébol de cuatro hojas en plata 925 bañada en oro de 18k. Simbolizan buena suerte y prosperidad.'),
(13,'Argollas Praga',3200,'./images/Argollas/argollas-praga.jpg','Argollas','Argollas inspiradas en la arquitectura clásica de Praga. Plata 925 y estilo atemporal.'),
(14,'Argollas Aura',3800,'./images/Argollas/argollas-aura.jpg','Argollas','Argollas Aura en oro de 18k que irradian calidez y elegancia minimalista.'),
(15,'Argollas Amara',3500,'./images/Argollas/argollas-amara.jpg','Argollas','Argollas Amara en plata 925. Su nombre significa “eterna”. Simbolizan amor duradero.'),
(16,'Argollas Bria',4200,'./images/Argollas/argollas-bria.jpg','Argollas','Argollas Bria en oro de 18k con brillo excepcional y diseño contemporáneo.'),
(17,'Argollas Gaia',3300,'./images/Argollas/argollas-gaia.jpg','Argollas','Argollas Gaia en plata 925 inspiradas en la diosa de la Tierra. Diseño natural y minimalista.'),
(18,'Argollas Tara',4500,'./images/Argollas/argollas-tara.jpg','Argollas','Argollas Tara en oro de 18k inspiradas en la diosa tibetana de la compasión.'),
(19,'Brazalete Calado Oro',5800,'./images/Brazaletes/brazalete-calado.jpg','Brazaletes','Brazalete en oro de 18k con diseño calado intrincado. Efecto de encaje metálico.'),
(20,'Brazalete Centurión',6500,'./images/Brazaletes/brazalete-centurion.jpg','Brazaletes','Brazalete inspirado en la armadura de guerreros romanos. Diseño robusto y protector.'),
(21,'Brazalete León Dorado',6200,'./images/Brazaletes/brazalete-leon.jpg','Brazaletes','Brazalete en oro de 18k con cabeza de león tallada. Simboliza coraje y poder.'),
(22,'Brazalete Pantera Elegante',6000,'./images/Brazaletes/brazalete-pantera.jpg','Brazaletes','Pantera tallada en oro de 18k. Representa misterio y elegancia.'),
(23,'Brazalete Liso Clásico',5200,'./images/Brazaletes/brazalete-liso.jpg','Brazaletes','Brazalete clásico en oro de 18k con superficie lisa y pulido impecable.'),
(24,'Brazalete Magno Imperial',7000,'./images/Brazaletes/brazalete-magno.jpg','Brazaletes','Brazalete Magno con grabados antiguos y presencia imponente.'),
(25,'Pulso Rústico Placa',5800,'./images/Pulsos/pulso-rustico.jpg','Pulsos','Pulso en oro de 18k con acabado martillado rústico y placa central grabada.'),
(26,'Pulso Franco Delgado',6200,'./images/Pulsos/pulso-franco.jpg','Pulsos','Pulso de 2mm en oro de 18k con eslabones clásicos y diseño minimalista.'),
(27,'Pulso Jade Oriental',6800,'./images/Pulsos/pulso-jade.jpg','Pulsos','Pulso en oro de 18k con jade natural genuino. Simboliza equilibrio y prosperidad.'),
(28,'Pulso Serpiente Elegante',6500,'./images/Pulsos/pulso-serpiente.jpg','Pulsos','Pulso serpiente de 2mm en oro de 18k con textura escamada.'),
(29,'Pulso Cuadrado Tennis',7200,'./images/Pulsos/pulso-cuadrado.jpg','Pulsos','Pulso tennis en oro de 18k con eslabones cuadrados y detalles verdes vibrantes.'),
(30,'Pulso Titán Robustecido',7500,'./images/Pulsos/pulso-titan.jpg','Pulsos','Pulso Titán con eslabones reforzados y diseño de alta resistencia en oro 18k.'),
(31,'Pulsera Completo',6800,'./images/Pulseras/pulsera-completo.jpg','Pulseras','Pulsera de 4mm en oro 18k con diseño sólido y continuo.'),
(32,'Pulsera Lateral',7200,'./images/Pulseras/pulsera-lateral.jpg','Pulseras','Pulsera con detalle lateral grabado en oro de 18k. Arquitectónica y elegante.'),
(33,'Pulsera Intercalado',7900,'./images/Pulseras/pulsera-intercalado.jpg','Pulseras','Pulsera en oro de 18k con eslabones intercalados en negro. Moderna y audaz.'),
(34,'Pulsera Entrelazado',7500,'./images/Pulseras/pulsera-entrelazado.jpg','Pulseras','Diseño de eslabones entrelazados que simbolizan conexión y unidad.'),
(35,'Pulsera Tres Líneas',8300,'./images/Pulseras/pulsera-tres-lineas.jpg','Pulseras','Pulsera triple línea con detalles en verde esmeralda.'),
(36,'Pulsera Placa',7700,'./images/Pulseras/pulsera-placa.jpg','Pulseras','Pulsera en oro de 18k con placa central tejida en negro.'),
(37,'Dije Cruz Imperial',9200,'./images/Dijes/dije-cruz-imperial.jpg','Dijes','Dije en oro de 18k con diseño de cruz imperial. Elegancia espiritual.'),
(38,'Dije Suprema',9800,'./images/Dijes/dije-suprema.jpg','Dijes','Dije majestuoso en oro de 18k con acabado impecable y diseño supremo.'),
(39,'Dije Goldier',10200,'./images/Dijes/Dije-Goldier.jpg','Dijes','Dije contemporáneo y audaz en oro 18k con líneas modernas.'),
(40,'Dije Jade',11500,'./images/Dijes/dije-jade.jpg','Dijes','Dije en oro 18k con jade genuino. Representa sabiduría y equilibrio.'),
(41,'Dije Medusa',8900,'./images/Dijes/dije-medusa.jpg','Dijes','Dije en oro 18k basado en la figura mitológica de Medusa. Poder y misterio.'),
(42,'Dije León Magno',10800,'./images/Dijes/dije-leon-magno.jpg','Dijes','Dije imponente de león en oro 18k. Simboliza fuerza y nobleza.'),
(43,'Cadena Ancla',12500,'./images/Cadenas/cadena-ancla.jpg','Cadenas','Cadena tipo ancla de 4mm en oro 18k. Resistente, clásica y elegante.'),
(44,'Cadena Egipcio',9800,'./images/Cadenas/cadena-egipcio.jpg','Cadenas','Cadena de eslabones egipcios de 2mm en oro 18k. Inspiración faraónica.'),
(45,'Cadena Grabada',11200,'./images/Cadenas/cadena-grabada.jpg','Cadenas','Cadena con grabados artesanales en oro 18k. Detallada y única.'),
(46,'Cadena Lazo',10500,'./images/Cadenas/cadena-lazo.jpg','Cadenas','Cadena de eslabones en forma de lazo en oro 18k. Dulce y elegante.'),
(47,'Cadena Rústic',13500,'./images/Cadenas/cadena-rustic.jpg','Cadenas','Cadena en oro 18k con acabado rústico y texturizado. Auténtica y fuerte.'),
(48,'Cadena Serpiente',14200,'./images/Cadenas/cadena-serpiente.jpg','Cadenas','Cadena serpiente en oro de 18k. Fluida, elegante y sofisticada.');
(49, 'Anillo Lucia', 4500, './images/Exclusivo/anillo-Lucia.jpg', 'Anillos', 'Elegante anillo Lucia fabricado en plata 925 de alta calidad. Diseño delicado y femenino con detalles refinados que capturan la luz perfectamente. Perfecto para uso diario o ocasiones especiales, combinando versatilidad y elegancia con un precio accesible.'),
(50, 'Aretes Velvet', 6800, './images/Exclusivo/Aretes-Velvet.jpg', 'Aretes', 'Exquisitos aretes Velvet en oro de 18k con diseño aterciopelado y acabado suave. Crean un efecto de luxe discreto que complementa cualquier outfit. Ideales para quienes buscan elegancia sofisticada con un toque moderno y contemporáneo.'),
(51, 'Dije Lumini', 9200, './images/Exclusivo/Dije-Lumini.jpg', 'Dijes', 'Deslumbrante dije Lumini en oro de 18k con diseño que captura y refleja la luz. Patrones geométricos que crean juegos de luminosidad y sombras. Pieza moderna que simboliza claridad y brillo interior, perfecta para personalidades radiantes y positivas.'),
(52, 'Pulsera Completa Placa', 15500, './images/Exclusivo/pulsera-completa-placa.jpg', 'Pulseras', 'Pulsera en oro de 18k con diseño de placa completa y sólida. Superficie lisa que ofrece máxima presencia en la muñeca con elegancia minimalista. Perfecta para quienes prefieren piezas sustanciales con impacto visual fuerte pero diseño limpio.'),
(53, 'Dije Corazón Caballo', 11500, './images/Novedades/dije-corazon-caballo.jpg', 'Dijes', 'Encantador dije en oro de 18k con diseño de corazón y figura equina. Simboliza el amor por estos nobles animales y la pasión ecuestre. Artesanía detallada que combina romanticismo y fuerza, perfecto para amantes de los caballos y la naturaleza.'),
(54, 'Dije Pegaso', 12800, './images/Novedades/dije-pegaso.jpg', 'Dijes', 'Majestuoso dije en oro de 18k con la figura mitológica de Pegaso. Representa libertad, inspiración y grandeza. Elaborado con exquisito detalle en las alas y musculatura, creando una pieza de poderosa belleza para quienes buscan elevarse por encima de lo común.'),
(55, 'Dije Cruz Brillante', 9500, './images/Novedades/dije-cruz-brillante.jpg', 'Dijes', 'Deslumbrante dije en oro de 18k con diseño de cruz de corte brillante. Superficie pulida que refleja la luz intensamente, simbolizando fe y esperanza. Pieza espiritual con máximo brillo, ideal para quienes buscan una expresión de fe radiante y elegante.');

INSERT INTO usuarios (password, username)
VALUES ('$2a$10$GK0tTTC/MbxDlEJcfqDKTe39Efa1LK6bxcBIbZHT1hhruTwrNNAnC','dragonMaster'),('$2a$10$XPsvO95K5Xy1KjzvV.EZGuKJz7AjP8bbjZ1q7l0sQYxYd.ohP6gR6','mageQueen');

