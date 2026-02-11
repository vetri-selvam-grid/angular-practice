import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  mission = 'To create innovative and user-friendly web applications that make a difference in people\'s lives.';
  
  teamMembers = [
    {
      name: 'John Doe',
      role: 'Lead Developer',
      bio: 'Passionate about clean code and modern web technologies.'
    },
    {
      name: 'Jane Smith',
      role: 'UX Designer',
      bio: 'Creating beautiful and intuitive user experiences.'
    },
    {
      name: 'Mike Johnson',
      role: 'Backend Engineer',
      bio: 'Building scalable and robust backend systems.'
    }
  ];
}
