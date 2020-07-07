import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}  from '@angular/common/http'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('spotify service listo');
  }


  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':' Bearer BQC4I1x7KKy8vpzcr3-yMLzBTWUBwyaI4appmqm6wl1jeYpuv7sDCw8cmqY8N_ZQMEFVefCFhxVycDFaW7fW3OJcBNdF7ADxqwFkE-WmBEg2d05EIJ6afReK7oYEmxy93EkcEBv6r09-X8F3'
    });

    return this.http.get(url, {headers});
  }

   getNewReleses(){
    
    return this.getQuery('browse/new-releases')
            .pipe(map((data:any)=> data.albums.items));
    
   }


   getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15&offset=1`)
            .pipe(map((data:any)=> data.artists.items));

   }


   getArtista(id:string){
    return this.getQuery(`artists/${id}`);
            // .pipe(map((data:any)=> data.artists.items));
   }


   getTopTracks(id:string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( data => data['tracks']));
   }






  //  getArtista(termino:string){
  //   const headers = new HttpHeaders({
  //     'Authorization':'Bearer BQDG16EU_6Lez5iOlJA-ph3K-u86QL6d7S2dtprBLgtvu81QNTxYLJ1wO_00I10aiUs64W-kEUJRGFwDIpuwcPH1QZZr7Iitn-807uI7EDPtM8VM3lsILh6VghTye500XF7VPbYuPNCAPdMC'
  //   });
  //   return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15&offset=1`,{headers})
  //   .pipe(map((data:any)=> data.artists.items));
  //  }


}
