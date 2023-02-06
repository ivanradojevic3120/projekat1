export class Fabrika{
    constructor(naziv){
        if(naziv){
            this.naziv=naziv;
        }
        else{
            this.naziv="default"
        }
        this.listasilosa=[];
        this.container=null;

    }

    dodajSilos(silos){

        this.listasilosa.push(silos);

    }

    crtajFabriku(gde){
        this.container=document.createElement('div');
        this.container.className='fabrika';
        gde.appendChild(this.container);

        let levi=document.createElement('div');
        levi.className='fabrika-info';
        this.container.appendChild(levi);

        let desni=document.createElement('div');
        levi.className='forma';
        this.container.appendChild(desni);

        let naslov=document.createElement('h2');
        naslov.innerHTML=this.naziv;
        naslov.className='naslov';
        levi.appendChild(naslov);

        let silosi=document.createElement('div');
        silosi.className='silosi';
        levi.appendChild(silosi);

         this.listasilosa.forEach((silos, index)=>{
        silos.crtajSilos(silosi);
         })


         let desnoPrvi=document.createElement('div');
         desnoPrvi.className='desno-prvi';
         desni.appendChild(desnoPrvi);

         const labelaSilos=document.createElement('label');
         labelaSilos.innerHTML='Silos';
         desnoPrvi.appendChild(labelaSilos);

         let selekt=document.createElement('select');
         selekt.className='selekt';
         desnoPrvi.appendChild(selekt);

         this.listasilosa.forEach((silos, index)=>{
            let opcija=document.createElement('option');
            opcija.className='opcija';
            opcija.innerHTML=silos.oznaka;

            opcija.value=index;
            selekt.appendChild(opcija);

         })

         let desniDrugi=document.createElement('div');
         desniDrugi.className='desno-drugi';
         desni.appendChild(desniDrugi);

        let labelaKolicina=document.createElement('label');
        labelaKolicina.innerHTML='Kolicina';
        desniDrugi.appendChild(labelaKolicina);

        let inputKolicina=document.createElement('input');
        inputKolicina.type='number';
         inputKolicina.className='input-kolicina';
        desniDrugi.appendChild(inputKolicina);

        let dugme=document.createElement('button');
        dugme.innerHTML='Sipaj u silos';
        dugme.className='dugme';
        desni.appendChild(dugme);

        dugme.onclick=(ev)=>this.klikNaDugme();
    }

    klikNaDugme(){
        //menja kolicinu u silosu
        //kom silosu se menja kolicina
        //koja je kolicina

        let indexGdeSipam=this.container.querySelector(".selekt").value;
        console.log(indexGdeSipam);

        let kolicinaZaSipanje=parseInt(this.container.querySelector('.input-kolicina').value);

        this.listasilosa[indexGdeSipam].dodajKolicinu(kolicinaZaSipanje);

    }
}