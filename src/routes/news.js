const express = require('express')
const router = express.Router();

const newsController = require('../app/controlllers/NewController');

//? newsController.index
//! Tất cả những gì liên quan tới thằng news thì sẽ được viết hết vào bên trong này.
router.use('/:slug',newsController.show) ; //! cần phải đảo cái này nên trên để nó lướt qua cái part :slug trước.
//! nếu không khớp nó sẽ ở lại, còn nếu khớp thì nó đi xuống dưới
router.use('/',newsController.index) ; //! tuyến đường nên để ở cuối cùng. bởi vì nó sẽ đọc từ trên xuống.

module.exports = router;