import { ChangeDetectionStrategy, Component, Inject, ViewChild, inject, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

//  1
@Component({
  selector: 'dialog-overview',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatButtonModule],
  templateUrl: 'dialog-overview.component.html',
})
export class AppDialogOverviewComponent {
  constructor(public dialogRef: MatDialogRef<AppDialogOverviewComponent>) {}
}

/**
 * @title 2 Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'dialog-content',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatButtonModule],
  templateUrl: 'dialog-content.component.html',
})
export class AppDialogContentComponent {}

// 3
@Component({
  selector: 'dialog-data-example-dialog',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatButtonModule],
  templateUrl: 'dialog-data.component.html',
})
export class AppDialogDataComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}

// 4
@Component({
  selector: 'dialog-menu',
  standalone: true,
  imports: [MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, MatButtonModule],
  templateUrl: 'dialog-menu.component.html',
})
export class AppDialogMenuComponent {}

// 5

export interface DialogData2 {
  animal: any;
  name: string;
}

@Component({
  selector: 'dialog-form-overview',
  templateUrl: 'dialog-form-overview.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogOverviewExampleDialog {
  readonly dialogRef = inject(MatDialogRef<DialogOverviewExampleDialog>);
  readonly data = inject<DialogData2>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule, MatInputModule, FormsModule
  ],
  templateUrl: './dialog.component.html',
})
export class AppDialogComponent {
  // 4
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  constructor(public dialog: MatDialog) {}

  // 5
  readonly animal = signal('');
  readonly name = model('');
  readonly dialogEx = inject(MatDialog);

  openDialogEx(): void {
    const dialogRef = this.dialogEx.open(DialogOverviewExampleDialog, {
      data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }

  // 1
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AppDialogOverviewComponent, {
      width: '290px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  // 2
  openHeaderDialog() {
    const dialogRef = this.dialog.open(AppDialogContentComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // 3
  openInjectDialog() {
    this.dialog.open(AppDialogDataComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  // 4

  openMenuDialog() {
    const dialogRef = this.dialog.open(AppDialogMenuComponent, {
      restoreFocus: false,
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
  }
}
