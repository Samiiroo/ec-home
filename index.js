const { app } = require('./core');
const { update, db } = require('./db')
const port = 3000
app.listen(port, () => {
    console.log('API for smart home 1.2 up n running.')
})

/* CODE YOUR API HERE */

app.get('/vacuum/on', (req, res) => {

    db
        .get('devices') //get devices from database
        .find({ id: "VAC1" }) //find the spcifik id of the device youa are using
        .assign({ on: true })  //assigning a boolean value to the device
        .value();

    update();  // update the state of the devices 
    res.send('vacuum cleaner is on')  // a message of whats happening  to the user

})

app.get('/vacuum/off', (req, res) => {

    db
        .get('devices')
        .find({ id: "VAC1" })
        .assign({ on: false })
        .value();

    update();
    res.send('vacuum cleaner is off')

})

/* down below is the code for the bedroom light. in the url add /bedlight/on or bedlight/off */

app.get('/bedlight/on', (req, res) => {

    db
        .get('devices')
        .find({ id: "LIG1" })
        .assign({ on: true })
        .value();

    update();
    res.send('light in the bedroom is on')

})

app.get('/bedlight/off', (req, res) => {

    db
        .get('devices')
        .find({ id: "LIG1" })
        .assign({ on: false })
        .value();

    update();
    res.send('light in the bedroom is off')

})
/* down below is the code for the livingroom light. in the url add /mainlight/on or mainlight/off */
app.get('/mainLight/on', (req, res) => {

    db
        .get('devices')
        .find({ id: "LIG2" })
        .assign({ on: true })
        .value();

    update();
    res.send('light in the living room is on')

})
app.get('/mainlight/off', (req, res) => {

    db
        .get('devices')
        .find({ id: "LIG2" })
        .assign({ on: false })
        .value();

    update();
    res.send('light in the living room is off')

})
/* down below is the code for the garden light. in the url add /gardenlight/on or gardenlight/off */

app.get('/gardenlight/on', (req, res) => {

    db
        .get('devices')
        .find({ id: "LIG3" })
        .assign({ on: true })
        .value();

    update();
    res.send('light in the garden is on')

})
app.get('/gardenlight/off', (req, res) => {

    db
        .get('devices')
        .find({ id: "LIG3" })
        .assign({ on: false })
        .value();

    update();
    res.send('light in the garden is off')

})
/* down below is the code for the blind in the living room. in the url add /blind/on or blind/off */

app.get('/blind/on', (req, res) => {

    db
        .get('devices')
        .find({ id: "BLI1" })
        .assign({ on: true })
        .value();

    update();
    res.send('blind is down')

})
app.get('/blind/off', (req, res) => {

    db
        .get('devices')
        .find({ id: "BLI1" })
        .assign({ on: false })
        .value();

    update();
    res.send('blind is up')

})
/* down below is the code for the ac. in the url add /ac/on or ac/off */
app.get('/ac/on', (req, res) => {

    db
        .get('devices')
        .find({ id: "AC1" })
        .assign({ on: true })
        .value();

    update();
    res.send('the AC is on')

})
app.get('/ac/off', (req, res) => {

    db
        .get('devices')
        .find({ id: "AC1" })
        .assign({ on: false })
        .value();

    update();
    res.send('the AC is off')

})
/* down below is the code for the door. in the url add /door/unlock or door/lock*/

app.get('/door/unlock', (req, res) => {

    db
        .get('devices')
        .find({ id: "LOC1" })
        .assign({ locked: true })
        .value();

    update();
    res.send('the door is locked')

})
app.get('/door/lock', (req, res) => {

    db
        .get('devices')
        .find({ id: "LOC1" })
        .assign({ locked: false })
        .value();

    update();
    res.send('the door is unlocked')

})
/*down below is the code for the camera. in the url you can use camera/on or camera/off */

app.get('/camera/on', (req, res) => {

    db
        .get('devices')
        .find({ id: "CAM1" })
        .assign({ on: true })
        .value();

    update();
    res.send('camera s recording')

})
app.get('/camera/off', (req, res) => {

    db
        .get('devices')
        .find({ id: "CAM1" })
        .assign({ on: false })
        .value();

    update();
    res.send('camera is not recording')

})

/*down below is the code for the speaker. in the url you can use speaker/on or speaker/off */
app.get('/speaker/on', (req, res) => {

    db
        .get('devices')
        .find({ id: "SPE1" })
        .assign({ on: true })
        .value();

    update();
    res.send('speaker is on')

})
app.get('/speaker/off', (req, res) => {

    db
        .get('devices')
        .find({ id: "SPE1" })
        .assign({ on: false })
        .value();

    update();
    res.send('speaker is off')

})