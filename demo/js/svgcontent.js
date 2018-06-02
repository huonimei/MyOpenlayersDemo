/****
 * 初期要完成的事情：
 * 根据比例尺切换设备占地面积 = =这个好像写起来很麻烦
 * 并设置各个部分的宽高
 *
 */
var contenthead = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" ' +
    'x="0px" y="0px" width="130px" height="130px" viewBox="0 0 130 130" enable-background="new 0 0 130 130" xml:space="preserve">';
//断路器
var Breaker = contenthead +
    '<rect x="53.8" y="36.8" width="26.7" height="58.7" stroke="#000"  fill="#000" stroke-width="1.5"/> ' +
    '<line  stroke="#231815" stroke-width="1.5"  fill="#EFEFEF" x1="66.5" y1="8.5" x2="66.5" y2="36.8"/> ' +
    '<line  stroke="#231815"  stroke-width="1.5" fill="#EFEFEF" x1="66.5" y1="123.5" x2="66.5" y2="95.8"/></svg>';
//刀闸
var Disconnector = contenthead +
    '<line  stroke="#231815" stroke-width="1.5"  fill="#EFEFEF"  x1="49.4" y1="30.7" x2="49.4" y2="79"/> ' +
    '<line  stroke="#231815"  stroke-width="1.5" fill="#EFEFEF"  x1="45.2" y1="37" x2="53.6" y2="36.7"/></svg>';
//电抗
var Compensator = contenthead + '<path opacity="1" fill="#FFFFFF"  stroke="#000000" stroke-miterlimit="10"  d="M31,46.4"/>' +
    '<path opacity="1" fill="#FFFFFF"  stroke="#000000" stroke-miterlimit="10"  d="M31,46.4c0-10,7.8-18.1,17.3-18.1s17.3,8.1,17.3,18.1s-7.8,18.1-17.3,18.1"/>' +
    '<line 	stroke="#000000" stroke-miterlimit="10" x1="31" y1="45.9" x2="48.3" y2="45.9"/>' +
    '<line 	stroke="#000000" stroke-miterlimit="10" x1="31" y1="45.9" x2="48.3" y2="45.9"/>' +
    '<line	stroke="#000000" stroke-miterlimit="10" x1="31" y1="45.9" x2="48.3" y2="45.9"/>' +
    '<line 	stroke="#000000" stroke-miterlimit="10" x1="48.3" y1="81.2" x2="48.3" y2="63.9"/>' +
    '<line 	stroke="#000000" stroke-miterlimit="10" x1="48.3" y1="27.8" x2="48.1" y2="45.9"/>' +
    '<line 	stroke="#000000" stroke-miterlimit="10" x1="48.6" y1="9.5" x2="48.3" y2="27.7"/></svg>';
//电容器
var Compensator1 = contenthead +
    '<line stroke="#231815" stroke-width="1.5"  fill="#EFEFEF" x1="41" y1="28" x2="41" y2="73.5"/>' +
    '<line stroke="#231815" stroke-width="1.5"  fill="#EFEFEF" x1="58.5" y1="28.6" x2="58.5" y2="72.9"/>' +
    '<line stroke="#231815" stroke-width="1 .5"  fill="#EFEFEF" x1="58.6" y1="50.9" x2="77.8" y2="50.6"/>' +
    '<line stroke="#231815" stroke-width="1.5"  fill="#EFEFEF" x1="21.7" y1="50.9" x2="41" y2="50.6"/></svg>';
//地刀
var GroundDisconnectior = contenthead +
    '<line stroke="#231815" stroke-width="1.5"  fill="#EFEFEF" x1="49.4" y1="27.4" x2="49.4" y2="72.9"/>' +
    '<line stroke="#231815" stroke-width="1.5"  fill="#EFEFEF" x1="45.2" y1="37" x2="53.6" y2="36.7"/>' +
    '<line stroke="#231815" stroke-width="1.5"  fill="#EFEFEF" x1="39.4" y1="72.9" x2="59.4" y2="72.9"/>' +
    '<line stroke="#231815" stroke-width="1.5"  fill="#EFEFEF" x1="41.3" y1="77.5" x2="56.3" y2="77.5"/>' +
    '<line stroke="#231815" stroke-width="1.5"  fill="#EFEFEF" x1="44.8" y1="81.6" x2="53.2" y2="81.3"/></svg>';






