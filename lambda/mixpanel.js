const mixpanel = require("mixpanel-browser");

// var mixpanel = require('mixpanel-browser');
 
//mixpanel.init("YOUR_TOKEN");
//mixpanel.track("An event");

exports.sendEvent = async () => {

    //initialize mixpanel with the given token (place into a secrets file)
    mixpanel.init("token here");


}

exports.sendUserInfo = async () => {

    //initialize mixpanel with the given token (place into a secrets file)
    mixpanel.init("token here");


}

