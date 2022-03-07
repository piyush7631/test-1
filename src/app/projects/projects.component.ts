import { Component, OnInit } from '@angular/core';
import { Project } from './project';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = []
  newProject: Project = new Project();
  constructor(private service: ProjectsService) { }

  ngOnInit(): void {

    this.service.getProjects()
      .subscribe(
        (response) => {
          this.projects = response;
          console.log(this.projects)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  onSave() {
    this.service.createProject(this.newProject)
      .subscribe(
        (response) => {
          //Adding new project to the table
          let createdProject: Project = response;
          this.projects.push(createdProject)

          //Clearing the field
          this.newProject.projectID = 0;
          this.newProject.projectName = null;
          this.newProject.dateOfStart = null;
          this.newProject.teamSize = 0;

        },
        (error) => { console.log(error) }
      )
  }



}
