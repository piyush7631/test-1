import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  designation: string = '';
  username: string = '';
  noOfTeamMembers: number = 0;
  totalCostOfAllProjects: number = 0;
  pendingTasks: number = 0;
  upcomingProjects: number = 0;
  projectCost: number = 0;
  currentExpenditure: number = 0;
  availableFunds: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.designation = 'Team Leader';
    this.username = 'Tom Smith';
    this.noOfTeamMembers = 57;
    this.totalCostOfAllProjects = 235;
    this.pendingTasks = 13;
    this.upcomingProjects = 4;
    this.projectCost = 2341233;
    this.currentExpenditure = 97532;
    this.availableFunds = 59876;
  }

}
