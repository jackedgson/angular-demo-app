import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { ArtistModel } from './graphql/artist'

@Injectable({ providedIn: 'root' })
export class AppService {
  observer = new Subject()
  public subscriber$ = this.observer.asObservable()

  emitData(data: ArtistModel) {
    this.observer.next(data)
  }
}
