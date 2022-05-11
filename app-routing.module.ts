import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudyComponent } from './case-study/case-study.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ImageUiComponent } from './image-ui/image-ui.component';
import { RouteSixComponent } from './route-six/route-six.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';

const routes: Routes = [
  
  {path:"CaseStudy",component:CaseStudyComponent},
  {path:"imageUI",component:ImageUiComponent},
  {path:"e-commerce",component:ECommerceComponent},
  {path:"timerIo",component:ImageUiComponent},
  {path:"studentsMarks",component:StudentMarksComponent},
  {path:"routeSix",component:RouteSixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
