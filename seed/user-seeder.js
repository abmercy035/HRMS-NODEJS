var User= require('../models/user');
var bcrypt=require('bcrypt-nodejs');
var mongoose= require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/HRMS');

var users=[

    new User({
        type: 'Full_Stack_Developer',
        email: 'SoldOutToJesus@soteria.kingdom.christ',
        password: bcrypt.hashSync('fullstackdev', bcrypt.genSaltSync(5), null),
        name: 'Project manager',
        dateOfBirth: new Date('2003-03-05'),
        contactNumber: '+2347026889068',
    }),
    new User({
        type: 'project_manager',
        email: 'john056@lasu.com',
        password: bcrypt.hashSync('pm1234', bcrypt.genSaltSync(5), null),
        name: 'Project manager',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0333-4552191',
    }),
    new User({
        type: 'accounts_manager',
        email: 'chrisjoe@lasu.com.com',
        password: bcrypt.hashSync('am1234', bcrypt.genSaltSync(5), null),
        name: 'Accounts Manager',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4814710',
    }),
    new User({
        type: 'employee',
        email: 'savedbygrace@lasu.com',
        password: bcrypt.hashSync('em12345', bcrypt.genSaltSync(5), null),
        name: 'Salman Joy',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0333-4552191',
    }),
    new User({

        type: 'employee',
        email: 'christtheway@lasu.com',
        password: bcrypt.hashSync('em123456', bcrypt.genSaltSync(5), null),
        name: 'Lanre Oputu',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4814710',
    }),
    new User({

        type: 'employee',
        email: 'savedbyjesus@lasu.com',
        password: bcrypt.hashSync('em1234567', bcrypt.genSaltSync(5), null),
        name: 'Collas Ranye',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4814710',
    }),
    new User({

        type: 'employee',
        email: 'thereislifeinjesus@lasu.com',
        password: bcrypt.hashSync('em12345678', bcrypt.genSaltSync(5), null),
        name: 'Saul Fendric',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4814710',
    }),
    new User({

        type: 'employee',
        email: 'ihavethelifeofgod@lasu.com',
        password: bcrypt.hashSync('em123456789', bcrypt.genSaltSync(5), null),
        name: 'Luke Mane',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4814710',
    }),
    new User({

        type: 'employee',
        email: 'giveyourlifetochrist@lasu.com',
        password: bcrypt.hashSync('em1234567890', bcrypt.genSaltSync(5), null),
        name: 'Sailas oriyo',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4814710',
    }),
    new User({

        type: 'employee',
        email: 'igavemylifetochrist@lasu.com',
        password: bcrypt.hashSync('em12345678901', bcrypt.genSaltSync(5), null),
        name: 'Hassan Andrew',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4814710',
    }),
    new User({

        type: 'employee',
        email: 'ireceivedthelifeofgod@lasu.com',
        password: bcrypt.hashSync('em123456789012', bcrypt.genSaltSync(5), null),
        name: 'toheeb Matthew',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4814710',
    }),
    new User({
        type: 'admin',
        email: 'admin@admin.lasu.com',
        password: bcrypt.hashSync('admin123', bcrypt.genSaltSync(5), null),
        name: 'Eniola Okutobo',
        dateOfBirth: new Date('1990-05-26'),
        contactNumber: '0300-4297859',
    }),
];

//save function is asynchronous
//so we need to ceck all itmes are saved before we disconnect to db
done=0;
for (i=0;i<users.length;i++){
    users[i].save(function(err,result){
        done++;
        if(done==users.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}