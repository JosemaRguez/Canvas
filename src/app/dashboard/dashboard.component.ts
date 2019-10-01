import { Component } from '@angular/core';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'] 
})

export class Dashboard {
    constructor() { }

    ngOnInit() {
        this.divideTasks()
    }

    public name = 'Dashboard';
    public dashboardTitles = [
        'Pendiente',
        'En progreso',
        'Terminado',
        'Revisado',
    ];
    public tasks = [
        {
            'description': 'Automatizar tareas',
            'state': 0
        },
         {
            'description': 'Crear una lista',
            'state': 1
        },
        {
            'description': 'Ejectuar npm start',
            'state': 1
        },
         {
            'description': 'Crear proyecto',
            'state': 3
        }
    ];

    taskStatusSplit = { 
        '0': [],
        '1': [],
        '2': [],
        '3': [],
    };


    divideTasks = () => {
        this.tasks.map((task) => {
            if(task.state === 0){
                this.taskStatusSplit['0'].push(task.description)
            }
            if(task.state === 1){
                this.taskStatusSplit['1'].push(task.description)
            }
            if(task.state === 2){
                this.taskStatusSplit['2'].push(task.description)
            }
            if(task.state === 3){
                this.taskStatusSplit['3'].push(task.description)
            }
        })
    }
  }
  


