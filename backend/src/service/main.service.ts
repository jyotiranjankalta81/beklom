import { GetStartedInstance } from './../model/getstarted.model';
import {OnBoardingInstance } from '../model/onboarding.model';
import { uuid } from 'uuidv4';
import { Request } from 'express'
import { ContactusInstance } from '../model/contactus';
import { OrderInstance } from '../model/order.model';
import { randomgenrator } from '../utils/randomnumber';
import { OrderextenseInstance } from '../model/orderextense.model';
import { sendMail } from '../utils/sendMail';
import { consentone_body } from '../template/consentone';
import dotenv from 'dotenv'
import path from 'path';
import { config } from '../config/config';
import { consenttwo_body } from '../template/consenttwo';
import { uploadimage } from '../utils/imageupload';
import { ProcessLogModel } from '../model/processlog.model';
import { PartnerusInstance } from '../model/PartnerUs.model';
import moment from 'moment';
import { sequelizeDB } from '../db/db-connection';
import { QueryTypes } from 'sequelize';
import { uploadconsent } from '../template/uploadconsent';
import { GetOnBoardHomeInstance } from '../model/getonboardhome.model';
import { SubscribeInstance } from '../model/subscribe.model';
dotenv.config({ path: path.join(__dirname, '../../.env') });


class mainServiceClass {
    create_contactus = async (req: Request) => {
        const result = await ContactusInstance.create(
            {
                FIRSTNAME: req.body.FIRSTNAME,
                LASTNAME: req.body.LASTNAME,
                PHONE: req.body.PHONE,
                EMAIL: req.body.EMAIL,
                MESSAGE: req.body.MESSAGE,
            }
        )
        return result

    }
    get_started = async (req: Request) => {
        const result = await GetStartedInstance.create(
            {
                FIRSTNAME: req.body.FIRSTNAME,
                LASTNAME: req.body.LASTNAME,
                EMAIL: req.body.EMAIL,
                PHONE: req.body.PHONE,
            }
        )
        return result

    }
    subscribe = async (req: Request) => {
        const result = await SubscribeInstance.create(
            {
                EMAIL: req.body.EMAIL,
            }
        )
        return result

    }
    get_subscribe = async (req: Request) => {
        const result = await SubscribeInstance.findAll()
        return result

    }
    
    get_Started = async (req: Request) => {
        const result = await GetStartedInstance.findAll()
        return result

    }

    get_in_touch = async (body: any, files: any) => {
        let images: any = null
        if (files.BODY_FILE) {
            images = uploadimage(files.BODY_FILE);
        }
        const result = await OnBoardingInstance.create({
            FIRSTNAME: body.FIRSTNAME,
            LASTNAME: body.LASTNAME,
            EMAIL: body.EMAIL,
            ABOUT: body.ABOUT,
            BODY_FILE: images,
        })

        return result;
    }

    check_status = async (req: Request) => {
        const result = await sequelizeDB.query(
            `SELECT tbl_order.STATUS FROM tbl_order LEFT JOIN tbl_ordeextense ON tbl_ordeextense.ORDER_ID  = tbl_order.ORDER_ID WHERE tbl_ordeextense.NORMAL_ID = '${req.body.ORDER_ID}' OR tbl_ordeextense.SPECIAL_ID = '${req.body.ORDER_ID}'`,
            {
                nest: true,
                type: QueryTypes.SELECT,
            }
        )
        return result;

    }
    get_onboard_home = async (req: Request) => {
        const result = await GetOnBoardHomeInstance.create({
            NAME: req.body.NAME,
            EMAIL: req.body.EMAIL,
            CONTACTUS: req.body.CONTACTUS,
            ADDRESS: req.body.ADDRESS,
            MESSAGE: req.body.MESSAGE,
    })
        return result
}



    create_patner = async (req: Request) => {
        const result = await PartnerusInstance.create(
            {
                FULLNAME: req.body.FULLNAME,
                EMAIL: req.body.EMAIL,
                WHATSAPP: req.body.WHATSAPP,
                MESSAGE: req.body.MESSAGE,
            }
        )
        return result

    }

    CreateProcessLog = async (req: any) => {
        const result = await ProcessLogModel.create(
            {
                ORDER_ID: req.ORDER_ID,
                PROCESS_STATUS: true,
                PERPOUS: req.PERPOUS,
            }
        )
        return result

    }

