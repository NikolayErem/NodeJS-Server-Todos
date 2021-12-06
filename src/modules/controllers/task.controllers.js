const Task = require('../../db/models/task/index');

module.exports.getAllTasks = async (req, res, next) => {
    try {
        let datadb = await Task.find();
        res.send({data: datadb});
        console.log(datadb);
    } catch (error) {
        res.send('Error database', error)
        console.log('not ok')
    }
};

module.exports.createNewTask = (req, res, next) => {
    console.log('1 ok')
        if(!req.body.hasOwnProperty('text')) {
            console.log('1 not ok');
            res.send("Error, dispatched request didn't have properties 'text'");
        } else {
            console.log('2 ok');
            const task = new Task({text: req.body.text, isCheck: false});
            task.save().then(result => {
                console.log('3 ok');
                res.send(result);
                console.log('4 ok');
            }).catch(err => {
                console.log('this error', err);
            })
        }
}

module.exports.deteteAllTasks = (req, res, next) => {
    Task.deleteMany().then(result => {
        res.send();
    }).catch(err => {
        console.log(err);
        res.send('err');
    })
}

module.exports.compliteAllTasks = (req, res, next) => {
    Task.updateMany({isCheck: {$ne: true}}, {$set: {isCheck: true}}).then(result => {
        res.send();
    }).catch(err => {
        console.log(err);
        res.send('err')
    })
    
}

module.exports.deleteTask = (req, res, next) => {
    if(req.query.id){
        Task.findOneAndDelete({'_id': {$eq: req.query.id}})
            .then(result => res.send(result))
            .catch(err => res.send('err', err));
    } else {
        res.send('err: invalid id task')
    }
}

module.exports.compliteTask = (req, res, next) => {
    if(req.body.id) {
        Task.findOneAndUpdate({'_id': {$eq: req.body.id}}, {$set: {isCheck: req.body.isCheck}})
            .then(result => setTimeout(() => {res.send(result)}, 10000))
            .catch(err => res.send(err));
    } else {
        res.send("err: body havn't property 'id'");
    }
}