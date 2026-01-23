import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BottomNav } from '../../shared/bottom-nav/bottom-nav';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, BottomNav],
  templateUrl: './shell.html',
  styleUrls: ['./shell.scss'],
})
export class Shell {}
