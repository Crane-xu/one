var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  if(req.session.visitorname==null){
    res.render('index', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('index', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" id="showbox" value="退出" onclick="logout()"'});
  }
});
// 主页
router.get('/index', function (req, res, next) {
  if(req.session.visitorname==null){
    res.render('index', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('index', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
// 登录页
router.get('/login', function (req, res, next) {
  res.render('login');
});
// 注册页
router.get('/register', function (req, res, next) {
  res.render('register');
});
// 二级页面
router.get('/secondpage/a1', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage1', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage1', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/a2', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage2', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage2', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/a3', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage3', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage3', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/a4', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage4', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage4', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/b1', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage5', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage5', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/b2', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage6', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage6', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/b3', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage7', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage7', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/b4', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage8', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage8', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/c1', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage9', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage9', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/c2', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage10', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage10', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/c3', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage11', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage11', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/d1', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage12', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage12', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/d2', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage13', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage13', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/d3', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage14', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage14', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/d4', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('secondpage15', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('secondpage15', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
// 书籍详细页面
router.get('/secondpage/books/book1', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book1', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book1', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book2', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book2', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book2', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book3', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book3', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book3', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book4', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book4', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book4', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book5', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book5', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book5', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book6', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book6', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book6', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book7', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book7', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book7', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book8', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book8', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book8', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book9', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book9', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book9', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book10', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book10', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book10', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book11', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book11', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book11', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book12', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book12', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book12', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book13', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book13', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book13', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book14', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book14', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book14', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book15', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book15', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book15', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book16', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book16', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book16', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book17', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book17', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book17', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book18', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book18', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book18', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book19', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book19', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book19', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book20', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book20', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book20', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book21', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book21', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book21', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book22', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book22', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book22', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book23', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book23', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book23', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book24', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book24', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book24', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book25', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book25', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book25', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book26', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book26', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book26', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book27', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book27', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book27', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book28', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book28', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book28', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book29', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book29', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book29', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/secondpage/books/book30', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('book30', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('book30', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
// 话题讨论页面
router.get('/comment1', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('comment1', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('comment1', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/comment2', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('comment2', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('comment2', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/comment3', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('comment3', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('comment3', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});
router.get('/comment4', function(req,res,next){
  if(req.session.visitorname==null){
    res.render('comment4', {visitor1: 'input type="button" class="btn" value="登录" onclick="login()"',
    visitor2: 'input type="button" class="btn" value="注册" onclick="register()"'});
  }else{
    res.render('comment4', {visitor1: 'input type="text" id="showbox" value="'+req.session.visitorname+',欢迎您" disabled readonly',
    visitor2: 'input type="button" class="btn" value="退出" onclick="logout()"'});
  }
});

module.exports = router;