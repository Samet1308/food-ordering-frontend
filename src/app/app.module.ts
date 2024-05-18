import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignupComponent} from './auth-components/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {NzWaveModule} from "ng-zorro-antd/core/wave";

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import {en_US, NZ_I18N} from "ng-zorro-antd/i18n";
import {NzHeaderComponent} from "ng-zorro-antd/layout";
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {LoginComponent} from './auth-components/login/login.component';
import { MatIconModule } from '@angular/material/icon';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    NzInputModule,
    NzSpinModule,
    NzWaveModule,
    NzHeaderComponent,
    MatIconModule, MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatChipsModule,
    MatMenuModule,
    MatRadioModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDialogModule,
    MatTableModule


  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
