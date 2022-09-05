import { CommonModule } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from './coreModule/core.module'
import { AppConfig } from './app.config'
import {Observable} from "rxjs";


function initializeAppFactory(config: AppConfig): () => Observable<any> {
  return config.load(url)
 }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      deps: [AppConfig],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {}
}
