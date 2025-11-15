import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


import {LucideAngularModule, Check, Clock, TriangleAlert, FileText } from 'lucide-angular';


@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [CommonModule,LucideAngularModule ],
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss'],
})
export class StatusBadgeComponent {
  @Input() status: 'paid' | 'unpaid' | 'overdue' | 'draft'| 'pending' | 'shipped' | 'delivered' = 'draft';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
 // readonly icons = { Check, Clock, TriangleAlert, FileText };

  get iconSize(): number {
    return {
      small: 16,
      medium: 20,
      large: 24
    }[this.size];
  }
  
  // List of statuses that get icons
  private iconStatuses = ['paid', 'unpaid', 'overdue', 'draft', 'sent', 'pending' ,'shipped' , 'delivered'] as const;

  get showAsBadge(): boolean {
    return this.iconStatuses.includes(this.status?.toLowerCase() as any);
  }

  getIcon(): string {
    const icons: Record<string, string> = {
      paid: 'check',
      unpaid: 'clock',
      overdue: 'triangle-alert',
      draft: 'file-text',
      pending: 'triangle-alert',
      shipped: 'clock',
      delivered :'check'
    };
    return icons[this.status] ;
  }
}
