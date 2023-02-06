import { Fabrika } from './fabrika.js';
import { Silos } from "./silos.js";

let fabrika1=new Fabrika("Zitopek");

let silos1=new Silos("Silos1" ,2000);
let silos2=new Silos("Silos2" ,1000);
let silos3=new Silos("Silos3" ,1500);

fabrika1.dodajSilos(silos1);
fabrika1.dodajSilos(silos2);
fabrika1.dodajSilos(silos3);

fabrika1.crtajFabriku(document.body);
