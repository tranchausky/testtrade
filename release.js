var _0x1b97 = ['keydown', 'new', 'is_show_first', '#InputNumber', '32mLvFjs', '.bet-wrapper', '.highcharts-series-group', '#FC5F5F', 'is--isWay:', 'fill', 'maxWin', '5SIciQr', 'way', 'val', 'run-setHistory', 'timeSetPrice', 'push', 'timeSetHistory', 'time_old', 'last_event:', 'first', '97eaqirO', '#rightContent\x20.btnDown', 'attr', 'no\x20buy', '263910ZJLtYD', 'ddd->d', 'keyup', 'setPrice', 'length', 'time', 'setHistory', 'xx->d', 'buy\x20up', '888453tlZBva', 'toString', '#31BAA0', 'old', 'blur', 'keypress', '.font-14.mb-0', 'text', 'buy\x20down', 'xxx->x', 'xd->x', '5066USmdpv', '152443UkesEe', 'find', 'time_win', 'getSeconds', 'sort', 'status', 'substring', 'Hãy\x20đặt\x20lệnh', '22212tHnZei', '1QmGaSe', 'number\x20lost:', 'keyBuy', 'click', 'no-change', 'path', '906395YbhunI', 'Build', '6459CcGLWQ'];
var _0x5c49 = function(_0x2d5281, _0x2e2168) { _0x2d5281 = _0x2d5281 - 0x150; var _0x1b979a = _0x1b97[_0x2d5281]; return _0x1b979a; };
var _0x2aff0d = _0x5c49;
(function(_0x61d0d5, _0x422799) {
    var _0x59d691 = _0x5c49;
    while (!![]) {
        try {
            var _0x265243 = parseInt(_0x59d691(0x17c)) + -parseInt(_0x59d691(0x15a)) * -parseInt(_0x59d691(0x151)) + -parseInt(_0x59d691(0x160)) + -parseInt(_0x59d691(0x178)) * parseInt(_0x59d691(0x162)) + parseInt(_0x59d691(0x185)) + parseInt(_0x59d691(0x150)) * -parseInt(_0x59d691(0x16e)) + parseInt(_0x59d691(0x167)) * parseInt(_0x59d691(0x159));
            if (_0x265243 === _0x422799) break;
            else _0x61d0d5['push'](_0x61d0d5['shift']());
        } catch (_0x4e58bc) { _0x61d0d5['push'](_0x61d0d5['shift']()); }
    }
}(_0x1b97, 0x6fa7e));

function getInView() {
    var _0x1a0fcd = _0x5c49,
        _0x572230 = $(_0x1a0fcd(0x168)),
        _0x51a623 = _0x572230[_0x1a0fcd(0x152)](_0x1a0fcd(0x18b))[_0x1a0fcd(0x18c)](),
        _0x3da34f = _0x572230['find']('.font-18.mb-0')[_0x1a0fcd(0x18c)]();
    _0x3da34f = _0x3da34f['replace']('s', '');
    var _0x3083fa = {};
    return _0x3083fa[_0x1a0fcd(0x181)] = parseInt(_0x3da34f), _0x3083fa['way'] = '', _0x51a623 == _0x1a0fcd(0x158) && (_0x3083fa[_0x1a0fcd(0x16f)] = 0x1), _0x51a623 == 'Chờ\x20Kết\x20quả' && (_0x3083fa['way'] = 0x0), _0x3083fa;
}

