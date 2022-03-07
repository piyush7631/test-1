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
  editProject: Project = new Project();
  editProjectIndex = 0;
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

  onEditClicked(event: any, index: number) {
    this.editProjectIndex = index;
    let selectedProject: Project = this.projects[index];
    this.editProject = selectedProject;
  }

  onUpdate() {
    this.service.updateProject(this.editProject)
      .subscribe(
        (response) => {
          this.projects[this.editProjectIndex] = response;

          this.editProject = new Project();
        },
        (error) => {
          console.log(error)
        },
      )
  }



}
