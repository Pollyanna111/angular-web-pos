var loadPromotions = function() {
    return [
        '可口可乐',
        '雪碧',
        '方便面'
    ]
};


var get_the_current_time = function(){
    var currentDate = new Date(),
        year = dateDigitToString(currentDate.getFullYear()),
        month = dateDigitToString(currentDate.getMonth() + 1),
        date = dateDigitToString(currentDate.getDate()),
        hour = dateDigitToString(currentDate.getHours()),
        minute = dateDigitToString(currentDate.getMinutes()),
        second = dateDigitToString(currentDate.getSeconds()),
        text = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
    return text;
};

var dateDigitToString = function (num) {
    return num < 10 ? '0' + num : num;
};