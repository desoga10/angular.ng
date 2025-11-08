import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent {
  @Input() status: 'paid' | 'unpaid' | 'overdue' | 'draft' = 'draft';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  getIcon(): string {
    const icons = {
      paid: 'check-circle',
      unpaid: 'clock',
      overdue: 'alert-circle',
      draft: 'file-text'
    };
    return icons[this.status];
  }

  get iconSize(): number {
    const sizes = {
      small: 16,
      medium: 20,
      large: 24
    };
    return sizes[this.size];
  }
}
