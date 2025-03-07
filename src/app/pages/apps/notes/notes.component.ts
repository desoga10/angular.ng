import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NoteService } from './note.service';
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TablerIconsModule } from 'angular-tabler-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgScrollbarModule,
    TablerIconsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AppNotesComponent implements OnInit {
  sidePanelOpened = true;
  notes = this.noteService.getNotes();
  selectedNote: Note = Object.create(null);
  active: boolean = false;
  searchText = '';
  clrName = 'primary';
  colors = [
    { colorName: 'primary' },
    { colorName: 'warning' },
    { colorName: 'accent' },
    { colorName: 'error' },
    { colorName: 'success' },
  ];
  constructor(public noteService: NoteService) {
    this.notes = this.noteService.getNotes();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.notes = this.filter(filterValue);
  }

  filter(v: string): Note[] {
    return this.noteService
      .getNotes()
      .filter((x) => x.title.toLowerCase().indexOf(v.toLowerCase()) !== -1);
  }

  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  ngOnInit(): void {
    this.onLoad();
  }
  onLoad(): void {
    this.selectedNote = this.notes[0];
  }
  onSelect(note: Note): void {
    this.selectedNote = note;
    this.clrName = this.selectedNote.color;
  }
  onSelectColor(colorName: string): void {
    this.clrName = colorName;
    this.selectedNote.color = this.clrName;
    // this.clrName.active = !this.clrName.active;
    this.active = !this.active;
  }

  removenote(note: Note): void {
    const index: number = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1);
      this.selectedNote = this.notes[0];
    }
  }
  addNoteClick(): void {
    this.notes.unshift({
      color: this.clrName,
      title: 'this is New notes',
      datef: new Date(),
    });
  }
}
