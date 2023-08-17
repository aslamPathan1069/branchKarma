import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FourZeroFourComponent } from './pages/four-zero-four/four-zero-four.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PopupComponent } from './components/popup/popup.component';
import { MainComponent } from './layout/main/main.component';
import { AuthComponent } from './layout/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { SignUpComponent } from './pages/auth/sign-up/sign-up.component';
import { MyHttpInterceptorInterceptor } from './interceptors/my-http-interceptor.interceptor';
import { ChangeBgColorOnClickDirective } from './directives/change-bg-color-on-click.directive';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { QuickSidebarComponent } from './layout/quick-sidebar/quick-sidebar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CallComponent } from './pages/call/call.component';
import { VideoComponent } from './pages/video/video.component';
import { EmailComponent } from './pages/email/email.component';
import { DocumentComponent } from './pages/document/document.component';
import { SlackComponent } from './pages/slack/slack.component';
import { RemoteControlComponent } from './pages/remote-control/remote-control.component';
import { HelpDeskComponent } from './pages/help-desk/help-desk.component';
import { DropdownExampleComponent } from './components/dropdown-example/dropdown-example.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FourZeroFourComponent,
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    MainComponent,
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    ChangeBgColorOnClickDirective,
    NavbarComponent,
    QuickSidebarComponent,
    SidebarComponent,
    CallComponent,
    VideoComponent,
    EmailComponent,
    DocumentComponent,
    SlackComponent,
    RemoteControlComponent,
    HelpDeskComponent,
    DropdownExampleComponent,
    CardCarouselComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
