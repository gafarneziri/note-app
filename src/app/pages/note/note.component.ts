import { Component, Inject, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Note } from '../../interfaces/note';
import { NotesService } from '../../services/notes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent implements OnInit {
  route = inject(ActivatedRoute);
  notesService = inject(NotesService)
  router = inject(Router)
  noteId: any
  note: Note | undefined

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.noteId = param.get('id');
      console.log(this.noteId)
      this.notesService.getNotes()
        .subscribe((notes: Note[]) => {
          console.log(notes);
          this.note = notes[this.noteId]

        })

    })
  }


  deleteNote() {

    this.notesService.deleteNote(this.noteId)
this.router.navigate([''])
  }
}

