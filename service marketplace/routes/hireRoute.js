const router = require('express').Router()

const postValidator = require('../validator/dashboard/post/postValidator')
const { isAuthenticated } = require('../middleware/authMiddleware')
const upload = require('../middleware/uploadMiddleware')

const {
    hirePostGetController,
    hirePostPostController,
    postsGetController
} = require('../controllers/postController')

router.get('/hire', isAuthenticated, hirePostGetController)
router.post('/hire', isAuthenticated, upload.single('post-thumbnail'), postValidator, hirePostPostController)

// router.get('/edit/:postId', isAuthenticated, editPostGetController)
// router.post('/edit/:postId', isAuthenticated, upload.single('post-thumbnail'), postValidator, editPostPostController)

// router.get('/delete/:postId', isAuthenticated, deletePostGetController)

router.get('/', isAuthenticated, postsGetController)

module.exports = router