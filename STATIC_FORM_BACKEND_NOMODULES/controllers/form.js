const User = require('../models/user');


exports.getUsers = async (req, res, next) => {

    //res.json({message: 'hello'});
    await User.findAll().then(users => {

        res.status(200).json({users: users});
    }).catch(err => console.log(err));
}
exports.insertUser = async (req, res, next) => {

    try{
        
        
        //console.log(req.body);
        const name = req.body.name;
        const email = req.body.email;
        const phone = req.body.phone;
        const calltime = req.body.calltime;

        if(name === '' || email === '' || phone === '' || calltime === ''){

            throw new Error('All fields are required');
        
        }else{

            const data = await User.create({  
                name: name,
                email: email,
                phone: phone,
                calltime: calltime
            })
            res.status(201).json({message: 'user created', data: data});

        }
    }catch(err){

        res.status(400).json({message: err.message});
    }
};
exports.deleteUser = async (req, res, next) => {

    try{
        const email = req.params.email;
        const user = await User.findOne({where: {email: email}});
        if(!user){

            throw new Error('User not found');
        }else{

            await user.destroy();
            res.status(200).json({message: 'user deleted'});
        }
    }catch(err){

        res.status(400).json({message: err.message});
    }
};

exports.get404 = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
};