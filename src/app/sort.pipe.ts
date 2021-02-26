import { Pipe,PipeTransform } from "@angular/core";

@Pipe( {
    name:'sort',
    pure: false
})

export class SortPipe implements PipeTransform {
    transform(value: any, propName: string) {
        const compare = ( a:object, b:object ) => {
            if ( a[propName] < b[propName] ){
              return -1;
            }
            if ( a[propName] > b[propName] ){
              return 1;
            }
            return 0;
          }

        return value.sort(compare);
          
    }

}