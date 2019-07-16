import moment from 'moment'

function titleCheck(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].title.length > 5) {
            array[i].title = array[i].title.slice(0, 5) + '...'
        } else {
            array[i].title = array[i].title
        }

    }
}

function nameCheck(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.length > 5) {
            array[i].name = array[i].name.slice(0, 5) + '...'
        } else {
            array[i].name = array[i].name
        }

    }
}
// 错题库拼音限制
function wrongCheck(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].spell.length > 10) {
            array[i].spell = array[i].spell.slice(0, 10) + '...'
        } else {
            array[i].spell = array[i].spell
        }

    }
}
// 错题库名字限制
function nameWrongCheck(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].name.length > 5) {
            array[i].name = array[i].name.slice(0, 5) + '...'
        } else {
            array[i].name = array[i].name
        }

    }
}
// 日期限制
function dateCheck(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].updateTime = moment(array[i].updateTime).format('YYYY-MM-DD')
    }

}

// function titleContent(array) {
//     if (array.length > 12) {
//         array = array.slice(0, 12) + '...'
//     }
// }

function titleContent(array) {
    if (array.length > 10) {
        return array = array.slice(0, 10) + '...'
    } else {
        return array = array
    }
}

// 个人信息长度限制
function personChecks(array) {
    if (array.length > 7) {
        return array = array.slice(0, 7) + '...'
    } else {
        return array = array
    }
}
// 同步阅读长度限制
function readBackcheck(array) {
    for (let i = 0; i < array.length; i++) {
        if ((array[i].serialNumber + array[i].name).length > 13) {
            array[i].name = (array[i].serialNumber + array[i].name).slice(0, 13) + '...'
        } else {
            array[i].name = (array[i].serialNumber + array[i].name)
        }

    }
}
// 作文详情题目长度限制
function goodListcheck() {
    if (array.length > 10) {
        array = array.slice(0, 10) + '...'
    }
}

// 把字符串截取成数组
// function stringChange(string) {
//     string =  string.split(' ')
// }
export { titleCheck, dateCheck, nameCheck, titleContent, personChecks, wrongCheck, readBackcheck, goodListcheck, nameWrongCheck }