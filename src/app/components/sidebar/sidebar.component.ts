import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  showFiller = false;
  constructor(private authService:AuthService, private route:Router) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.route.navigateByUrl("/login");
  }
}
