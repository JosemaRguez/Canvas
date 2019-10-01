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
    public identificators = 4
    public taskStatusSplit = {
        '0': [{
            'id': 1,
            'description': 'Automatizar tareas'
        }],
        '1': [{
            'id': 2,
            'description': 'Crear una lista'
        },
        {
            'id': 3,
            'description': 'Ejectuar npm start'
        }],
        '2': [],
        '3': [
            {
                'id': 4,
                'description': 'Crear proyecto'
            }
        ]
    };

    handleSubmitForm = (description, state) => {
        if(description && description.length > 0  ){
            this.identificators++
            this.taskStatusSplit[state].push({ 'description': description, 'id': this.identificators})
        }
    }

    handleDelete = (id) => {
        console.log(id)
    }
}



