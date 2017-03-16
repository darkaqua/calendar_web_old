/**
 * Created by Pablo on 18/02/2017.
 */

module.exports = (app, express) => {

    //Tema de la web
    app.use('/metro-template', express.static(__dirname + '/node_modules/metro-dist'));
    app.use('/', express.static(__dirname + '/public'));

    app.get('/', (request, response, next)=> {
        response.render('index', {
            title: "index"
        });
    })


    // app.get('/:id/:asd', (request, response, next) => {
    //     response.render('index', {
    //         title: request.params.id
    //     });
    // });
};