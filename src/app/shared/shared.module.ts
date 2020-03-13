import {NgModule} from '@angular/core';

// modules
import {MaterialModule} from './material.module';

@NgModule({
  imports: [
    MaterialModule,
  ],
  declarations: [],
  exports: [
    MaterialModule,
  ],
  entryComponents: [],
  providers: []
})
export class SharedModule {
}
