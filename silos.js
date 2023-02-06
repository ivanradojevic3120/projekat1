export class Silos{
    constructor(oznaka, kapacitet)
    {
        if(oznaka){
            this.oznaka=oznaka;
        }
        else{
            this.oznaka="Default";
        }
        
        if(kapacitet){
            this.kapacitet=kapacitet;
        }
        else{
            this.kapacitet=1000;
        }
        
        this.trKolicina=0;
        this.container=null;

    }

    crtajSilos(gde){
        this.container=document.createElement('div');//<div class="silos"></div>
        this.container.className="silos";
        gde.appendChild(this.container);

        let nazivSilosa=document.createElement('label');
        nazivSilosa.className="naziv-silosa";
        nazivSilosa.innerHTML=this.oznaka;//<lable>Silos 1</lablr>
        this.container.appendChild(nazivSilosa);
        
        let kolicina=document.createElement('label');
        kolicina.className='kolicina-materijala';
        kolicina.innerHTML=`${this.trKolicina}t/ ${this.kapacitet}t`;
        this.container.appendChild(kolicina);

        let popunjenost=document.createElement('div');
        popunjenost.className='popunjenost';
        this.container.appendChild(popunjenost);

        let popuna=document.createElement('div');
        popuna.className='popuna';
        popuna.style.flexGrow=this.trKolicina/this.kapacitet;
        popunjenost.appendChild(popuna);



    }

    dodajKolicinu(koliko){
        if(koliko<0)
        alert('nemoguce je uneti negativnu vrednost');

       else  if(this.trKolicina+koliko<=this.kapacitet){
            this.trKolicina+=koliko;

            let kolicina=this.container.querySelector('.kolicina-materijala');
            kolicina.innerHTML=`${this.trKolicina}t/ ${this.kapacitet}t`;

            let popuna=this.container.querySelector('.popuna');
            popuna.style.flexGrow=this.trKolicina/this.kapacitet;
        }
        else{
            alert('Nema mest au silosu');
        }
    }

}