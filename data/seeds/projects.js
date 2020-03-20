exports.seed = function(knex, Promise) {
    return knex('projects').insert([{project_name: 'Apply for Jobs', project_description: 'Making Money', completed: 0},
        {project_name: 'Get Hired', project_description: 'Almost making money', completed: 0},
        {project_name: 'Excel at Job', project_description: 'Get a Raise to make more money', completed: 0
        }
    ]);
};