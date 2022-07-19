import { FormsModule } from '@angular/forms';
import { YakutskPageComponent } from './yakutsk-edit-page/yakutsk-page.component';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { MainComponent } from './start-page/main.component';
import { AboutmePageComponent } from './aboutme-page/aboutme-page.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { YakutskSiteComponent } from './yakutsk-site/yakutsk-site.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { ListUserComponent } from './list-user/list-user.component';
import { AddListUserComponent } from './add-list-user/add-list-user.component';
import { EditListUserComponent } from './edit-list-user/edit-list-user.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { fakeBackendProvider } from './_helpers/fake-backend';
import { AppRoutingModule } from './app-routing.module';

import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';

registerLocaleData(en);

export const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'City', component: YakutskSiteComponent },
  { path: 'Me', component: AboutmePageComponent },
  { path: 'Edit', component: YakutskPageComponent },
  { path: 'List', component: ListUserComponent },
  { path: 'List/AddList', component: AddListUserComponent },
  { path: 'EditList/:id', component: EditListUserComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    YakutskPageComponent,
    AboutmePageComponent,
    YakutskSiteComponent,
    ListUserComponent,
    AddListUserComponent,
    EditListUserComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NzMenuModule,
    NzSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NzInputModule,
    NzModalModule,
    NzPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzPageHeaderModule,
    NzSpaceModule,
    NzTableModule,
    NzDescriptionsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzImageModule,
    NzGridModule,
    NzDividerModule,
    NzTypographyModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(
      {},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        },
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

export class NzDemoPageHeaderBasicComponent {
  onBack(): void {
    console.log('onBack');
  }
}

export class NzDemoPageHeaderGhostComponent {}
export class NzDemoLayoutTopComponent {}
export class NzDemoGridBasicComponent {}
export class NzDemoPaginationBasicComponent {}
