import { DataTypes, Model } from 'sequelize';
import { sequelizeDB } from '../db/db-connection';
import { getintouchinterface } from '../interface/getintouch.interface';



export class GetInTouchInstance extends Model<getintouchinterface> {
}
GetInTouchInstance.init(
    {
        GIT_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        FIRSTNAME: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        LASTNAME: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        EMAIL: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        ABOUT: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        BODY_FILE: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    {
        sequelize: sequelizeDB,
        tableName: 'tbl_get_in_touch',
    }
);

