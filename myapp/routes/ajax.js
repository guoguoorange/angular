/**
 * Created by Administrator on 2017/1/4.
 */
var express=require("express");
var router=express.Router();

router.use("/ajax",function(req,res){
    var data=[
        {name:"蔡依林",phone:"12334433",en:"c"},
        {name:"周杰伦",phone:"12334433",en:"z"},
        {name:"张杰",phone:"12334433",en:"z"},
        {name:"沈梦辰",phone:"12334433",en:"s"},
        {name:"关晓彤",phone:"13312345678",en:"g"},
        {name:"杨幂",phone:"13312345678",en:"y"},
        {name:"黄子韬",phone:"13312345678",en:"h"},
        {name:"鹿晗",phone:"13312345678",en:"l"},
        {name:"张三",phone:"13312345678",en:"z"},
        {name:"邓超",phone:"13312345678",en:"d"},
        {name:"杨颖",phone:"13312345678",en:"y"},
        {name:"陈赫",phone:"13312345678",en:"c"},
        {name:"李四",phone:"13312345678",en:"l"},
        {name:"王五",phone:"13312345678",en:"w"},
        {name:"金晨",phone:"13312345678",en:"j"},
        {name:"尹正",phone:"13312345678",en:"y"},
        {name:"陈红",phone:"13312345678",en:"c"},
        {name:"赵六",phone:"13312345678",en:"z"},
        {name:"杨紫",phone:"13312345678",en:"y"},
        {name:"李易峰",phone:"13312345678",en:"l"},
        {name:"高圆圆",phone:"13312345678",en:"g"},
        {name:"马七",phone:"13312345678",en:"m"},
        {name:"欧阳娜娜",phone:"13312345678",en:"o"},
        {name:"何炅",phone:"13312345678",en:"h"},
        {name:"汪涵",phone:"13312345678",en:"w"},
        {name:"岳八",phone:"13312345678",en:"y"}

    ]
    res.send(JSON.stringify(data))
})
module.exports=router;