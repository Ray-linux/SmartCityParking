import express from "express"
import { login, register} from "../controllers/usercontroll.js";

import {registervehicle} from "../controllers/vehiclecontroll.js"
import {registreLocation} from "../controllers/locationcontroller.js"

import { parkingAvailability, parkingSlot, updateSlot} from "../controllers/parkingAvailabilityControll.js";

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/registervehicle', registervehicle)
router.post('/registerlocation', registreLocation)  //for admin
router.post('/parkingavaiable', parkingAvailability)  //for admin
router.post('/parkingslot', parkingSlot)  //for admin
router.put('/updateparkingslot/:id', updateSlot)




export default router;