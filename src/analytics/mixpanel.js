// const mixpanel = require("mixpanel-browser");

// var mixpanel = require('mixpanel-browser');
 
//mixpanel.init("YOUR_TOKEN");
//mixpanel.track("An event");

export const sendEvent = async (verb, noun) => {
    //initialize mixpanel with the given token (place into a secrets file)
    console.log(verb, noun);
    // mixpanel.init("token here");
    const bodyObject = {};
    bodyObject.verb = verb;
    bodyObject.noun = noun;
    const response = await fetch(process.env.PUBLIC_URL + '/sendEvent', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObject)
    })
}

export const sendUserInfo = async (emailAddress) => {
    // if (window.location.href.indexOf('localhost') !== -1) {
    //   return;
    // }
    console.log('sending user info: ', emailAddress);
    const bodyObject = {};
    bodyObject['emailAddress'] = emailAddress;
    const response = await fetch(process.env.PUBLIC_URL + '/sendUserInfo', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyObject)
    })
}
