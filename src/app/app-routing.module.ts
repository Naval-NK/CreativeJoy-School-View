import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';


const routes: Routes = [
  { path : '' , component : HomeComponent  },
  { path : 'contact' , component : ContactComponent},
  { path : 'about' , component : AboutComponent},
  { path : 'admissions' , component : AdmissionComponent},
  { path : 'media' , component : GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
