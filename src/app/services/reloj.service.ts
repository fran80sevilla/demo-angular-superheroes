import { Injectable } from '@angular/core';

@Injectable()
export class RelojService {

  private today: number;
  
  /**
   * hacemos accesible la fecha actual
   */
  public accesoHoraService(){
    this.today =  Date.now();
    return this.today;
  }
}
