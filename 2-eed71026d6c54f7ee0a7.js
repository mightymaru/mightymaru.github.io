(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{148:function(E,A,S){"use strict";S.d(A,"b",function(){return t});var e=S(0),R=S.n(e),I=S(4),L=S.n(I),T=S(32),O=S.n(T);S.d(A,"a",function(){return O.a});S(184);var a=R.a.createContext({}),t=function(E){return R.a.createElement(a.Consumer,null,function(A){return E.data||A[E.query]&&A[E.query].data?(E.render||E.children)(E.data?E.data.data:A[E.query].data):R.a.createElement("div",null,"Loading (StaticQuery)")})};t.propTypes={data:L.a.object,query:L.a.string.isRequired,render:L.a.func,children:L.a.func}},184:function(E,A,S){var e;E.exports=(e=S(209))&&e.default||e},205:function(E,A,S){"use strict";var e=S(289),R=S(0),I=S.n(R),L=S(4),T=S.n(L),O=S(290),a=S.n(O);function t(E){var A=E.description,S=E.lang,R=E.meta,L=E.keywords,T=E.title,O=e.data.site,t=A||O.siteMetadata.description;return I.a.createElement(a.a,{htmlAttributes:{lang:S},title:T,titleTemplate:"%s | "+O.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:T},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:O.siteMetadata.author},{name:"twitter:title",content:T},{name:"twitter:description",content:t}].concat(L.length>0?{name:"keywords",content:L.join(", ")}:[]).concat(R)},I.a.createElement("link",{type:"text/css",rel:"stylesheet",href:"//fast.fonts.net/cssapi/4e2f5516-1cdc-4b78-a2a0-44454f03cfaf.css"}))}t.defaultProps={lang:"fr",meta:[],keywords:[],description:""},t.propTypes={description:T.a.string,lang:T.a.string,meta:T.a.arrayOf(T.a.object),keywords:T.a.arrayOf(T.a.string),title:T.a.string.isRequired},A.a=t},207:function(E,A,S){"use strict";var e=S(208),R=S(0),I=S.n(R),L=S(4),T=S.n(L),O=S(148),a=S(168),t=S(274),C=S(283),n=S.n(C),s=function(E){E.children,E.minWidth;return I.a.createElement("div",{className:n.a.wrapper},I.a.createElement(O.a,{className:n.a.a,to:"/en"},"EN"),"  ",I.a.createElement(O.a,{className:n.a.a,to:"/"},"FR"))};S(284);S(285).a.autoAddCss=!1;var o=function(E){var A=E.pageContext?E.pageContext.lang:"fr";return I.a.createElement(O.b,{query:"2994927498",render:function(S){return I.a.createElement(a.I18nProvider,{language:A,catalogs:t.catalogs},I.a.createElement("div",null,I.a.createElement("main",{style:{position:"relative"}},E.children),I.a.createElement(s,null),I.a.createElement("footer",{style:{textAlign:"center",color:"#484848",padding:"20px",fontSize:"10px"}},"© ",(new Date).getFullYear(),", ",I.a.createElement(a.Trans,{id:"All rights reserved."}))))},data:e})};o.propTypes={children:T.a.node.isRequired};A.a=o},208:function(E){E.exports={data:{site:{siteMetadata:{title:"mrmaru - web developement for hire"}}}}},209:function(E,A,S){"use strict";S.r(A);S(33);var e=S(0),R=S.n(e),I=S(4),L=S.n(I),T=S(69),O=S(2),a=function(E){var A=E.location,S=O.default.getResourcesForPathnameSync(A.pathname);return S?R.a.createElement(T.a,Object.assign({location:A,pageResources:S},S.json)):null};a.propTypes={location:L.a.shape({pathname:L.a.string.isRequired}).isRequired},A.default=a},274:function(E,A,S){S(80),S(76);var e=S(275),R=S(282),I=["fr","en"],L={en:e,fr:R};A.defaultLanguage="fr",A.languages=I,A.catalogs=L,A.langPrefix=function(E){return"fr"===E?"":"/"+E},A.deprefix=function(E){return"/"===E[0]&&"/"===E[3]?E.substr(3):E},A.langFromPath=function(E){var A=E.split("/")[1];return I.includes(A)?A:"fr"},A.getLocale=function(){return window.navigator.language||"fr"}},275:function(E,A,S){S(276),S(76),E.exports={languageData:{plurals:function(E,A){var S=String(E).split("."),e=!S[1],R=Number(S[0])==E,I=R&&S[0].slice(-1),L=R&&S[0].slice(-2);return A?1==I&&11!=L?"one":2==I&&12!=L?"two":3==I&&13!=L?"few":"other":1==E&&e?"one":"other"}},messages:{"$1 OYSTER SPECIAL":"$1 OYSTER SPECIAL","'$1 OYSTER SPECIAL'":"'$1 OYSTER SPECIAL'","'PREMIUM OYSTERS'":"'PREMIUM OYSTERS'","(BAVETTE, RED WINE SAUCE)":"(BAVETTE, RED WINE SAUCE)","(LIMITED QUANTITY)":"(LIMITED QUANTITY)","(LIMITED QUATITY)":"(LIMITED QUATITY)","3 GRILLED SHRIMP, 10oz NY STRIP":"3 GRILLED SHRIMP, 10oz NY STRIP","3 GRILLED SHRIMP, NY STRIP":"3 GRILLED SHRIMP, NY STRIP","7oz 1855, BACON, OKA CHEESE,CARAMELIZED ONIONS, POPPY SEED BUN, FRIES":"7oz 1855, BACON, OKA CHEESE,CARAMELIZED ONIONS, POPPY SEED BUN, FRIES","<0><1>(450) 978-0950</1></0><2>2565 Boul. Daniel-Johnson , Laval , QC , H7T1S8</2>":"<0><1>(450) 978-0950</1></0><2>2565 Boul. Daniel-Johnson , Laval , QC , H7T1S8</2>","<0><1>514.482.1471</1></0><2>5669 avenue de Monkland, Montréal (Québec), H4A 1E3 Canada</2>":"<0><1>514.482.1471</1></0><2>5669 avenue de Monkland, Montréal (Québec), H4A 1E3 Canada</2>","<0><1><2><3>Opening Hours: </3></2><4><5>Monday</5><6>5 - 10:30pm</6></4><7><8>Tuesday</8><9>5 - 10:30pm</9></7><10><11>Wednesday</11><12>5 - 10:30pm</12></10><13><14>Thursday</14><15>5 - 10:30pm</15></13><16><17>Friday</17><18>5 - 10:30pm</18></16><19><20>Saturday</20><21>5 - 10:30pm</21></19><22><23>Sunday</23><24>5 - 10:30pm</24></22></1></0>":"<0><1><2><3>Opening Hours: </3></2><4><5>Monday</5><6>5 - 10:30pm</6></4><7><8>Tuesday</8><9>5 - 10:30pm</9></7><10><11>Wednesday</11><12>5 - 10:30pm</12></10><13><14>Thursday</14><15>5 - 10:30pm</15></13><16><17>Friday</17><18>5 - 10:30pm</18></16><19><20>Saturday</20><21>5 - 10:30pm</21></19><22><23>Sunday</23><24>5 - 10:30pm</24></22></1></0>","<0><1><2><3>Opening Hours: </3></2><4><5>Monday</5><6>5:00pm - 10:00pm</6></4><7><8>Tuesday</8><9>5:00pm - 10:00pm</9></7><10><11>Wednesday</11><12>5:00pm - 10:00pm</12></10><13><14>Thursday</14><15>5:00pm - 10:30pm</15></13><16><17>Friday</17><18>5:00pm - 11:00pm</18></16><19><20>Saturday</20><21>5:00pm - 11:00pm</21></19><22><23>Sunday</23><24>5:00pm - 10:00pm</24></22></1></0>":"<0><1><2><3>Opening Hours: </3></2><4><5>Monday</5><6>5:00pm - 10:00pm</6></4><7><8>Tuesday</8><9>5:00pm - 10:00pm</9></7><10><11>Wednesday</11><12>5:00pm - 10:00pm</12></10><13><14>Thursday</14><15>5:00pm - 10:30pm</15></13><16><17>Friday</17><18>5:00pm - 11:00pm</18></16><19><20>Saturday</20><21>5:00pm - 11:00pm</21></19><22><23>Sunday</23><24>5:00pm - 10:00pm</24></22></1></0>","<0><1><2><3>Opening Hours: </3></2><4><5>Monday</5><6>Closed</6></4><7><8>Tuesday</8><9>5 - 10:30pm</9></7><10><11>Wednesday</11><12>5 - 10:30pm</12></10><13><14>Thursday</14><15>5 - 10:30pm</15></13><16><17>Friday</17><18>5 - 10:30pm</18></16><19><20>Saturday</20><21>5 - 10:30pm</21></19><22><23>Sunday</23><24>5 - 10:30pm</24></22></1></0>":"<0><1><2><3>Opening Hours: </3></2><4><5>Monday</5><6>Closed</6></4><7><8>Tuesday</8><9>5 - 10:30pm</9></7><10><11>Wednesday</11><12>5 - 10:30pm</12></10><13><14>Thursday</14><15>5 - 10:30pm</15></13><16><17>Friday</17><18>5 - 10:30pm</18></16><19><20>Saturday</20><21>5 - 10:30pm</21></19><22><23>Sunday</23><24>5 - 10:30pm</24></22></1></0>","<0>Hire me</0>, and let’s get started on your next success.":"<0>Hire me</0>, and let’s get started on your next success.",ABOUT:"ABOUT","ADD GRILLED SHRIMP":"ADD GRILLED SHRIMP","ANCHOVY DRESSING, GARLIC CROUTONS":"ANCHOVY DRESSING, GARLIC CROUTONS","ASIAN SLAW":"ASIAN SLAW","ASIAN-STYLE SALMON TARTARE":"ASIAN-STYLE SALMON TARTARE","ASSORTED FRUIT":"ASSORTED FRUIT","AVOCADO FRIES":"AVOCADO FRIES","All rights reserved.":"All rights reserved.","BACK TO RESTAURANTS & SERVICES":"BACK TO RESTAURANTS & SERVICES","BAJA CHICKEN TACOS":"BAJA CHICKEN TACOS","BASIL, JALAPEÑO, SALSA, BURRATA":"BASIL, JALAPEÑO, SALSA, BURRATA","BBQ CHICKEN":"BBQ CHICKEN","BEEF CARPACCIO":"BEEF CARPACCIO","BEER-BATTERED COD,":"BEER-BATTERED COD,","BEER-BATTERED COD, HOMECUT FRIES":"BEER-BATTERED COD, HOMECUT FRIES","BEET SALAD":"BEET SALAD","BLACK ANGUS BEEF TARTARE":"BLACK ANGUS BEEF TARTARE","BLOODY CAESAR WITH AN OYSTER, CLAM, SHRIMP & A CRAB LEG":"BLOODY CAESAR WITH AN OYSTER, CLAM, SHRIMP & A CRAB LEG","BLOODY CAESAR WITH AN OYSTER, SHRIMP & A CRAB LEG":"BLOODY CAESAR WITH AN OYSTER, SHRIMP & A CRAB LEG","BLUE CHEESE, SMOKED BACON":"BLUE CHEESE, SMOKED BACON","BOOK TABLE":"BOOK TABLE","BRASSERIE BURGER":"BRASSERIE BURGER",BURGER:"BURGER","BURRATA AND BROCCOLINI":"BURRATA AND BROCCOLINI","CAESAR SALAD":"CAESAR SALAD","CAJUN SHRIMP SALAD":"CAJUN SHRIMP SALAD","CALAMARI, OCTOPUS & SHRIMP":"CALAMARI, OCTOPUS & SHRIMP","CALAMARI, OCTOPUS & SHRIMP IN A PIRI PIRI BROTH":"CALAMARI, OCTOPUS & SHRIMP IN A PIRI PIRI BROTH","CAULIFLOWER STEAK":"CAULIFLOWER STEAK","CEDAR PLANK SALMON":"CEDAR PLANK SALMON","CHEESE PIZZA":"CHEESE PIZZA",CHEESEBURGER:"CHEESEBURGER","CHEESY MASHED POTATOES":"CHEESY MASHED POTATOES","CHERRY TOMATOES, PARMESAN":"CHERRY TOMATOES, PARMESAN","CHICKEN FINGERS":"CHICKEN FINGERS","CHICKEN PARM":"CHICKEN PARM","CHOCOLAT GANACHE":"CHOCOLAT GANACHE","CHÂTEAUBRIAND":"CHÂTEAUBRIAND","CHÂTEAUBRIAND 26oz":"CHÂTEAUBRIAND 26oz",CONTACT:"CONTACT","CRISPY CALAMARI":"CRISPY CALAMARI","CRISPY FISH TACOS":"CRISPY FISH TACOS","CUCUMBER SPIRALS, AVOCADO, PONZU SAUCE":"CUCUMBER SPIRALS, AVOCADO, PONZU SAUCE","Contact Lucille's":"Contact Lucille's","Contact Lucille's Laval":"Contact Lucille's Laval","CÔTE DE BOEUF 40oz":"CÔTE DE BOEUF 40oz",DESSERT:"DESSERT","FILET MIGNON":"FILET MIGNON","FILET MIGNON 10oz":"FILET MIGNON 10oz","GARLIC MASHED POTATOES":"GARLIC MASHED POTATOES","GOAT CHEESE, APPLE, CROSTINI":"GOAT CHEESE, APPLE, CROSTINI","GOAT CHEESE, CROSTINI":"GOAT CHEESE, CROSTINI","GRILLED CALAMARI":"GRILLED CALAMARI","GRILLED LOBSTER PLATE":"GRILLED LOBSTER PLATE","GRILLED OCTOPUS ON GREEK SALAD":"GRILLED OCTOPUS ON GREEK SALAD","GRILLED SEAFOOD WITH CHORIZO":"GRILLED SEAFOOD WITH CHORIZO","GRILLED SHRIMP, AVOCADO":"GRILLED SHRIMP, AVOCADO","GRILLED VEGETABLES":"GRILLED VEGETABLES","Get directions":"Get directions","HALF   FULL":"HALF   FULL","HALF  •  FULL":"HALF  •  FULL","HALF RACK • FULL RACK":"HALF RACK • FULL RACK","HALF • FULL":"HALF • FULL","HALF • FULL • ROYAL":"HALF • FULL • ROYAL","HALF-DOZEN  •  DOZEN":"HALF-DOZEN  •  DOZEN","HEIRLOOM TOMATO SALAD":"HEIRLOOM TOMATO SALAD","HOMECUT FRIES":"HOMECUT FRIES","IN A PIRI PIRI BROTH, LINGUINI":"IN A PIRI PIRI BROTH, LINGUINI","KALE AND SWEET CORN SALAD":"KALE AND SWEET CORN SALAD","KANSAS CUT":"KANSAS CUT","KANSAS CUT 8oz":"KANSAS CUT 8oz","KEY LIME TART":"KEY LIME TART","KIDS MENU":"KIDS MENU","LEMON CHICKEN":"LEMON CHICKEN","LETTUCE WRAPS, CRISPY NOODLES":"LETTUCE WRAPS, CRISPY NOODLES","LETTUCE WRAPS, JALAPEÑO, PINEAPPLE SALSA":"LETTUCE WRAPS, JALAPEÑO, PINEAPPLE SALSA","LEVERAGE FIRST CLASS PROBLEM SOLVING SKILLS":"LEVERAGE FIRST CLASS PROBLEM SOLVING SKILLS","LITTLENECK CLAMS IN GARLIC AND CREAM":"LITTLENECK CLAMS IN GARLIC AND CREAM",LOBSTER:"LOBSTER","LOBSTER, SNOW CRAB,":"LOBSTER, SNOW CRAB,","LUCILLE’S CLASSIC FISH & CHIPS":"LUCILLE’S CLASSIC FISH & CHIPS","LUCILLE’S SURF & TURF":"LUCILLE’S SURF & TURF","Located in Montreal's west end, Lucille's Oyster Dive has been serving up oysters and seafood classics since 2009.":"Located in Montreal's west end, Lucille's Oyster Dive has been serving up oysters and seafood classics since 2009.",MAINS:"MAINS","MALT VINEGAR AIOLI":"MALT VINEGAR AIOLI","MAPLE-GLAZED, WITH GREEN SALAD":"MAPLE-GLAZED, WITH GREEN SALAD","MARKET SALAD":"MARKET SALAD","MENU COMING SOON":"MENU COMING SOON","MISO SESAME-CRUSTED TUNA":"MISO SESAME-CRUSTED TUNA","MIXED GREEN SALAD":"MIXED GREEN SALAD","MIXED GREEN SALAD AND FRIES":"MIXED GREEN SALAD AND FRIES","MIXED GREEN SALAD WITH GINGER VINAIGRETTE":"MIXED GREEN SALAD WITH GINGER VINAIGRETTE","MOZZARELLA DI BUFALA":"MOZZARELLA DI BUFALA","MOZZARELLA, APPLE, CROSTINI, SPICED CHICKPEAS":"MOZZARELLA, APPLE, CROSTINI, SPICED CHICKPEAS","MUSHROOMS, OLIVES":"MUSHROOMS, OLIVES","Monday  5–11p.m.<0/>Tuesday 5–11p.m.<1/>Wednesday 5–11p.m. <2/>Thursday  5–11p.m. <3/>Friday  5–11p.m. <4/>Saturday  5–11p.m. <5/>Sunday  5–11p.m":"Monday  5–11p.m.<0/>Tuesday 5–11p.m.<1/>Wednesday 5–11p.m. <2/>Thursday  5–11p.m. <3/>Friday  5–11p.m. <4/>Saturday  5–11p.m. <5/>Sunday  5–11p.m","NEW YORK CHEESECAKE":"NEW YORK CHEESECAKE","NORI CHIP, GINGER PONZU SAUCE":"NORI CHIP, GINGER PONZU SAUCE","ONE LOBSTER ROLL, RIBS, FRIES":"ONE LOBSTER ROLL, RIBS, FRIES","OPENING MAY 31ST":"OPENING MAY 31ST","OYSTERS, AND SHRIMP":"OYSTERS, AND SHRIMP","OYSTERS, CLAMS AND SHRIMP":"OYSTERS, CLAMS AND SHRIMP","Opening Hours: 5pm - close":"Opening Hours: 5pm - close","Opening Hours: 7 days a week, 5-11p.m.":"Opening Hours: 7 days a week, 5-11p.m.","Opening May 31ST":"Opening May 31ST","PANZANELLA SALAD":"PANZANELLA SALAD",PARMESAN:"PARMESAN","PARMESAN CRUST, GUACAMOLE AND HOT SAUCE":"PARMESAN CRUST, GUACAMOLE AND HOT SAUCE","PEI MUSSELS IN WHITE WINE":"PEI MUSSELS IN WHITE WINE","PICKLES, PANKO, MI-CUIT EGG":"PICKLES, PANKO, MI-CUIT EGG","PICKLES, PANKO, RAW EGG":"PICKLES, PANKO, RAW EGG","POKE-STYLE TUNA TARTARE":"POKE-STYLE TUNA TARTARE","PORCINI CRUST, BABY MACHE LETTUCE, ROUILLE, BALSAMIC GLAZE":"PORCINI CRUST, BABY MACHE LETTUCE, ROUILLE, BALSAMIC GLAZE","PORTERHOUSE 40oz":"PORTERHOUSE 40oz","PREMIUM OYSTERS":"PREMIUM OYSTERS","PROVOLONE, PICKLED PEPPERS, GREEN TAHINI SAUCE":"PROVOLONE, PICKLED PEPPERS, GREEN TAHINI SAUCE","RAW BAR":"RAW BAR",RIBSTEAK:"RIBSTEAK","RIBSTEAK 20oz":"RIBSTEAK 20oz","ROASTED CAULIFLOWER":"ROASTED CAULIFLOWER","ROCK SHRIMP, ZUCCHINI NOODLES":"ROCK SHRIMP, ZUCCHINI NOODLES","RYE BREAD, RAW EGG":"RYE BREAD, RAW EGG","SEAFOOD BLOODY CAESAR":"SEAFOOD BLOODY CAESAR","SEAFOOD TOWER":"SEAFOOD TOWER","SERVED WITH FRIES OR SALAD":"SERVED WITH FRIES OR SALAD","SHELLFISH COCKTAILS":"SHELLFISH COCKTAILS","SHRIMP ZOODLES":"SHRIMP ZOODLES",SIDES:"SIDES","SIX SHRIMP":"SIX SHRIMP","SMALL CAESAR SALAD":"SMALL CAESAR SALAD","SMALL KALE SALAD":"SMALL KALE SALAD","SMALL MYKONOS GREEK SALAD":"SMALL MYKONOS GREEK SALAD","SMALL SIRLOIN":"SMALL SIRLOIN","SMOKED BABY BACK RIBS":"SMOKED BABY BACK RIBS","SNOW CRAB":"SNOW CRAB","SPAGHETTI WITH BUTTER OR TOMATO SAUCE":"SPAGHETTI WITH BUTTER OR TOMATO SAUCE",STARTERS:"STARTERS","STEAK & PRAWNS":"STEAK & PRAWNS","STEAK-FRITES":"STEAK-FRITES",STEAKS:"STEAKS","STEAKS FOR TWO":"STEAKS FOR TWO","STEAMED BROCCOLI":"STEAMED BROCCOLI",STEAMERS:"STEAMERS","SWEET POTATO FRIES":"SWEET POTATO FRIES","TAKE A 3D TOUR":"TAKE A 3D TOUR","TAMARIND, GUACAMOLE, TORTILLAS":"TAMARIND, GUACAMOLE, TORTILLAS","TARTARE SAUCE":"TARTARE SAUCE","TWO BLACK ANGUS JUNIOR CHEESEBURGERS":"TWO BLACK ANGUS JUNIOR CHEESEBURGERS","TWO LOBSTER ROLLS":"TWO LOBSTER ROLLS","TWO TACOS WITH MANGO AND TOMATILLO SALSA":"TWO TACOS WITH MANGO AND TOMATILLO SALSA","Tel: (450) 978-0950":"Tel: (450) 978-0950","Tel: 514.482.1471":"Tel: 514.482.1471","The goal is to provide patrons with the best selection of both east and west coast oysters. According to seasonal availability, the oyster selection changes daily. While the classics include lobster rolls and fish & chips, the Lucille's kitchen changes it up with seafood dishes that keep our patrons coming back.":"The goal is to provide patrons with the best selection of both east and west coast oysters. According to seasonal availability, the oyster selection changes daily. While the classics include lobster rolls and fish & chips, the Lucille's kitchen changes it up with seafood dishes that keep our patrons coming back.","VANILLA ICE CREAM":"VANILLA ICE CREAM","VEAL MILANESE":"VEAL MILANESE","WEDGE SALAD":"WEDGE SALAD","WHOLE FISH CEVICHE FOR TWO":"WHOLE FISH CEVICHE FOR TWO","WHOLE GRILLED LOBSTER":"WHOLE GRILLED LOBSTER","WOOD-FIRED OVEN CHICKEN":"WOOD-FIRED OVEN CHICKEN","Whether you're looking for a quick bite at the bar, or an evening with friends, the staff has a reputation of making it all seem like home.":"Whether you're looking for a quick bite at the bar, or an evening with friends, the staff has a reputation of making it all seem like home.","While the menu changes seasonally, the Lucille's 1855 Butcher's Cut are a year round staple. The in-house, dry aged and charcoal grilled steaks have made this Dive a destination for beef enthusiasts.":"While the menu changes seasonally, the Lucille's 1855 Butcher's Cut are a year round staple. The in-house, dry aged and charcoal grilled steaks have made this Dive a destination for beef enthusiasts.","ZUCCHINI SPAGHETTI, RED SAUCE, FRESH PARMESAN":"ZUCCHINI SPAGHETTI, RED SAUCE, FRESH PARMESAN","['SIX SHRIMP', 'SNOW CRAB', 'LOBSTER']":"['SIX SHRIMP', 'SNOW CRAB', 'LOBSTER']","http://www.bookenda.com/Images/badge-booknow_book_EN.png":"http://www.bookenda.com/Images/badge-booknow_book_EN.png","https://www.bookenda.com/Images/badge-booknow_book_EN.png":"https://www.bookenda.com/Images/badge-booknow_book_EN.png","https://www.bookenda.com/restaurant-booker?businessName=lucilles-oyster-dive":"https://www.bookenda.com/restaurant-booker?businessName=lucilles-oyster-dive","https://www.bookenda.com/restaurant-booker?businessName=lucilles-oyster-dive-laval":"https://www.bookenda.com/restaurant-booker?businessName=lucilles-oyster-dive-laval","https://www.google.ca/maps/place/Lucille's+Laval/@45.5696867,-73.7561937,18z/data=!4m8!1m2!2m1!1sRestaurant!3m4!1s0x4cc9236f6a55becd:0xef71e59aaf8d54db!8m2!3d45.5694916!4d-73.7570143":"https://www.google.ca/maps/place/Lucille's+Laval/@45.5696867,-73.7561937,18z/data=!4m8!1m2!2m1!1sRestaurant!3m4!1s0x4cc9236f6a55becd:0xef71e59aaf8d54db!8m2!3d45.5694916!4d-73.7570143","{0}":function(E){return[E("0")]},"{d} <0/>":function(E){return[E("d")," <0/>"]},"{t} <0/>":function(E){return[E("t")," <0/>"]}}}},282:function(E,A){E.exports={languageData:{plurals:function(E,A){return A?1==E?"one":"other":E>=0&&E<2?"one":"other"}},messages:{"$1 OYSTER SPECIAL":"SPÉCIAL: HUÎTRES À 1$        ","'$1 OYSTER SPECIAL'":"'$1 OYSTER SPECIAL'","'PREMIUM OYSTERS'":"'PREMIUM OYSTERS'","(BAVETTE, RED WINE SAUCE)":"(BAVETTE, BORDELAISE)","(LIMITED QUANTITY)":"(QUANTITÉ LIMITÉE)","(LIMITED QUATITY)":"(LIMITED QUATITY)","3 GRILLED SHRIMP, 10oz NY STRIP":"3 CREVETTES GRILLÉES, NY STRIP DE 10oz","3 GRILLED SHRIMP, NY STRIP":"3 CREVETTES GRILLÉES, NY STRIP","7oz 1855, BACON, OKA CHEESE,CARAMELIZED ONIONS, POPPY SEED BUN, FRIES":"7OZ DE 1855, BACON, FROMAGE OKA, OIGNONS CARAMÉLISÉS, BUN AU PAVOT, FRITES MAISON","<0><1>(450) 978-0950</1></0><2>2565 Boul. Daniel-Johnson , Laval , QC , H7T1S8</2>":"<0><1>(450) 978-0950</1></0><2>2565 Boul. Daniel-Johnson , Laval , QC , H7T1S8</2>","<0><1>514.482.1471</1></0><2>5669 avenue de Monkland, Montréal (Québec), H4A 1E3 Canada</2>":"<0><1>514.482.1471</1></0><2>5669 avenue de Monkland, Montréal (Québec), H4A 1E3 Canada</2>","<0><1><2><3>Opening Hours: </3></2><4><5>Monday</5><6>5 - 10:30pm</6></4><7><8>Tuesday</8><9>5 - 10:30pm</9></7><10><11>Wednesday</11><12>5 - 10:30pm</12></10><13><14>Thursday</14><15>5 - 10:30pm</15></13><16><17>Friday</17><18>5 - 10:30pm</18></16><19><20>Saturday</20><21>5 - 10:30pm</21></19><22><23>Sunday</23><24>5 - 10:30pm</24></22></1></0>":"<0><1><2><3>Heures d'ouverture: </3></2><4><5>lundi</5><6>17h00 - 22h30</6></4><7><8>mardi</8><9>17h00 - 22h30</9></7><10><11>mercredi</11><12>17h00 - 22h30</12></10><13><14>jeudi</14><15>17h00 - 22h30</15></13><16><17>vendredi</17><18>17h00 - 22h30</18></16><19><20>samedis</20><21>17h00 - 22h30</21></19><22><23>dimanche</23><24>17h00 - 22h30</24></22></1></0>","<0><1><2><3>Opening Hours: </3></2><4><5>Monday</5><6>5:00pm - 10:00pm</6></4><7><8>Tuesday</8><9>5:00pm - 10:00pm</9></7><10><11>Wednesday</11><12>5:00pm - 10:00pm</12></10><13><14>Thursday</14><15>5:00pm - 10:30pm</15></13><16><17>Friday</17><18>5:00pm - 11:00pm</18></16><19><20>Saturday</20><21>5:00pm - 11:00pm</21></19><22><23>Sunday</23><24>5:00pm - 10:00pm</24></22></1></0>":"<0><1><2><3>Heures d'ouverture: </3></2><4><5>lundi</5><6>17h00 - 22h00</6></4><7><8>mardi</8><9>17h00 - 22h00</9></7><10><11>mercredi</11><12>17h00 - 22h00</12></10><13><14>jeudi</14><15>17h00 - 22h30</15></13><16><17>vendredi</17><18>17h00 - 23h00</18></16><19><20>samedi</20><21>17h00 - 23h00</21></19><22><23>dimanche</23><24>17h00 - 22h00</24></22></1></0>","<0><1><2><3>Opening Hours: </3></2><4><5>Monday</5><6>Closed</6></4><7><8>Tuesday</8><9>5 - 10:30pm</9></7><10><11>Wednesday</11><12>5 - 10:30pm</12></10><13><14>Thursday</14><15>5 - 10:30pm</15></13><16><17>Friday</17><18>5 - 10:30pm</18></16><19><20>Saturday</20><21>5 - 10:30pm</21></19><22><23>Sunday</23><24>5 - 10:30pm</24></22></1></0>":"<0><1><2><3>Heures d'ouverture: </3></2><4><5>lundi</5><6>Fermé</6></4><7><8>mardi</8><9>17h00 - 22h30</9></7><10><11>mercredi</11><12>17h00 - 22h30</12></10><13><14>jeudi</14><15>17h00 - 22h30</15></13><16><17>vendredi</17><18>17h00 - 22h30</18></16><19><20>samedis</20><21>17h00 - 22h30</21></19><22><23>dimanche</23><24>17h00 - 22h30</24></22></1></0>","<0>Hire me</0>, and let’s get started on your next success.":"<0>Hire me</0>, and let’s get started on your next success.",ABOUT:"À PROPOS","ADD GRILLED SHRIMP":"AJOUTER CREVETTES GRILLÉS","ANCHOVY DRESSING, GARLIC CROUTONS":"VINAIGRETTE AUX ANCHOIS, CROUTONS À L’AIL","ASIAN SLAW":"SALADE DE CHOU ASIATIQUE","ASIAN-STYLE SALMON TARTARE":"TARTARE DE SAUMON ASIATIQUE","ASSORTED FRUIT":"FRUITS ASSORTIS","AVOCADO FRIES":"FRITES D’AVOCAT","All rights reserved.":"All rights reserved.","BACK TO RESTAURANTS & SERVICES":"RETOUR AUX RESTAURANTS ET SERVICES","BAJA CHICKEN TACOS":"WRAPS DE POULET BAJA","BASIL, JALAPEÑO, SALSA, BURRATA":"BASILIC, JALAPEÑO, SALSA, BURRATA","BBQ CHICKEN":"POULET BBQ","BEEF CARPACCIO":"CARPACCIO DE BOEUF","BEER-BATTERED COD,":"MORUE AVEC PANURE DE BIÈRE","BEER-BATTERED COD, HOMECUT FRIES":"MORUE AVEC PANURE DE BIÈRE","BEET SALAD":"SALADE DE BETTERAVES","BLACK ANGUS BEEF TARTARE":"TARTARE DE BOEUF ANGUS NOIR","BLOODY CAESAR WITH AN OYSTER, CLAM, SHRIMP & A CRAB LEG":"«BLOODY CAESAR» AVEC HUÎTRE, PALOURDE, CREVETTE ET CRABE","BLOODY CAESAR WITH AN OYSTER, SHRIMP & A CRAB LEG":"«BLOODY CAESAR» AVEC HUÎTRE, CREVETTE ET CRABE","BLUE CHEESE, SMOKED BACON":"FROMAGE BLEU, BACON FUMÉ","BOOK TABLE":"RÉSERVER UNE TABLE","BRASSERIE BURGER":"BURGER LA BRASSERIE",BURGER:"BURGER","BURRATA AND BROCCOLINI":"BURRATA ET BROCCOLINI","CAESAR SALAD":"SALADE CÉSAR","CAJUN SHRIMP SALAD":"SALADE DE CREVETTES CAJUNS","CALAMARI, OCTOPUS & SHRIMP":"CALAMARS, PIEUVRE, CREVETTES,","CALAMARI, OCTOPUS & SHRIMP IN A PIRI PIRI BROTH":"CALAMARS, PIEUVRE, CREVETTES, CHORIZO, SAUCE PIRI PIRI","CAULIFLOWER STEAK":"STEAK DE CHOU-FLEUR","CEDAR PLANK SALMON":"SAUMON SUR PLANCHE DE CÈDRE","CHEESE PIZZA":"PIZZA AU FROMAGE",CHEESEBURGER:"BURGER AU FROMAGE","CHEESY MASHED POTATOES":"PURÉE DE PDT AU FROMAGE","CHERRY TOMATOES, PARMESAN":"TOMATES CERISES, PARMESAN","CHICKEN FINGERS":"DOIGTS DE POULET","CHICKEN PARM":"ESCALOPE DE POULET AU PARMESAN","CHOCOLAT GANACHE":"GANACHE AU CHOCOLAT","CHÂTEAUBRIAND":"CHÂTEAUBRIAND","CHÂTEAUBRIAND 26oz":"CHÂTEAUBRIAND 26oz",CONTACT:"CONTACT","CRISPY CALAMARI":"CALMARS FRITS","CRISPY FISH TACOS":"TACOS DE POISSON CROUSTILLANTS","CUCUMBER SPIRALS, AVOCADO, PONZU SAUCE":"SPIRALES DE CONCOMBRE, AVOCAT, VINAIGRETTE PONZU","Contact Lucille's":"Contacter Lucille's","Contact Lucille's Laval":"Contacter Lucille's Laval","CÔTE DE BOEUF 40oz":"CÔTE DE BOEUF 40oz",DESSERT:"DESSERT","FILET MIGNON":"FILET MIGNON","FILET MIGNON 10oz":"FILET MIGNON 10oz","GARLIC MASHED POTATOES":"PURÉE DE PDT À L’AIL","GOAT CHEESE, APPLE, CROSTINI":"FROM. DE CHÈVRE, POMMES, CROSTINIS","GOAT CHEESE, CROSTINI":"FROM. DE CHÈVRE, CROSTINIS","GRILLED CALAMARI":"CALAMARS GRILLÉS","GRILLED LOBSTER PLATE":"HOMARD GRILLÉ","GRILLED OCTOPUS ON GREEK SALAD":"PIEUVRE GRILLÉE SUR SALADE GRECQUE","GRILLED SEAFOOD WITH CHORIZO":"FRUITS DE MER GRILLÉS","GRILLED SHRIMP, AVOCADO":"CREVETTES GRILLÉES, AVOCAT","GRILLED VEGETABLES":"LÉGUMES GRILLÉS","Get directions":"Obtenir des directions","HALF   FULL":"DEMIE   ENTIÈRE","HALF  •  FULL":"DEMIE • ENTIÈRE","HALF RACK • FULL RACK":"DEMIE • ENTIÈRES","HALF • FULL":"DEMIE • ENTIÈRE","HALF • FULL • ROYAL":"PETIT • GRAND • ROYAL","HALF-DOZEN  •  DOZEN":"DEMIE-DOUZAINE • DOUZAINE","HEIRLOOM TOMATO SALAD":"SALADE DE TOMATES ANCESTRALES","HOMECUT FRIES":"FRITES MAISON","IN A PIRI PIRI BROTH, LINGUINI":"CHORIZO, SAUCE PIRI PIRI, LINGUINI","KALE AND SWEET CORN SALAD":"SALADE DE CHOU FRISÉ","KANSAS CUT":"COUPE KANSAS","KANSAS CUT 8oz":"COUPE KANSAS 8oz","KEY LIME TART":"TARTE AU CITRON VERT","KIDS MENU":"MENU POUR ENFANT","LEMON CHICKEN":"POULET CITRON","LETTUCE WRAPS, CRISPY NOODLES":"FEUILLES DE LAITUE, NOUILLES DE RIZ","LETTUCE WRAPS, JALAPEÑO, PINEAPPLE SALSA":"FEUILLES DE LAITUE, JALAPEÑO, SALSA AUX ANANAS","LEVERAGE FIRST CLASS PROBLEM SOLVING SKILLS":"LEVERAGE FIRST CLASS PROBLEM SOLVING SKILLS","LITTLENECK CLAMS IN GARLIC AND CREAM":"PALOURDES LITTLENECK À LA CRÈME ET À L’AIL",LOBSTER:"HOMARD","LOBSTER, SNOW CRAB,":"HOMARD, CRABE,","LUCILLE’S CLASSIC FISH & CHIPS":"«FISH & CHIPS» LUCILLE’S","LUCILLE’S SURF & TURF":"«SURF & TURF» LUCILLE’S","Located in Montreal's west end, Lucille's Oyster Dive has been serving up oysters and seafood classics since 2009.":"Situé dans la partie ouest de Montréal, Lucille’s Oyster Dive propose des huîtres et des plats traditionnels de fruits de mer depuis 2009.",MAINS:"PLATS","MALT VINEGAR AIOLI":"AÏOLI AU VINAIGRE DE MALT","MAPLE-GLAZED, WITH GREEN SALAD":"LAQUÉ À L’ÉRABLE, SALADE VERTE","MARKET SALAD":"SALADE DU MARCHÉ","MENU COMING SOON":"MENU À VENIR","MISO SESAME-CRUSTED TUNA":"THON AU MISO ET AU SÉSAME","MIXED GREEN SALAD":"SALADE VERTE","MIXED GREEN SALAD AND FRIES":"SALADE VERTE, FRITES MAISON","MIXED GREEN SALAD WITH GINGER VINAIGRETTE":"SALADE VERTE AVEC VINAIGRETTE AU GINGEMBRE","MOZZARELLA DI BUFALA":"MOZZARELLA DI BUFALA","MOZZARELLA, APPLE, CROSTINI, SPICED CHICKPEAS":"MOZZARELLA, POMMES, CROSTINIS, POIS CHICHES ASSAISONNÉS","MUSHROOMS, OLIVES":"CHAMPIGNONS, OLIVES","Monday  5–11p.m.<0/>Tuesday 5–11p.m.<1/>Wednesday 5–11p.m. <2/>Thursday  5–11p.m. <3/>Friday  5–11p.m. <4/>Saturday  5–11p.m. <5/>Sunday  5–11p.m":"lundi  17h00-23h00<0/>mardi 17h00-23h00<1/>mercredi 17h00-23h00<2/>jeudi 17h00-23h00<3/>vendredi 17h00-23h00<4/>samedi 17h00-23h00<5/>dimanche 17h00-23h00","NEW YORK CHEESECAKE":"GÂTEAU AU FROMAGE NEW YORK","NORI CHIP, GINGER PONZU SAUCE":"CHIP D’ALGUE NORI, VINAIGRETTE GINGEMBRE PONZU","ONE LOBSTER ROLL, RIBS, FRIES":"UNE GUÉDILLES DE HOMARD, CÔTES LEVÉES, FRITES MAISON","OPENING MAY 31ST":"OUVERTURE LE 31 MAI","OYSTERS, AND SHRIMP":"HUÎTRES, CREVETTES","OYSTERS, CLAMS AND SHRIMP":"PALOURDES ET CREVETTES","Opening Hours: 5pm - close":"Heures d'ouverture: 7 jours par semaine, 17h à la fermeture","Opening Hours: 7 days a week, 5-11p.m.":"Heures d'ouverture: 7 jours par semaine, 17h à 23h","Opening May 31ST":"OUVERTURE LE 31 MAI","PANZANELLA SALAD":"SALADE PANZANELLA",PARMESAN:"MAÏS SUCRÉ, PARMESAN","PARMESAN CRUST, GUACAMOLE AND HOT SAUCE":"CROÛTE PARMESAN, GUACAMOLE, SAUCE PIQUANTE","PEI MUSSELS IN WHITE WINE":"MOULES DE L’Î.P.É. AU VIN BLANC","PICKLES, PANKO, MI-CUIT EGG":"CORNICHONS, PANKO, OEUF MI-CUIT","PICKLES, PANKO, RAW EGG":"CORNICHONS, PANKO, OEUF CRU","POKE-STYLE TUNA TARTARE":"TARTARE DE THON «POKE»","PORCINI CRUST, BABY MACHE LETTUCE, ROUILLE, BALSAMIC GLAZE":"CROÛTE DE PORCINI, MÂCHE, ROUILLE, RÉDUCTION DE BALSAMIQUE","PORTERHOUSE 40oz":"PORTERHOUSE 40oz","PREMIUM OYSTERS":"HUÎTRES PREMIUM","PROVOLONE, PICKLED PEPPERS, GREEN TAHINI SAUCE":"PROVOLONE, POIVRONS MARINÉS, TAHINI","RAW BAR":"BAR À HUÎTRES",RIBSTEAK:"ENTRECÔTE","RIBSTEAK 20oz":"ENTRECÔTE 20oz","ROASTED CAULIFLOWER":"CHOU-FLEUR RÔTI","ROCK SHRIMP, ZUCCHINI NOODLES":"«ZOODLES» AUX CREVETTES","RYE BREAD, RAW EGG":"PAIN DE SEIGLE, OEUF CRU","SEAFOOD BLOODY CAESAR":"CAESAR AUX FRUITS DE MER","SEAFOOD TOWER":"PLATEAUX","SERVED WITH FRIES OR SALAD":"SERVIS AVEC FRITES OU SALADE","SHELLFISH COCKTAILS":"COCKTAILS DE FRUITS DE MER","SHRIMP ZOODLES":"«ZOODLES» AUX CREVETTES",SIDES:"ACCOMPAGNEMENTS","SIX SHRIMP":"SIX CREVETTES","SMALL CAESAR SALAD":"PETITE SALADE CÉSAR","SMALL KALE SALAD":"PETITE SALADE DE CHOU FRISÉ","SMALL MYKONOS GREEK SALAD":"PETITE SALADE GRECQUE MYKONOS","SMALL SIRLOIN":"PETITE SURLONGE","SMOKED BABY BACK RIBS":"CÔTES LEVÉES","SNOW CRAB":"CRABE DES NEIGES","SPAGHETTI WITH BUTTER OR TOMATO SAUCE":"SPAGHETTI AU BEURRE OU AVEC SAUCE TOMATE",STARTERS:"ENTRÉES","STEAK & PRAWNS":"STEAK ET CREVETTES","STEAK-FRITES":"STEAK-FRITES",STEAKS:"STEAKS","STEAKS FOR TWO":"COUPES POUR DEUX","STEAMED BROCCOLI":"BROCOLI",STEAMERS:"À LA VAPEUR","SWEET POTATO FRIES":"FRITES DE PDT DOUCES","TAKE A 3D TOUR":"FAITES UNE VISITE EN 3D","TAMARIND, GUACAMOLE, TORTILLAS":"TAMARIN, GUACAMOLE, TORTILLAS","TARTARE SAUCE":"SAUCE TARTARE","TWO BLACK ANGUS JUNIOR CHEESEBURGERS":"DEUX CHEESEBURGERS JUNIORS","TWO LOBSTER ROLLS":"DEUX GUÉDILLES DE HOMARD","TWO TACOS WITH MANGO AND TOMATILLO SALSA":"DEUX TACOS, MANGUE ET TOMATILLE","Tel: (450) 978-0950":"Tél: (450) 978-0950","Tel: 514.482.1471":"Tél: 514.482.1471","The goal is to provide patrons with the best selection of both east and west coast oysters. According to seasonal availability, the oyster selection changes daily. While the classics include lobster rolls and fish & chips, the Lucille's kitchen changes it up with seafood dishes that keep our patrons coming back.":"Le but est d’offrir à nos hôtes la meilleure sélection d'huîtres à la fois de la côte est et de la côte ouest. Selon la disponibilité saisonnière, la sélection d'huîtres change tous les jours. Alors que les plats traditionnels comprennent des guedilles de homard et le fish & chips, la cuisine de Lucille varie et modernise ses plats de fruits de mer qui appellent nos clients à revenir.","VANILLA ICE CREAM":"CRÈME GLACÉE À LA VANILLE","VEAL MILANESE":"VEAU MILANAISE","WEDGE SALAD":"QUARTIER DE LAITUE","WHOLE FISH CEVICHE FOR TWO":"CEVICHE DE POISSON ENTIER POUR DEUX","WHOLE GRILLED LOBSTER":"HOMARD GRILLÉ ENTIER","WOOD-FIRED OVEN CHICKEN":"POULET AU FOUR À BOIS","Whether you're looking for a quick bite at the bar, or an evening with friends, the staff has a reputation of making it all seem like home.":"Que vous soyez à la recherche d’une bouchée rapide au comptoir, ou une soirée entre amis, le personnel a la réputation de vous accueillir comme à la maison.","While the menu changes seasonally, the Lucille's 1855 Butcher's Cut are a year round staple. The in-house, dry aged and charcoal grilled steaks have made this Dive a destination for beef enthusiasts.":"Bien que le menu change selon les saisons, les Lucille’s 1855 Butcher’s Cut sont un aliment de base toute l'année. La cuisine interne, les steaks de boeuf vieillis à sec ou grillés au charbon de bois ont fait de cette Dive une destination pour les amateurs de viande de boeuf.","ZUCCHINI SPAGHETTI, RED SAUCE, FRESH PARMESAN":"SPAGHETTI DE COURGETTES, SAUCE TOMATE, PARMESAN RÂPÉ","['SIX SHRIMP', 'SNOW CRAB', 'LOBSTER']":"['SIX SHRIMP', 'SNOW CRAB', 'LOBSTER']","http://www.bookenda.com/Images/badge-booknow_book_EN.png":"http://www.bookenda.com/Images/badge-booknow_book_FR.png","https://www.bookenda.com/Images/badge-booknow_book_EN.png":"https://www.bookenda.com/Images/badge-booknow_book_FR.png","https://www.bookenda.com/restaurant-booker?businessName=lucilles-oyster-dive":"https://www.bookenda.com/restaurant-booker?businessName=lucilles-oyster-dive&language=French","https://www.bookenda.com/restaurant-booker?businessName=lucilles-oyster-dive-laval":"https://www.bookenda.com/restaurant-booker?businessName=lucilles-oyster-dive-laval&language=French","https://www.google.ca/maps/place/Lucille's+Laval/@45.5696867,-73.7561937,18z/data=!4m8!1m2!2m1!1sRestaurant!3m4!1s0x4cc9236f6a55becd:0xef71e59aaf8d54db!8m2!3d45.5694916!4d-73.7570143":"https://www.google.ca/maps/place/Lucille's+Laval/@45.5696867,-73.7561937,18z/data=!4m8!1m2!2m1!1sRestaurant!3m4!1s0x4cc9236f6a55becd:0xef71e59aaf8d54db!8m2!3d45.5694916!4d-73.7570143?hl=fr","{0}":function(E){return[E("0")]},"{d} <0/>":function(E){return[E("d")," <0/>"]},"{t} <0/>":function(E){return[E("t")," <0/>"]}}}},289:function(E){E.exports={data:{site:{siteMetadata:{title:"mrmaru - web developement for hire",description:"Developer for hire in the greater Montreal area or remotly to!",author:"@mrmaru"}}}}}}]);
//# sourceMappingURL=2-eed71026d6c54f7ee0a7.js.map