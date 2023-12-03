/**
 * @swagger
 *  tags:
 *   name: User
 *   description: User Modules and Routes        
 */

/**
 * @swagger
 * components:
 *      schemas:
 *          SendOtp:
 *              type: object
 *              required:
 *                  -   mobile
 *              properties:
 *                  mobile:
 *                      type: string
 */

/**
 * @swagger
 * 
 * /user/whoami:
 *  get:
 *      summery: get user profile
 *      tags:
 *          -  User
 *      responses:
 *          200:
 *            description: success
 */