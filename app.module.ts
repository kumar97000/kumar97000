import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ImageUiComponent } from './image-ui/image-ui.component';
import { RouteSixComponent } from './route-six/route-six.component';
import { StudentsMarksComponent } from './student-marks/student-marks.component';
import { TimerIoComponent } from './timer-io/timer-io.component';
import { HttpClientModule } from '@angular/common/http';
import { CountDownComponent } from './timer-io/count-down/count-down.component';
import { CountOfClicksComponent } from './timer-io/count-of-clicks/count-of-clicks.component';
import { LogsComponent } from './timer-io/logs/logs.component';
import { TimerLimitComponent } from './timer-io/timer-limit/timer-limit.component';

@NgModule({
  declarations: [
    AppComponent,
    CaseStudyComponent,
    ECommerceComponent,
    ImageUiComponent,
    RouteSixComponent,
    StudentsMarksComponent,
    TimerIoComponent,
    CountDownComponent,
    CountOfClicksComponent,
    LogsComponent,
    TimerLimitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
