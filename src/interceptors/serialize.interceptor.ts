import { UseInterceptors,NestInterceptor,ExecutionContext,CallHandler } from "@nestjs/common";

import { Observable, observable } from "rxjs";
import { map } from "rxjs";

import { plainToClass } from "class-transformer";

export class SerializeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler): Observable<any> {
     console.log('Im running before the handler',context) 

    return handler.handle().pipe(
      map((data:any)=>{
        //run something befor the response in sent out
        console.log('Im running before the data sent out',data)
      })
    )
  }
}
