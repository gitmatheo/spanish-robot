

var spanishSpecialSigns = ["á", "é", "í", "ñ", "ó", "ú", "ü", "¿", "¡"];

var stack = [];
var challenges = [];
var learned = [];


stack[0] = [
              ["el" , "the"],
              ["el hombre", "the man"],
              ["la", "the"],
              ["la mujer", "the woman"],
              ["yo" , "I"],
              ["un", "a,one,an"],
              ["una", "a,one,once"],
              ["soy", "am"],
              ["el niño", "the boy"],
              ["la niña", "the girl"]
            ];

challenges[0] = [
              ["el" , "the"],
              ["el hombre", "the man"],
              ["la", "the"],
              ["la mujer", "the woman"],
              ["yo" , "I"],
              // ["un", "a,one,an"],
              // ["una", "a,one,once"],
              ["soy", "am"],
              ["el niño", "the boy"],
              ["la niña", "the girl"]
            ];

//LESSON 2
stack[1] =[
              ["él", "he"],
              ["es", "is"],
              ["ella", "she"],
              ["come", "(He/she),eats"],
              ["tú", "you"],
              ["eres", "(You),are"],
              ["usted", "you"],
              ["manzana", "apple"]
            ];

challenges[1] = [
                  ["El hombre come", "The man eats"],
                  ["Ella come.", "She eats"],
                  ["Ella es una niña." , "She is a girl"],
                  ["Él es un hombre.", "He is a man"],
                  ["Tú eres un niño.", "You are a boy"],
                  ["Ella come manzanas", "She eats apples"]
                ];

//LESSON 3
stack[2] = [
              ["pan" , "bread"],
              ["como", "(I) eat"],
              ["comes", "(you) eat"],
              ["agua", "water"],
              ["leche", "milk"],
              ["bebe", "(he/she/it) drinks"],
              ["bebo", "(I) drink"],
              ["bebes", "(you) drink"]
            ];

challenges[2] = [
                  ["Yo bebo leche", "I drink milk"],
                  ["Tú comes", "You eat"],
                  ["Yo como", "I eat"],
                  ["Tú bebes agua", "You drink water"],
                  ["The woman eats", "La mujer come"]
                ];




// BASIC 2
//LESSON 1
stack[3] = [
              ["nosotros", "we (musculine), us"],
              ["nosotras", "we (feminine), us"],
              ["somos", "(we) are"],
              ["hombres", "men"],
              ["mujeres", "women"],
              ["ustedes", "you(formal)"],
              ["son", "are"],
              ["bebemos", "(we)drink"]
            ];

challenges[3] = [
                    ["Nosotras somos mujeres",  "We are women"],
                    ["Nosotras bebemos agua", "We drink water"],
                    ["Nosotros somos hombres", "We are men"],
                    ["Nosotros bebemos", "We drink"],
                    ["Nosotras bebemos leche", "We drink milk"],
                    ["Nosotros bebemos la leche", "We drink the milk"],
                    ["Somos hombres", "We are men"],
                    ["¿Son ustedes?" , "Are you?"],
                    ["Son manzanas", "They are apples."]
                  ];


//LESSON 2
stack[4] = [
                ["ellos", "They, them"],
                ["ellas", "they, hers, them"],
                ["beben", "(they)drink"],
                ["los", "the (plural musculine)"],
                ["las", "the (plural feminine)"],
                ["niños", "boys"],
                ["niñas", "girls"],
                ["Las mujeres", "the women"]
            ];

challenges[4] = [
                    ["Ellos son hombres", "They are men"],
                    ["Ellos beben", "They drink"],
                    ["Los hombres", "The men"],
                    ["Nosotros somos niños", "We are boys"],
                    ["Las niñas", "The girls"],
                    ["Ellas beben leche", "They drink milk"]
                 ];

//LESSON 3
stack[5] = [
                ["vino", "wine"],
                ["libro", "book"],
                ["carta", "letter"],
                ["escribe", "write"],
                ["escribes", "(you) write, write, spell"],
                ["escribo", "(I) write"],
                ["escribimos", "(We) write"]
            ];

challenges[5] = [
                    ["Yo escribo libros", "I write books"],
                    ["Ellos beben vino", "They drink wine"],
                    ["Tú escribes una carta", "You write a letter"],
                    ["Yo escribo una carta", "I write a letter"]
                  ];
//LESSON 4

