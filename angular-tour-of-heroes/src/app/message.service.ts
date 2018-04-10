import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class MessageService {
  constructor(private toastr :ToastrService) { }

  success(message:string):void {
    this.toastr.success(message);
  }
  
  error(message :string) :void{
    this.toastr.error(message);
  }

}