    create_order = async (req: Request, header: any) => {
        const result = await OrderInstance.create(
            {
                ORDER_TYPE: req.body.ORDER_TYPE,
                F_NAME: req.body.F_NAME,
                L_NAME: req.body.L_NAME,
                DOB: req.body.DOB,
                VISA_APP_NO: req.body.VISA_APP_NO,
                EMAIL: req.body.EMAIL,
                PATNER_TYPE: req.body.PATNER_TYPE,
                SUPPOSE_F_NAME: req.body.SUPPOSE_F_NAME,
                SUPPOSE_L_NAME: req.body.SUPPOSE_L_NAME,
                SUPPOSE_DOB: req.body.SUPPOSE_DOB,
                UCI_NUMBER: req.body.UCI_NUMBER,
                ATIP: req.body.ATIP,
                HEAR_CMT: req.body.HEAR_CMT,
                APPLIED_BY: header.sub,
            }
        )
        return result
    }


    create_order_extense = async (req: Request, order1: any) => {
        const randomnumber: string = randomgenrator(7)


        const result = await OrderextenseInstance.create(
            {
                ORDER_ID: order1.dataValues.ORDER_ID,
                NORMAL_ID: randomnumber,
                SPECIAL_ID: null,
                DOCUMENT_STATUS: false,
                DOCUMENTS: null,
                PAYMENT_TYPE: req.body.PAYMENT_TYPE,
                PAYMENT_ID: req.body.PAYMENT_ID,
                NOTES_APPLIEDON: null,
                NOTES_APPLIEDBY: null,
                COMPLETION_DATE: null,
                COMPLETED_BY: null,
            }
        )
        return result
    }
    send_mail = async (req: Request, order: any) => {
        if (req.body.ORDER_TYPE === 1 || req.body.ORDER_TYPE === 2 || req.body.ORDER_TYPE === 3 || req.body.ORDER_TYPE === 4) {
            const nodemail = await sendMail(req.body.EMAIL, "GCMSBuddy - Complete Your GCMS Notes Order", "", consentone_body(`${req.body.F_NAME} ${req.body.L_NAME}`, `${config.backendurl}consent/CBSA_Consent_Form_New.pdf`, `${config.backendurl}consent/CBSA_Sample_Consent.jpg`, `http://localhost:3000/consent-uploader?orderID=${order?.NORMAL_ID}`));
            return nodemail;
        }
        else if (req.body.ORDER_TYPE === 5) {
            const nodemail = await sendMail(req.body.EMAIL, "GCMSBuddy - Complete Your CBSA Notes Order", "", consenttwo_body(`${req.body.F_NAME} ${req.body.L_NAME}`, `${config.backendurl}consent/GCMS_Consent_Form.pdf`, `${config.backendurl}consent/GCMS_Sample_Consent.jpg`, `http://localhost:3000/consent-uploader?orderID=${order?.NORMAL_ID}`));
            return nodemail;
        }
        else {
            const nodemail = await sendMail(req.body.EMAIL, "GCMSBuddy - Complete Your GCMS Notes Order", "", consentone_body(`${req.body.F_NAME} ${req.body.L_NAME}`, `${config.backendurl}consent/CBSA_Consent_Form_New.pdf`, `${config.backendurl}consent/CBSA_Sample_Consent.jpg`, `http://localhost:3000/consent-uploader?orderID=${order?.NORMAL_ID}`));
            return nodemail;
        }

    }

    uploadConstant = async (ORDER_ID: any, files: any) => {
        let constantpdf = null;

        if (files.Constantpdf) {
            constantpdf = uploadimage(files.Constantpdf);
        }

        const result = await OrderextenseInstance.update(
            {
                DOCUMENT_STATUS: true,
                DOCUMENTS: constantpdf,
                COMPLETION_DATE: moment(new Date()).add(35, 'd').format("YYYY/MM/DD HH:mm:ss"),
            },
            {
                where: {
                    NORMAL_ID: ORDER_ID,
                }
            }
        )
        return result

    }

    getOrdereId = async (ORDER_ID: any) => {
        const result = await OrderextenseInstance.findOne(
            {
                where: {
                    NORMAL_ID: ORDER_ID,
                }
            }
        )
        return result


    }
    getemailbyorder = async (ORDER_ID: any) => {
        const result = await OrderInstance.findOne(
            {
                where: {
                    ORDER_ID: ORDER_ID,
                }
            }
        )
        return result


    }

    UploadConsentEmail = async (EMAIL: any, TRACKING_ID: any) => {
        const nodemail = await sendMail(EMAIL, "GCMSBuddy - Consent Uploaded Successfully", "", uploadconsent(TRACKING_ID));
        return nodemail;

    }

}



export const mainService = new mainServiceClass()