stack[6] = [
                ["escriben", "(They) write"],
                ["leo", "(I)write"],
                ["lees", "(you) read"],
                ["leemos", "(we) read"],
                ["leen", "(they/you-plural) read"],
                ["lee", "(He/she/it) reads"],
                ["el diario", "the newspaper"],
                ["persona", "person"]
            ];
challenges[6] = [
                    ["Los niños escriben", "The children write"],
                    ["Yo soy una persona", "I am a person"],
                    ["¿Tú lees libros?", "Do you read books?"],
                    ["Ustedes escriben cartas", "You write letters"],
                    ["Ellos leen un libro", "They read a book."],
                    ["Yo leo el diario", "I read the newspaper"],
                    ["Las niñas escriben cartas", "The girls write letters"],
                    ["Nosotros leemos un libro", "We are reading a book"],
                    ["Ellos escriben", "They write"]
                  ];

// Common Phrases

//LESSON 1
stack[7]  = [
                ["hola", "hello, hi, hey"],
                ["adiós", "bye,goodbye"],
                ["días", "days"],
                ["buenos días", "good morning"],
                ["noches", "nights"],
                ["buenas noches", "good night"],
                ["gracias", "thanks,thank you"],
                ["Mucho gusto", "Nice to meet you!"],
                ["gracias", "thanks,thank you"]
              ];
challenges[7] = [
                    ["Hola, buenos dias", "Hello, good morning"],
                    ["Gracias, buenas noches", "Thanks, good night."],
                    ["Hola, mucho gusto", "Hello, nice to meet you."]
                  ];

//LESSON 2
stack[8]  = [
                ["sí", "yes, yeah, do"],
                ["no", "do not, not, did not"],
                ["Por favor", "please"],
                ["nada", "nothing"],
                ["siento", "I am sorry, sorry"],
                ["perdón", "sorry?, sorry, I beg your pardon"]
              ];


challenges[8] = [
                  ["Tú no bebes", "You do not drink"],
                  ["Sí, él es Antonio", "Yes, he is Antonio"],
                  ["Sí, ella es Julia", "Yes, she is Julia"],
                  ["Yo no soy una niña", "I am not a girl"],
                  ["Yo no soy un niño", "I am not a boy"],
                  ["El pan, por favor", "The bread, please."],
                  ["Sí, él es un niño", "Yes, he is a boy"],
                  ["¡Lo siento!", "I am sorry!"],
                  ["Yo no bebo", "I am not baby"]
                ]

//LESSON 3
stack[9]  = [
                ["hablo", "(I)talk, (I)speak"],
                ["hablas", "(you)talk, (you)speak"],
                ["español", "Spanish"],
                ["inglés", "English"],
                ["disculpe", "excuse me"]
              ];

challenges[9] = [
                    ["¿Tú hablas inglés?", "Do you speak English?"],
                    ["Sí yo hablo inglés", "Yes, I speak English."],
                    ["Yo hablo español", "I speak Spanish"],
                    ["Soy Luis, hablo inglés", "I am Luis, i speak English."],
                    ["Yes, I speak Spanish", "Sí, yo hablo español."],
                    ["¿Tú hablas inglés?", "Do you speak English"]
                  ];


// FOOD

//LESSON 1
stack[10]  = [
                ["arroz", "rice"],
                ["comemos", "(we)eat"],
                ["pescado", "fish"],
                ["comen", "(they)eat"],
                ["huevo", "egg"],
                ["cocino", "(I) cook"],
                ["pollo", "chicken"],
                ["queso", "cheese"]
              ];

challenges[10] = [
                    ["Sí, es arroz", "Yes, it is rice"],
                    ["El niño come queso", "The boy eats cheese"],
                    ["Yo cocino el pollo", "I cook the chicken"],
                    ["Ella come pescado", "She eats fish/She is eating fish"],
                    ["Yo cocino pescado", "I cook fish/I am cooking fish"],
                    ["¿Tú comes pescado?", "Do you eat fish?"],
                    ["El niño come pollo", "The boy eats chicken"]
                  ];
//LESSON 2

stack[11]  = [
                ["fruta", "fruit"],
                ["pasta", "pasta"],
                ["jugo", "juice"],
                ["naranja", "orange"],
                ["carne", "meat"],
                ["tomate", "tomato"],
                ["sopa", "soup"],
                ["almuerzo", "lunch"]
              ];

