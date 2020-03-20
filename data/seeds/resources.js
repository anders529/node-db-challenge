exports.seed = function(knex, Promise) {
    return knex("resources").insert([{
        resource_name: 'Lambda School', resource_description: 'Get coding AND career development coaching'},
        {resource_name: 'Self Studies', resource_description: 'Learn hands on'},
        {resource_name: 'Books', resource_description: 'Buy one or more on specific topics'},
        {resource_name: 'Peers', resource_description: 'Discuss more than just what is apparent'},
        {resource_name: 'Industry Contacts', resource_description: 'You dont have many'},
        {resource_name: 'your self', resource_description: 'you are a resource, use your self!'}
    ]);
};