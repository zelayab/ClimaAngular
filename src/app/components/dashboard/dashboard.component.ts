import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlImagen = 'https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/ke17ZwdGBToddI8pDm48kCMWMBFcqQftRz-JqZZoIB5Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVFI99ncPZu898P4WAmVYNBp8mgB1qWbp5RirnU_Xvq-XCb8BodarTVrzIWCp72ioWw/Weather+Targeting';

  ciudad = '';
  temperatura = 0;
  humedad = 0;
  clima = '';
  query = false;
  loading = false;
  mostrarError = false;

  constructor(private _climaService : ClimaService) {

   }

  ngOnInit(): void {
  }
  obtenerClima(){
    this.query = false;
    console.log(this.ciudad);
    this.loading = true;

    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.loading = false;
      this.query = true;
      this.temperatura = data.main.temp - 273
      this.humedad = data. main.humidity
      this.clima = data.weather[0].main
      this.reset();
    }, error =>{
      this.loading = false;
      this.error();
    })
  }

  // generate error
  error(){
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 2000);
  }

  // reset app
  reset(){
    setTimeout(() =>{
      this.ciudad= '';
      this.query = false;
    },3000);
  }

}