challenges[11] = [
                ["Yo como carne", "I eat meat"],
                ["Yo almuerzo", "I eat lunch"],
                ["Yo cocino pasta", "I cook pasta"],
                ["La naranja es una fruta", "The orange is a fruit"]
              ];

//LESSON 3
stack[12]  = [
                ["fresas", "strawberries"],
                ["limón", "lemon"],
                ["comida", "meal, food"],
                ["papa", "potato"],
                ["salsa", "sauce/gravy"],
                ["cebolla", "onion"],
                ["cena", "dinner"],
                ["desayuno", "breakfast"]
              ];

challenges[12] = [
                    ["Las niñas comen fresas", "The girls eat strawberries"],
                    ["Es una papa.", "It is a potato."],
                    ["Yo cocino una salsa." , "I cook a sauce"]
                  ];


//LESSON 4
stack[13]  = [
                ["azúcar", "sugar"],
                ["la sal", "the salt"],
                ["menú", "menu"],
                ["emparedado", "sandwich"],
                ["cerveza", "beer"],
                ["vegetales", "vegetables"],
                ["té", "tea"],
                ["vegetariano", "vegetarian"]
              ];


challenges[13] = [
                    ["Yo como vegetales.", "I eat vegetables"],
                    ["Él no es vegetariano.", "He is not vegetarian"],
                    ["Tú comes emparedados", "You eat sandwiches"],
                    ["¿Los vegetarianos beben cerveza?", "Do vegetarians drink beer?"],
                    ["Soy vegetariano.", "I am  vegetarian"],
                    ["Los niños son vegetarianos.", "The boys are vegetarian"],
                    ["Tú lees el menú.", "You read the menu"],
                    ["Es un emparedado.", "It is a sandwich"]
                  ];

// ANIMALS

//LESSON 1
stack[14]  = [
                ["el gato", "the cat"],
                ["el perro", "the dog"],
                ["gatos", "(musculine) cats"],
                ["gatas", "(feminine) cats"],
                ["perros", "dogs"],
                ["el caballo", "the horse"]
              ];

challenges[14] = [
                    ["¿Es una gata?", "Is it a cat?"],
                    ["Las gatas beben agua.", "The cats drink water"],
                    ["Los gatos beben leche.", "The cats drink milk"],
                    ["El caballo bebe leche.", "The horse drinks milk."]
                  ];


//LESSON 2
stack[15] = [
                ["los caballos",  "the horses"],
                ["el elefante", "the elephant"],
                ["el pato", "the duck"],
                ["los patos", "the ducks"],
                ["la tortuga", "the turtle"],
                ["las tortugas", "the turtles"]
              ];


challenges[15] = [
                    ["Los elefantes beben agua." , "The elephants drink water"],
                    ["El pato come pan.", "The duck eats bread"],
                    ["Los caballos beben.", "The horses drink"],
                    ["¿Es una tortuga?", "Is it a turtle?"],
                    ["Las tortugas beben agua.", "The turtles drink water"]
                  ];


//LESSON 3
var stack17 = [
                ["el pájaro", "the bird"],
                ["los pájaros", "the birds"],
                ["el cangrejo", "the crab"],
                ["la araña", "the spider"],
                ["animales", "animals"],
                ["animal", "animal"],
                ["el oso", "the bear"]
              ];

var challenges17 = [
                    ["El animal come.", "The animal eats"],
                    ["Los animales beben agua", "The animals drink water"],
                    ["Es una araña." , "It is a spider"],
                    ["La araña come pájaros.", "The spider eats birds"],
                    ["Los caballos son animales.", "The horses are animals"],
                    ["El pájaro bebe agua.", "The bird drinks water"]
                  ];

//LESSON 4
var stack18 = [
                ["el cerdo", "the pig"],
                ["el pingüino" , "the penguin"],
                ["el ratón" , "the mouse"],
                ["conejo" , "rabbit"],
                ["el león" , "the lion"],
                ["el mono" , "the monkey"],
                ["el toro" , "the bull"]
              ];
var challenges18 = [
                    ["El cerdo bebe agua.", "The pig drinks water"],
                    ["Los conejos son animales", "The pigs are animals"],
                    ["Es un mono.", "It is a monkey"],
                    ["El conejo bebe agua.", "The rabbit drinks water"],
                    ["Los monos beben leche", "The monkeys drink milk"]
                  ]
