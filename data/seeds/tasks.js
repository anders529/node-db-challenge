exports.seed = function(knex, Promise) {
    return knex("tasks").insert([{
        task_description: 'send out resume', task_notes: 'Must be updated and effective',
        completed: 0, project_id: 1},
        {task_description: 'contact Recruiters', task_notes: 'Contract to Hire or Permanent positions OK', completed: 0, project_id: 1},
        {task_description: 'Ace interview Questions', task_notes: 'Be calm, and prepaired', completed: 0, project_id: 2},
        {task_description: 'Shine like a bright star', task_notes: 'Competitive market - Must stand out',
         completed: 0, project_id: 2},
        {task_description: 'Show exsisting skills and value', task_notes: 'Work hards and continue forward',
         completed: 0, project_id: 3},
        {task_description: 'Continuous learning', task_notes: 'always add value', completed: 0, project_id: 3}
    ]);
};