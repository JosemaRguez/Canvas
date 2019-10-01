import { Component } from '@angular/core';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class Dashboard {
    constructor() { }

    ngOnInit() { }

    public name = 'Dashboard';
    public isDisabled = true;
    public dashboardTitles = [
        'Pendiente',
        'En progreso',
        'Terminado',
        'Revisado',
    ];
    public taskStatusSplit = {
        '0': [{
            'description': 'Automatizar tareas'
        }],
        '1': [{
            'description': 'Crear una lista'
        },
        {
            'description': 'Ejectuar npm start'
        }],
        '2': [],
        '3': [
            {
                'description': 'Crear proyecto'
            }
        ]
    };

    handleSubmitForm = (description, state) => {
        this.taskStatusSplit[state].push({ 'description': description})
        console.log(this.taskStatusSplit)
    }
}



