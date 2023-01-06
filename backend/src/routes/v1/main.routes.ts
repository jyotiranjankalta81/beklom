import express, { Express, Response, Request } from 'express';
import { auth } from '../../middlewares/auth';
import { MainController } from '../../controller/main.controller';
import { AdminController } from '../../controller/admin.controller';
export const mainrouter = express.Router();


mainrouter.post("/get-started", MainController.get_started);
mainrouter.post("/get-onboard-home",MainController.get_onboard_home);
mainrouter.post("/contact-us", MainController.create_contactus);
mainrouter.post("/subscribe", MainController.subscribe);
mainrouter.post("/get-in-touch", MainController.get_in_touch);

//admin-routes
mainrouter.get("/get-started", MainController.get_Started);
mainrouter.delete("/delete-get-started",auth(), AdminController.delete_Started);

mainrouter.get("/get-in-touch-home", AdminController.get_in_touch_home);
mainrouter.delete("/get-in-touch-home", auth(), AdminController.delete_in_touch_home);

mainrouter.get("/contact-us", AdminController.get_contactus);
mainrouter.delete('/delete-contactus', auth(), AdminController.delete_contact);

mainrouter.get("/subscribe", MainController.get_subscribe)
mainrouter.delete("/subscribe", auth(), AdminController.delete_subscribe);


mainrouter.get("/get-onboarding", AdminController.get_onboarding);
mainrouter.delete("/delete-onboarding",auth(), AdminController.delete_onboarding);

mainrouter.post("/partner-us", MainController.create_patner);
mainrouter.get("/patner-with-us", AdminController.get_partnerus);


mainrouter.post('/create-blog',auth(), AdminController.create_blog);
mainrouter.get('/blogs',auth(), AdminController.get_blogs);
mainrouter.get('/mycreate-blog', AdminController.my_create_blog);
mainrouter.delete('/mycreate-blog', auth(), AdminController.delete_my_create_blog);
mainrouter.get('/dashboard-details', auth(), AdminController.dashboard_details);
mainrouter.get('/register-user',AdminController.get_registerUser);

mainrouter.post('/section1',auth(),AdminController.section1);
mainrouter.get('/section1',AdminController.get_section1);
mainrouter.put('/section1',auth(),AdminController.update_section1);
mainrouter.post('/section2',auth(),AdminController.section2);
mainrouter.post('/section3',auth(),AdminController.section3);

mainrouter.post("/extra-request", AdminController.Extra_requests);
mainrouter.post("/process-log", AdminController.Process_log);
mainrouter.post("/awaiting-consent", AdminController.awaiting_consent);
mainrouter.get("/get-All-order", auth(), AdminController.AllGetOrder);
mainrouter.get("/get-All-user", auth(), AdminController.GetAllUser);
mainrouter.put("/notes-applied", auth(), AdminController.notes_applied);
mainrouter.put("/complete-process", auth(), AdminController.complete_process);
mainrouter.post("/check-status", MainController.check_status);
mainrouter.post("/create-order", auth(), MainController.create_order);
mainrouter.put("/upload-constant", auth(), MainController.uploadConstant);
mainrouter.put("/genratePk", auth(), MainController.genrateintent);
