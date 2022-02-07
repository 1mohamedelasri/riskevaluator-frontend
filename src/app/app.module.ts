import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from '@modules/main/main.component';
import {LoginComponent} from '@modules/login/login.component';
import {HeaderComponent} from '@modules/main/header/header.component';
import {FooterComponent} from '@modules/main/footer/footer.component';
import {MenuSidebarComponent} from '@modules/main/menu-sidebar/menu-sidebar.component';
import {BlankComponent} from '@pages/blank/blank.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {ProfileComponent} from '@pages/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import { ToastrModule, ToastrService } from "ngx-toastr";
import {MessagesComponent} from '@modules/main/header/messages/messages.component';
import {NotificationsComponent} from '@modules/main/header/notifications/notifications.component';
import {ButtonComponent} from './components/button/button.component';

import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserComponent} from '@modules/main/header/user/user.component';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {PrivacyPolicyComponent} from './modules/privacy-policy/privacy-policy.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {DropdownMenuComponent} from './components/dropdown/dropdown-menu/dropdown-menu.component';
import { GestionComptesComponent } from './pages/administration/gestion-comptes/gestion-comptes.component';
import { GestionMetiersComponent } from './pages/administration/gestion-metiers/gestion-metiers.component';
import { GestionQuestionnaireComponent } from './pages/administration/gestion-questionnaire/gestion-questionnaire.component';
import { EvaluerComponent } from './pages/visitor/evaluer/evaluer.component';
import { HistoriqueComponent } from './pages/visitor/historique/historique.component';
import { ContactComponent } from './pages/visitor/contact/contact.component';
import { authInterceptorProviders } from "@services/_helpers/auth.interceptor";
import { GestionQuestionComponent } from './pages/administration/gestion-question/gestion-question.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { MetierFormComponent } from './pages/administration/gestion-metiers/metier-form/metier-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';
import { QuestionnaireComponent } from './pages/administration/gestion-questionnaire/questionnaire/questionnaire.component';
import { ListCategorieQuestionComponent } from './pages/administration/gestion-questionnaire/questionnaire/list-categorie-question/list-categorie-question.component';
import { ListPreconisationGlobaleComponent } from './pages/administration/gestion-questionnaire/questionnaire/list-preconisation-globale/list-preconisation-globale.component';
import { QuestionnaireListComponent } from './pages/administration/gestion-questionnaire/questionnaire-list/questionnaire-list.component';
import { QuestionnaireNewComponent } from './pages/administration/gestion-questionnaire/questionnaire-new/questionnaire-new.component';
import { QuestionnaireEditComponent } from './pages/administration/gestion-questionnaire/questionnaire-edit/questionnaire-edit.component';
import { QuestionnaireHeadComponent } from './pages/administration/gestion-questionnaire/questionnaire-head/questionnaire-head.component';
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        BlankComponent,
        ProfileComponent,
        RegisterComponent,
        DashboardComponent,
        MessagesComponent,
        NotificationsComponent,
        ButtonComponent,
        UserComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        PrivacyPolicyComponent,
        MenuItemComponent,
        DropdownComponent,
        DropdownMenuComponent,
        GestionComptesComponent,
        GestionMetiersComponent,
        GestionQuestionnaireComponent,
        EvaluerComponent,
        HistoriqueComponent,
        ContactComponent,
        GestionQuestionComponent,
        ListComponent,
        ListItemComponent,
        MetierFormComponent,
        ErrorModalComponent,
        QuestionnaireComponent,
        ListCategorieQuestionComponent,
        ListPreconisationGlobaleComponent,
        QuestionnaireListComponent,
        QuestionnaireNewComponent,
        QuestionnaireEditComponent,
        QuestionnaireHeadComponent,
        ConfirmationDialogComponent

    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-top-right",
      preventDuplicates: true
    }),
    FormsModule,
    NgbModule,
    NgxSkeletonLoaderModule
  ],
    providers: [authInterceptorProviders, ToastrService],
    bootstrap: [AppComponent]
})
export class AppModule {}
