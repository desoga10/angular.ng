import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    position: 'Front end Developer',
    name: 'Andrew McDownland',
    project: 'Elite Admin',
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    id: 2,
    position: 'Web Designer',
    name: 'Helium',
    project: 'Real Homes Theme',
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    id: 3,
    position: 'Project Manager',
    name: 'Lithium',
    project: 'MedicalPro Theme',
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    id: 4,
    position: 'Medical Assistant',
    name: 'Beryllium',
    project: 'Hosting Press HTML	',
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    id: 5,
    position: 'Librarian',
    name: 'Boron',
    project: 'Flexy Admin',
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
    id: 6,
    position: 'Account Executive',
    name: 'Carbon',
    project: 'Ample Admin',
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
    id: 7,
    position: 'President of Sales',
    name: 'Nitrogen',
    project: 'Modernize Admin',
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
    id: 8,
    position: 'Dog Trainer',
    name: 'Oxygen',
    project: 'MaterialPro Admin',
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
    id: 9,
    position: 'Web Designer',
    name: 'Fluorine',
    project: 'Adminpro Admin',
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
    id: 10,
    position: 'Account Executive',
    name: 'Neon',
    project: 'SEO Debate',
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];

@Component({
  selector: 'app-expand-table',
  standalone: true,
  imports:[MatCardModule, MatTableModule, MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './expand-table.component.html',
  styleUrls: ['./expand-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class AppExpandTableComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'name', 'project', 'symbol', 'position'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: PeriodicElement | null = null;

  constructor() {}

  ngOnInit(): void {}
}

export interface PeriodicElement {
  name: string;
  position: string;
  id: number;
  project: string;
  symbol: string;
  description: string;
}
