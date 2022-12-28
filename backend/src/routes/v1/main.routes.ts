import express, { Express, Response, Request } from 'express';
import { auth } from '../../middlewares/auth';
import { MainController } from '../../controller/main.controller';
import { AdminController } from '../../controller/admin.controller';
export const mainrouter = express.Router();


mainrouter.post("/contact-us", MainController.create_contactus);
mainrouter.post("/partner-us", MainController.create_patner);
mainrouter.post("/check-status", MainController.check_status);
mainrouter.post("/create-order", auth(), MainController.create_order);
mainrouter.put("/upload-constant", auth(), MainController.uploadConstant);
mainrouter.put("/genratePk", auth(), MainController.genrateintent);

//admin-routes
mainrouter.get("/get-All-order", auth(), AdminController.AllGetOrder);
mainrouter.get("/get-All-user", auth(), AdminController.GetAllUser);
mainrouter.put("/notes-applied", auth(), AdminController.notes_applied);
mainrouter.put("/complete-process", auth(), AdminController.complete_process);
mainrouter.get("/contace-us", AdminController.get_contactus);
mainrouter.get("/patner-with-us", AdminController.get_partnerus);
mainrouter.post("/extra-request", AdminController.Extra_requests);
mainrouter.post("/process-log", AdminController.Process_log);

mainrouter.post('/create-blog', AdminController.create_blog)
mainrouter.get('/blogs', AdminController.get_blogs)
mainrouter.get('/mycreate-blog', auth(), AdminController.my_create_blog)
mainrouter.delete('/mycreate-blog', auth(), AdminController.delete_my_create_blog);
mainrouter.get('/dashboard-details', auth(), AdminController.dashboard_details);
mainrouter.delete('/delete-contactus', auth(), AdminController.delete_contact);
mainrouter.get('/register-user', auth(), AdminController.get_registerUser);
//automation process
mainrouter.post("/awaiting-consent", AdminController.awaiting_consent);

