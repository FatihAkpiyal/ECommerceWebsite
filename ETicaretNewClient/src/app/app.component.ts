import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { LayoutComponent } from './admin/layout/layout.component';
import { ComponentsModule } from './admin/components/components.module';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './services/common/http-client.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { ListComponent } from './admin/components/products/list/list.component';
import { SelectProductImageDialogComponent } from './dialogs/select-product-image-dialog/select-product-image-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
    LayoutComponent,ComponentsModule,RouterModule,NgxSpinnerModule,
    HttpClientModule,DeleteDialogComponent,SelectProductImageDialogComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[
    {provide:"baseUrl",useValue:"https://localhost:7092/api", multi: true}
  ]
})
export class AppComponent {
  title = 'ETicaretNewClient';

  constructor(){
    
  }
}

