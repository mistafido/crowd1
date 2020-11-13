const express = require('express');
const path = require('path');
const { engine } = require('express-edge');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const connectFlash = require('connect-flash')

const auth = require('./middleware/auth')


const homePageController = require('./controllers/homePage')
const aboutPageController = require('./controllers/about')
const signupController = require('./controllers/signup')
const loginController = require('./controllers/login')
const forgotpasswordController = require('./controllers/forgotpassword')
const termsController = require('./controllers/terms');
const netmarketingController = require('./controllers/netmarketing');
const crowdmarketingController = require('./controllers/crowdmarketing');
const privacyController = require('./controllers/privacy')
const faqController = require('./controllers/faq')
const storeUserController = require('./controllers/storeUser');
const loginUserController = require('./controllers/loginUser')
const buypackController = require('./controllers/buypack')
const logoutController = require('./controllers/logout')
const presentationsController = require('./controllers/presentations')
const businessController = require('./controllers/business')
const c1rewardsController = require('./controllers/c1rewards')
const crowdeconomyController = require('./controllers/crowdeconomy');
const aboutloggedinController = require('./controllers/aboutloggedin');
const topproductionController = require('./controllers/topproduction')
const magazineController = require('./controllers/magazine')
const eventsController = require('./controllers/events')
const cstoreController = require('./controllers/cstore')
const backofficeController = require('./controllers/backoffice')
const bonusstartController = require('./controllers/bonusstart')
const streamlinebonusController = require('./controllers/streamlinebonus')
const customersalesbonusController = require('./controllers/customersalesbonus')
const activeuserpoolbonusController = require('./controllers/activeuserpoolbonus')
const binarybonusController = require('./controllers/binarybonus')
const matchingbonusController = require('./controllers/matchingbonus')
const residualincomeController = require('./controllers/residualincome')
const fearoflossController = require('./controllers/fearofloss')
const levelsController = require('./controllers/levels')
const downlineController = require('./controllers/downline')
const newsController = require('./controllers/news')
const bitcoinpay1Controller = require('./controllers/bitcoinpay1')
const ethereumpayController = require('./controllers/ethereumpay')


const app = new express();

const mongoStore = connectMongo(expressSession);

app.use(connectFlash())
app.use(expressSession({
    secret: 'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    }),
    resave: true,
    saveUninitialized: true
}))


mongoose.connect('mongodb://localhost/crowd1', {
    useNewUrlParser:true, 
    useUnifiedTopology:true
})

app.use(express.static('public'));
app.use(engine);

app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true }))



app.get('/', homePageController)
app.get('/about', aboutPageController)
app.get('/signup', signupController)
app.get('/login', loginController)
app.get('/forgotpassword', forgotpasswordController)
app.get('/terms', termsController)
app.get('/privacy', privacyController)
app.get('/frequently-asked-questions', faqController)
app.get('/introduction-to-network-marketing', netmarketingController)
app.get('/introduction-to-crowd-marketing', crowdmarketingController)
app.post('/user/signup', storeUserController)
app.post('/user/login', loginUserController)
app.get('/user/buypack', auth, buypackController)
app.get('/user/logout', logoutController)
app.get('/info/presentations-and-promo', auth , presentationsController)
app.get('/info/business', auth, businessController)
app.get('/info/c1rewards', auth, c1rewardsController)
app.get('/info/crowd-economy', auth, crowdeconomyController)
app.get('/info/about-loggedin', auth, aboutloggedinController)
app.get('/info/topproduction', auth, topproductionController)
app.get('/info/magazine', auth, magazineController)
app.get('/events', auth, eventsController)
app.get('/cstore', auth,cstoreController)
app.get('/backoffice', auth,backofficeController)
app.get('/news', auth, newsController)
app.get('/bonus/bonusstart', auth, bonusstartController)
app.get('/bonus/streamlinebonus', auth, streamlinebonusController)
app.get('/bonus/customersales-bonus', auth, customersalesbonusController)
app.get('/bonus/activeuserpool-bonus', auth, activeuserpoolbonusController)
app.get('/bonus/binarybonus', auth, binarybonusController)
app.get('/bonus/matching', auth, matchingbonusController)
app.get('/bonus/residualincome', auth, residualincomeController)
app.get('/bonus/fearofloss', auth, fearoflossController)
app.get('/bonus/levels', auth, levelsController)
app.get('/buypack/bitcoinpay1', bitcoinpay1Controller)
app.get('/buypack/ethereumpay', ethereumpayController)
app.get('/user/downline', downlineController)




app.listen(4000, () => {
    console.log('App listening on port 4000')
} )