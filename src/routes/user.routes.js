import {Router} from 'express';
import {registerUser} from '../controllers/user.controller.js';
import {upload} from '../middlewares/multer.middleware.js';

const router = Router();


router.post('/register', registerUser); // POST route for registration

router.get('/test', (req, res) => {
    res.json({ message: 'Test route working!' }); // Test route
});

router.route("/register").post(

    upload.fields([
        {
            name: "avatar",
            maxcount: 1
        },
        {
            name: "coverImage",
            maxcount: 1
        }

    ]),
    registerUser
)

export default router;