function setTimeoutAgain() {
    var _0x7969b6 = setTimeout(function() {
        var _0x5e7335 = _0x5c49,
            _0x488fd3 = getSecond(),
            _0x504732 = getInView();
        switch (_0x504732['way']) {
            case 0x0:
                tem['status'][_0x5e7335(0x17f)] = 0x0, tem['status'][_0x5e7335(0x161)] = 0x0, tem[_0x5e7335(0x156)][_0x5e7335(0x182)] = 0x0;
                break;
            case 0x1:
                _0x504732[_0x5e7335(0x181)] > 0x14 && _0x504732[_0x5e7335(0x181)] <= 0x19 && tem['status'][_0x5e7335(0x182)] == 0x0 && (tem['status'][_0x5e7335(0x182)] = 0x1, clog(_0x5e7335(0x171)), setHistory());
                if (_0x504732[_0x5e7335(0x181)] > 0xf && _0x504732[_0x5e7335(0x181)] <= 0x18 && tem['status']['setPrice'] == 0x0) {
                    clog('run-\x20set\x20prices'), tem[_0x5e7335(0x156)]['setPrice'] = 0x1;
                    var _0x529298 = getValueSet();
                    setPrice(_0x529298);
                }
                _0x504732[_0x5e7335(0x181)] > 0x0 && _0x504732[_0x5e7335(0x181)] <= 0x4 && tem[_0x5e7335(0x156)]['Build'] == 0x0 && (tem[_0x5e7335(0x156)][_0x5e7335(0x161)] = 0x1, clog(_0x5e7335(0x161)), build(changeWayV2()));
                break;
            default:
                break;
        }
        setTimeoutAgain();
    }, 0x3e8);
}
var isWIN = !![],
    glb_whatWay = !![],
    tem = {};
tem['timeForBuy'] = 0x2, tem[_0x2aff0d(0x172)] = 0x4, tem[_0x2aff0d(0x174)] = 0xa, tem[_0x2aff0d(0x15c)] = 0x1, tem['keyCheck'] = 0x0, tem[_0x2aff0d(0x188)] = getMoney(), tem[_0x2aff0d(0x164)] = 0x0, tem[_0x2aff0d(0x177)] = getMoney(), tem[_0x2aff0d(0x165)] = !![], tem[_0x2aff0d(0x175)] = new Date()['toLocaleTimeString'](), tem[_0x2aff0d(0x153)] = '', tem[_0x2aff0d(0x16d)] = 0x32, tem[_0x2aff0d(0x156)] = {};

function reloadIsWin() {
    var _0x4f84c7 = _0x2aff0d;
    tem[_0x4f84c7(0x164)] = getMoney();
    var _0x8bfa5f = _0x4f84c7(0x15e);
    return tem[_0x4f84c7(0x164)] > tem[_0x4f84c7(0x188)] && (_0x8bfa5f = !![]), tem[_0x4f84c7(0x164)] < tem[_0x4f84c7(0x188)] && (_0x8bfa5f = ![]), tem[_0x4f84c7(0x188)] = tem['new'], _0x8bfa5f;
}

function setPrice(_0x9f571) {
    var _0x3d8670 = _0x2aff0d;
    _0x9f571 = _0x9f571[_0x3d8670(0x186)](), jQuery('#InputNumber')[_0x3d8670(0x170)](_0x9f571), $(function() {
        var _0x46db89 = _0x3d8670;
        $(_0x46db89(0x166))[_0x46db89(0x163)](), $('#InputNumber')[_0x46db89(0x18a)](), $(_0x46db89(0x166))[_0x46db89(0x17e)](), $('#InputNumber')[_0x46db89(0x189)]();
    });
}

function getMoney() {
    var _0x33f687 = _0x2aff0d,
        _0x33b6a4 = jQuery('.balance\x20b')['text']();
    return _0x33b6a4 = _0x33b6a4['replace'](/,/g, ''), _0x33b6a4 = parseFloat(_0x33b6a4[_0x33f687(0x157)](0x1)), _0x33b6a4;
}

function build(_0x24a4cd) {
    var _0x48abc0 = _0x2aff0d;
    clog(_0x48abc0(0x16b) + _0x24a4cd);
    switch (_0x24a4cd) {
        case 'x':
            clog(_0x48abc0(0x184)), jQuery('#rightContent\x20.btnSuccess')['trigger']('click');
            break;
        case 'd':
            clog(_0x48abc0(0x18d)), jQuery(_0x48abc0(0x179))['trigger'](_0x48abc0(0x15d));
            break;
        default:
            clog(_0x48abc0(0x17b));
            break;
    }
}

function addZero(_0x5057a8) { return _0x5057a8 < 0xa && (_0x5057a8 = '0' + _0x5057a8), _0x5057a8; }

function getSecond() {
    var _0x2ab13a = _0x2aff0d,
        _0x6d90b2 = new Date(),
        _0x5c6e8e = addZero(_0x6d90b2[_0x2ab13a(0x154)]());
    return _0x5c6e8e;
}
var clGreen = _0x2aff0d(0x187),
    clRed = _0x2aff0d(0x16a);

