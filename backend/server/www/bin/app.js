const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');


const database = require('../../../database/index');
const User = require('../../../database/models/User');
const Profile = require('../../../database/models/Profile');
const Friend = require('../../../database/models/Friend');
const Group = require('../../../database/models/Group');
const Member = require('../../../database/models/Member');
const Account = require('../../../database/models/Account');
const Transaction = require('../../../database/models/Transaction');
const Expense = require('../../../database/models/Expense');
const Item = require('../../../database/models/Item');
const Activity = require('../../../database/models/Activity')


const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));


module.exports = app;