import { Component, Input } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/weather.interface';
import { faTemperatureLow, faTemperatureHigh, faDroplet, faWind} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-wather-card',
  templateUrl: './wather-card.component.html',
  styleUrls: []
})
export class WatherCardComponent{
  //Dados da previsão do tempo recebidos pelo componente pai
  @Input() weatherDatasInput!: WeatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidity = faDroplet;
  windIcon = faWind;
}
