import { Component, OnInit} from '@angular/core';
import $ from 'jquery/dist/jquery';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(_id: string) {
    this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    console.log("Obteniendo todos los usuarios");
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

  tetas() {
    console.log('tetas');
    $('#tetas').popover('show');
  }
}
