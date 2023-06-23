let log = {
    info: function(msg) {
        console.log('Info: ' + msg);
    },
    sum: function(a,b){
        console.log(a+b);
    }
}

module.exports = log;

module.exports.person = 'john doe';