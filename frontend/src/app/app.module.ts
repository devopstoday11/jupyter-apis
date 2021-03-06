import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FontAwesomeModule, FaIconLibrary } from "@fortawesome/angular-fontawesome";
import {
  faCogs,
  faHdd,
  faBook,
  faMicrochip,
  faLaptopCode,
  faLink,
  faSlidersH
} from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./utils/imports";

import { NamespaceService } from "./services/namespace.service";
import { KubernetesService } from "./services/kubernetes.service";
import { SnackBarService } from "./services/snack-bar.service";

import { MainTableComponent } from "./main-table/main-table.component";
import { NamespaceSelectComponent } from "./main-table/namespace-select/namespace-select.component";
import { ResourceTableComponent } from "./main-table/resource-table/resource-table.component";
import { SnackBarComponent } from "./services/snack-bar/snack-bar.component";
import { ResourceFormComponent } from "./resource-form/resource-form.component";
import { ConfirmDialogComponent } from "./main-table/confirm-dialog/confirm-dialog.component";
import { VolumeComponent } from "./resource-form/volume/volume.component";
import { CostTableComponent } from "./main-table/cost-table/cost-table.component";
import { FormNameComponent } from "./resource-form/form-name/form-name.component";
import { FormImageComponent } from "./resource-form/form-image/form-image.component";
import { FormSpecsComponent } from "./resource-form/form-specs/form-specs.component";
import { FormWorkspaceVolumeComponent } from "./resource-form/form-workspace-volume/form-workspace-volume.component";
import { FormDataVolumesComponent } from "./resource-form/form-data-volumes/form-data-volumes.component";
import { FormAdvancedOptionsComponent } from "./resource-form/form-advanced-options/form-advanced-options.component";
import { RokResourceFormComponent } from "./uis/rok/rok-resource-form/rok-resource-form.component";
import { RokMainTableComponent } from "./uis/rok/rok-main-table/rok-main-table.component";
import { MainTableRouterComponent } from "./uis/multiplexer/main-table-router/main-table-router.component";
import { ResourceFormRouterComponent } from "./uis/multiplexer/resource-form-router/resource-form-router.component";
import { RokJupyterLabSelectorComponent } from "./uis/rok/rok-resource-form/rok-jupyter-lab-selector/rok-jupyter-lab-selector.component";
import { RokVolumeComponent } from "./uis/rok/rok-resource-form/rok-volume/rok-volume.component";
import { RokFormWorkspaceVolumeComponent } from "./uis/rok/rok-resource-form/rok-form-workspace-volume/rok-form-workspace-volume.component";
import { RokFormDataVolumesComponent } from "./uis/rok/rok-resource-form/rok-form-data-volumes/rok-form-data-volumes.component";
import { RokErrorMsgComponent } from "./uis/rok/rok-error-msg/rok-error-msg.component";
import { FormConfigurationsComponent } from "./resource-form/form-configurations/form-configurations.component";
import { FormGpusComponent } from "./resource-form/form-gpus/form-gpus.component";
import { VolumeTableComponent } from "./main-table/volumes-table/volume-table.component";
import { KubecostService } from './services/kubecost.service';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    NamespaceSelectComponent,
    ResourceTableComponent,
    SnackBarComponent,
    ResourceFormComponent,
    ConfirmDialogComponent,
    VolumeComponent,
    FormNameComponent,
    FormImageComponent,
    FormSpecsComponent,
    FormWorkspaceVolumeComponent,
    FormDataVolumesComponent,
    FormAdvancedOptionsComponent,
    RokResourceFormComponent,
    RokMainTableComponent,
    MainTableRouterComponent,
    ResourceFormRouterComponent,
    RokJupyterLabSelectorComponent,
    RokVolumeComponent,
    RokFormWorkspaceVolumeComponent,
    RokFormDataVolumesComponent,
    RokErrorMsgComponent,
    FormConfigurationsComponent,
    FormGpusComponent,
    VolumeTableComponent,
    CostTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    NamespaceService,
    KubecostService,
    KubernetesService,
    SnackBarService
  ],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarComponent, ConfirmDialogComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faCogs,
      faHdd,
      faBook,
      faMicrochip,
      faLaptopCode,
      faDocker,
      faLink,
      faSlidersH
    );
  }
}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "../jupyter/assets/i18n/", ".json");
}