function colorAt(_0x3ec003) {
    var _0x4c876f = _0x2aff0d,
        _0x463bb1 = $('.highcharts-series-group')['eq'](0x0)['find']('g')['eq'](0x0)[_0x4c876f(0x152)](_0x4c876f(0x15f))[_0x4c876f(0x180)] - 0x1,
        _0x5503c2 = _0x463bb1 - parseInt(_0x3ec003),
        _0xa4022b = $(_0x4c876f(0x169))['eq'](0x0)[_0x4c876f(0x152)]('g')['eq'](0x0)[_0x4c876f(0x152)](_0x4c876f(0x15f))['eq'](_0x5503c2),
        _0x56343a = _0xa4022b[_0x4c876f(0x17a)]('fill');
    if (_0x56343a == clRed) return ![];
    return !![];
}
var atLastWin = ![],
    numberLastFalse = 0x0,
    lostValueSet = { 0x0: 0x1, 0x1: 0x2, 0x2: 0x4, 0x3: 0x8, 0x4: 0x10, 0x5: 0x20 };

function getValueSet() { var _0x5e5204 = 0x1; return atLastWin != !![] && (_0x5e5204 = lostValueSet[numberLastFalse]), _0x5e5204; }

function setHistory() {
    var _0x5a3462 = _0x2aff0d;
    atLastWin = reloadIsWin();
    switch (atLastWin) {
        case ![]:
            numberLastFalse++;
            break;
        case !![]:
            numberLastFalse = 0x0;
            break;
        default:
            break;
    }
    clog(_0x5a3462(0x176) + atLastWin), clog(_0x5a3462(0x15b) + numberLastFalse), numberLastFalse >= lostValueSet[_0x5a3462(0x180)] - 0x1 && (numberLastFalse = 0x0);
}

function changeWayV2() {
    var _0x4a4e70 = _0x2aff0d,
        _0x5a401e = [_0x4a4e70(0x18f), 'dx->x', 'dd->x', _0x4a4e70(0x183), _0x4a4e70(0x18e), _0x4a4e70(0x17d)];
    _0x5a401e = _0x5a401e[_0x4a4e70(0x155)]((_0x3e7f00, _0x56ebc2) => _0x56ebc2[_0x4a4e70(0x180)] - _0x3e7f00[_0x4a4e70(0x180)]);
    for (var _0x4ed260 in _0x5a401e) {
        var _0x53f2b8 = _0x5a401e[_0x4ed260],
            _0x4087a0 = _0x53f2b8['split']('->');
        if (_0x4087a0['length'] == 0x2) {
            var _0xc7f964 = _0x4087a0[0x0],
                _0x132eac = _0x4087a0[0x1],
                _0x2980df = getListColor(),
                _0x33e666 = !![];
            for (var _0x5c03dc in _0xc7f964) { if (_0x2980df[_0x5c03dc] == _0xc7f964[_0x5c03dc]) {} else _0x33e666 = ![]; }
            if (_0x33e666 == !![]) return clog(_0xc7f964 + '->' + _0x132eac), _0x132eac;
        }
    }
    return null;
}

function getListColor() {
    var _0x3b9dd6 = _0x2aff0d,
        _0x5ea2b4 = [],
        _0x4d122e = $(_0x3b9dd6(0x169))['eq'](0x0)[_0x3b9dd6(0x152)]('g')['eq'](0x0)[_0x3b9dd6(0x152)](_0x3b9dd6(0x15f))[_0x3b9dd6(0x180)] - 0x1;
    for (var _0x95ddea = _0x4d122e; _0x95ddea >= 0x0; _0x95ddea--) {
        var _0x49b60b = $(_0x3b9dd6(0x169))['eq'](0x0)['find']('g')['eq'](0x0)[_0x3b9dd6(0x152)](_0x3b9dd6(0x15f))['eq'](_0x95ddea),
            _0x1f02f7 = _0x49b60b['attr'](_0x3b9dd6(0x16c)),
            _0x17d829 = 'x';
        _0x1f02f7 == clRed && (_0x17d829 = 'd'), _0x5ea2b4[_0x3b9dd6(0x173)](_0x17d829);
    }
    return _0x5ea2b4;
}
setTimeoutAgain();

function clog(_0x77d9db) {}

clog('run it version: 10:38 AM 21/2/2021')