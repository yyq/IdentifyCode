var image = window.frames[1].document.getElementsByTagName("img")[0];                 //获取到验证码图片
var canvas = document.createElement('canvas');                        //新建一个canvas
var ctx = canvas.getContext("2d");                                    //获取2D上下文
var numbers = [];                                                     //存储数字模板的数组
canvas.width = image.width;                                           //设置canvas的宽度
canvas.height = image.height;                                         //设置canvas的高度
document.body.appendChild(canvas);                                    //将canvas添加进文档
ctx.drawImage(image, 0, 0);                                           //将验证码绘制到canvas上
for (var i = 0; i < 4; i++) {                                         //循环四次,识别四个数字
    var pixels = ctx.getImageData(13 * i + 7, 3, 9, 16).data;         //按照公式获取到每个数字上的像素点
    var ldString = "";                                                //用来存储明暗值的字符串
    for (var j = 0, length = pixels.length; j < length; j += 4) {                 //每次循环取四个值,分别是一个像素点的r,g,b,a值
        ldString = ldString + (+(pixels[j] * 0.3 + pixels[j + 1] * 0.59 + pixels[j + 2] * 0.11 >= 128));     //灰度化+二值化,但我们并没有真正的处理图像
    }                 
    console.log(ldString);                 //输出存储着明暗值的字符串
} 
